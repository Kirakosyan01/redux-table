import React from 'react';
import './seeMore.css';

export default function SeeMore({ handleIsDeleteTrue }) {
  return (
    <div className='SeeMoreComponent'>
        <button>Edit</button>
        <button onClick={handleIsDeleteTrue}>Delete</button>
    </div>
  )
}
