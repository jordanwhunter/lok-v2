import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useFolder } from '../../hooks/useFolder';
import Navbar from './Navbar';
import AddFolderButton from './AddFolderButton';
import AddFileButton from './AddFileButton';
import Folder from './Folder';
import FolderBreadcrumbs from './FolderBreadcrumbs';

export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders } = useFolder(folderId, state.folder);
  // console.log(folder)
  
  return (
    <>
      <Navbar />
      <Container fluid>
        <div className='d-flex align-items-center'>
          <FolderBreadcrumbs currentFolder={folder}/>
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className='d-flex flex-wrap'>
            {childFolders.map(childFolder => (
              <div 
                key={childFolder.id}
                style={{ maxWidth: '150px' }}
                className='p-2'
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  )
};