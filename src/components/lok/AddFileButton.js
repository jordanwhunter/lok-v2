import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { storage } from '../../firebase';
import { ROOT_FOLDER } from '../../hooks/useFolder';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function AddFileButton({ currentFolder }) {
  const { currentUser } = useAuth();
  
  function handleUpload(event) {
    const file = event.target.files[0]
    if (currentFolder == null || file == null ) return
    
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
      snapshot => {},
      // 2) function that tells what happens on error:
      () => {},
      // 3) function that occurs after upload has completed:
      () => {
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then(url => {
            console.log(url)
          })
      }
    )
  };
  
  return (
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
  )
};
