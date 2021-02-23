import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidV4 } from 'uuid';
import { Toast, ProgressBar } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { storage, db } from '../../firebase';
import { ROOT_FOLDER } from '../../hooks/useFolder';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function AddFileButton({ currentFolder }) {
  const [uploadingFiles, setUploadingFiles] = useState([]);
  
  const { currentUser } = useAuth();
  
  function handleUpload(event) {
    const file = event.target.files[0]
    if (currentFolder == null || file == null ) return
    
    const id = uuidV4();

    // setting progress for files being uploaded in the moment
    setUploadingFiles(prevUploadingFiles => [
      ...prevUploadingFiles,
      { 
        id: id,
        name: file.name,
        progress: 0,
        error: false
      }
    ]);

    // take the names of folders and concatenate them so file path has folders in it
    const filePath =
      // if in the root folder...
      currentFolder === ROOT_FOLDER
        // ignore currentFolder's name - take the path, combine w/ a slash and append file name to the end
        ? `${currentFolder.path.join('/')}/${file.name}`
        // if not in the root, still take path and add currentFolder's name and file name
        : `${currentFolder.path.join('/')}/${currentFolder.name}/${file.name}`

    // for managing uploads within firebase
    const uploadTask = storage
      .ref(`/files/${currentUser.uid}/${filePath}`)
      .put(file)

    // need information not only stored in firebase storage, but also the database. the state_changed event determines when state is changing, as well as when upload is complete (and if there are any errors). it takes 3 different functions: 
    uploadTask.on(
      'state_changed', 
      // 1) function called repeatedly telling progress of upload:
      snapshot => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes;

        setUploadingFiles(prevUploadingFiles => {
          return prevUploadingFiles.map(uploadFile => {
            if (uploadFile.id === id) {
              return { 
                ...uploadFile, 
                progress: progress 
              }
            }
            return uploadFile
          })
        });
      },

      // 2) function that tells what happens on error:
      () => {
        setUploadingFiles(prevUploadingFiles => {
          return prevUploadingFiles.map(uploadFile => {
            if (uploadFile.id === id) {
              return { 
                ...uploadFile, 
                error: true
              }
            }
            return uploadFile
          })
        });
      },
      
      // 3) function that occurs after upload has completed:
      () => {
        // filter through prevUploadingFiles and filter the one that matches current id for saving
        setUploadingFiles(prevUploadingFiles => {
          return prevUploadingFiles.filter(uploadFile => {
            return uploadFile.id !== id
          })
        });

        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          // add uploaded file as object to database
          db.files.add({
            url: url,
            name: file.name,
            createdAt: db.getCurrentTimeStamp(),
            folderId: currentFolder.id,
            userId: currentUser.uid
          })
        });
      }
    )
  };
  
  return (
    <>
      <label className='btn btn-outline-success btn-sm m-0 mr-2'>
        <CloudUploadIcon />
        {/* hiding input with styles */}
        <input 
          type='file'
          onChange={handleUpload}
          style={{
            opacity: 0,
            position: 'absolute',
            left: '-9999px'
          }} 
        />
      </label>
      
      {/* uploading progress displayed in portal*/}
      {
        uploadingFiles.length > 0 
        && ReactDOM.createPortal(
          <div
            style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              maxWidth: '250px'
            }}
          >
            {uploadingFiles.map(file => (
              <Toast 
                key={file.id}
                onClose={() => {
                  setUploadingFiles(prevUploadingFiles => {
                    return prevUploadingFiles.filter(uploadFile => {
                      // if it doesn't equal current id, don't remove
                      return uploadFile.id !== file.id
                    })
                  })
                }}
              >
                <Toast.Header 
                  closeButton={file.error}
                  className='text-truncate w-100 d-block'
                >
                  {file.name}
                </Toast.Header>
                <Toast.Body>
                  <ProgressBar
                    animated={!file.error}
                    variant={
                      file.error 
                        ? 'danger' 
                        : 'primary'
                    }
                    label={
                      file.error 
                        ? 'Error' 
                        : `${Math.round(file.progress * 100)}%`
                    }
                    // determines where in progress we are (progress outputs as decimal so must multiply by 100)
                    now={file.error ? 100 : file.progress * 100}
                  />
                </Toast.Body>
              </Toast>
            ))}
          </div>,
          // ReactDOM.createPortal() takes a second property: where portal will be rendered
          document.body
        )
      }
    </>
  )
};
