import React, { useState } from 'react';
import './navbar.css';
import AddForm from '../AddForm/AddForm';

export default function Navbar() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  }
  const handleFormClose = () => {
    setIsFormOpen(false);
  }

  return (
    <nav className='navbar'>
      <div className='addButtonDiv'>
      <h1>List of Users</h1>
      {isFormOpen ? <button onClick={handleFormClose}>Close</button> : <button onClick={handleFormOpen}>Add new user</button>}
      </div>
      {isFormOpen && <AddForm />}
    </nav>
  )
}
