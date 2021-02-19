import React from 'react';
import { Button } from 'react-bootstrap';

import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

export default function AddFolderButton() {
  function openModal() {

  };
  
  return (
    <Button 
      onClick={openModal}
      variant='outline-success'
      size='sm'
    >
      <CreateNewFolderIcon />
    </Button>
  )
};