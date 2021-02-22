import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

export default function FolderBreadcrumbs({ currentFolder }) {
  return (
    <Breadcrumb 
      className='flex-grow-1'
      listProps={{ className: 'bg-white pl-0 m-0'}}
    >
      {currentFolder && (
        <Breadcrumb.Item 
          classname='text-truncated-inline-block' 
          style={{ maxWidth: '150px' }}
          active
        >
          {currentFolder.name}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  )
};