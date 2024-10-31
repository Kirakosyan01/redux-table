import React from 'react';
import './seeMore.css';

export default function SeeMore({ handleIsDeleteTrue, handleIsEditTrue }) {
  return (
    <div className='SeeMoreComponent'>
        <button onClick={handleIsEditTrue}>Edit</button>
        <button onClick={handleIsDeleteTrue}>Delete</button>
    </div>
  )
}
