import React from 'react';
import './filterComponent.css';

export default function FilterComponent({ handleFilterByAge, handleFilterByName, handleFilterByDefault }) {
  return (
    <div className='FilterComponent'>
        <button onClick={handleFilterByDefault}>By Default</button>
        <button onClick={handleFilterByAge}>By Age</button>
        <button onClick={handleFilterByName}>By first name</button>
    </div>
  )
}
