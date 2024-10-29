import React from 'react';
import './addForm.css';
import { useDispatch } from 'react-redux';

export default function AddForm() {
  const dispatch = useDispatch();

  const handleSubmitAddForm = (e) => {
    e.preventDefault();
    const [firstName, lastName, age, email, company, status] = e.target;
    const newUser = {
      id: new Date().getTime().toString(),
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
      email: email.value,
      company: company.value,
      status: status.value,
      isSeeMore: false,
    }
    dispatch({type: "ADD_USER", payload: newUser})
    
    e.target.reset();
  }

  return (
    <div className='AddFormDiv'>
      <form onSubmit={handleSubmitAddForm} className='AddForm'>
        <input type="text" placeholder='First name' required/>
        <input type="text" placeholder='Last name' required/>
        <input type="number" placeholder='Age' required/>
        <input type="text" placeholder='Email' required/>
        <input type="text" placeholder='Company' required/>
        <input type="text" placeholder='Status' required/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
