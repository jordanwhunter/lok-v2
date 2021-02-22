import React from 'react';
import { Container } from 'react-bootstrap';
import { useFolder } from '../../hooks/useFolder';
import Navbar from './Navbar';
import AddFolderButton from './AddFolderButton';
import Folder from './Folder';

export default function Dashboard() {
  const { folder } = useFolder();
  // console.log(folder)
  
  return (
    <>
      <Navbar />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />
        {folder && <Folder folder={folder}/>}
      </Container>
    </>
  )
};