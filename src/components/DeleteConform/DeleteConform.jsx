import React from 'react';
import './deleteConform.css'

export default function DeleteConform({ handleDeleteModalCancel, handleIsDeleteModalTrue }) {
  return (
    <div className='DeleteConformContainer'>
        <div className='DeleteModal'>
           <p className='ModalFirstText'>Are you sure?</p>
           <p className='ModalSecondText'>Do you really want to delete these records? this process cannot be undone.</p>
           <div className='DeleteModalBtn'>
            <button onClick={handleDeleteModalCancel} className='DeleteModalCancel'>Cancel</button>
            <button onClick={handleIsDeleteModalTrue} className='DeleteModalDelete'>Delete</button>
           </div>
        </div>
    </div>
  )
}
