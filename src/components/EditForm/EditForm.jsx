import React from 'react';
import './editForm.css';

export default function EditForm({ user, handleEditModalCancel, handleEditForm }) {
  return (
    <div className='EditFormContainer'>
        <div className='EditFormModal'>
          <p className='EditUser'>Edit user</p>
            <form onSubmit={handleEditForm} className='EditForm'>
              <label htmlFor="firstName">First name:</label>
              <input type="text" name='firstName' defaultValue={user.firstName} required/>
              <label htmlFor="lastName">Last name:</label>
              <input type="text" name='lastName' defaultValue={user.lastName} required/>
              <label htmlFor="age">Age:</label>
              <input type="text" name='age' defaultValue={user.age} required/>
              <label htmlFor="email">Email:</label>
              <input type="text" name='email' defaultValue={user.email} required/>
              <label htmlFor="">Company:</label>
              <input type="text" name='company' defaultValue={user.company} required/>
              <label htmlFor="status">Status:</label>
              <input type="text" name='status' defaultValue={user.status} required/>
              <div className='EditFormButtons'>
              <button className='EditFormSave' type='submit'>Save</button>
              <button className='EditFormCancel' onClick={handleEditModalCancel} type='button'>Cancel</button>
              </div>
            </form>
        </div>
    </div>
  )
}
