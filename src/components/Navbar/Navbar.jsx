import React, { useState } from 'react';
import './navbar.css';
import AddForm from '../AddForm/AddForm';
import FilterComponent from '../FilterComponent/FilterComponent';
import { useDispatch } from 'react-redux';
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import SearchForm from '../SearchForm/SearchForm';

export default function Navbar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dispatch = useDispatch();

  const handleFilterByAge = () => {
   dispatch({type: "FILTER_BY_AGE"});
  }
  const handleFilterByName = () => {
    dispatch({type: "FILTER_BY_NAME"});
  }
  const handleFilterByDefault = () => {
    dispatch({type: "FILTER_BY_DEFAULT"});
  }

  const handleFormOpen = () => {
    setIsFormOpen(true);
    setIsFilterOpen(false);
    setIsSearchOpen(false);
    dispatch({ type: "SEARCH_SUBMIT", payload: "" });
  }
  const handleFilterOpen = () => {
    setIsFilterOpen(true);
    setIsFormOpen(false);
    setIsSearchOpen(false);
    dispatch({ type: "SEARCH_SUBMIT", payload: "" });
  }
  const handleSearchOpen = () => {
    setIsSearchOpen(true);
    setIsFilterOpen(false);
    setIsFormOpen(false);
  }
  const handleSearchClose = () => {
    setIsSearchOpen(false);
    dispatch({ type: "SEARCH_SUBMIT", payload: "" });
  }
  const handleFormClose = () => {
    setIsFormOpen(false);
  }
  const handleFilterClose = () => {
    setIsFilterOpen(false);
  }

  return (
    <nav className='navbar'>
      <div className='addButtonDiv'>
      <h1>List of Users</h1>
      {isFormOpen ? <button className='NavCloseBtn' onClick={handleFormClose}>Close</button> : <button className='AddNewBtn' onClick={handleFormOpen}><IoMdAdd className='NavBtnIcon'/>Add</button>}
      {isFilterOpen ? <button className='NavCloseBtn' onClick={handleFilterClose}>Close</button> : <button className='NavFilterBtn' onClick={handleFilterOpen}><CiFilter className='NavBtnIcon'/>Filter</button>}
      {isSearchOpen ? <button className='NavCloseBtn' onClick={handleSearchClose}>Close</button> : <button className='NavSearchBtn' onClick={handleSearchOpen}><CiSearch  className='NavBtnIcon'/>Search</button>}
      </div>
      {isFormOpen && <AddForm />}
      {isFilterOpen && <FilterComponent handleFilterByAge={handleFilterByAge} handleFilterByName={handleFilterByName} handleFilterByDefault={handleFilterByDefault}/>}
      {isSearchOpen && <SearchForm />}
    </nav>
  )
}
