import React from 'react';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function AddFileButton({ currentFolder }) {
  function handleUpload(event) {

  };
  
  return (
    <label className='btn btn-outline-success btn-sm m-0 mr-2'>
      <CloudUploadIcon />
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
