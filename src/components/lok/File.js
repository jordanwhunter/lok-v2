import React from 'react';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

export default function File({ file }) {
  return (
    <a 
      href={file.url} 
      className='btn btn-outline-dark text-truncate w-100'
      target='_blank' 
      rel='noreferrer' 
    >
      <InsertDriveFileIcon className='mr-2' />
      {file.name}
    </a>
  )
};