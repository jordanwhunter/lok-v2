import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { db } from '../../firebase';

import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

export default function AddFolderButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  
  function openModal() {
    setOpen(true)
  };

  function closeModal() {
    setOpen(false)
  };

  function handleSubmit(e) {
    e.preventDefault()

    // Create folder within the database
    db.folders.add({
      name: name,
    })
    setName('')
    closeModal()
  };
  
  return (
    <>
      <Button 
        onClick={openModal}
        variant='outline-success'
        size='sm'
      >
        <CreateNewFolderIcon />
      </Button>

      <Modal 
        show={open} 
        onHide={closeModal}
        animation={false}
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type='text'
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant='secondary'
              onClick={closeModal} 
            >
              Close
            </Button>
            <Button
              variant='success'
              type='submit'
            >
              Add Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
};