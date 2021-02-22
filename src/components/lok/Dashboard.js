import React from 'react';
import { Container } from 'react-bootstrap';
import { useFolder } from '../../hooks/useFolder';
import Navbar from './Navbar';
import AddFolderButton from './AddFolderButton';

export default function Dashboard() {
  const { folder } = useFolder();
  
  return (
    <>
      <Navbar />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />
      </Container>
    </>
  )
};