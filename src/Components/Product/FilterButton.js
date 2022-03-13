import React from 'react'
import {useState} from 'react';
import FilterOptions from './FilterOptions';


function FilterButton() {

  const [open , setOpen] = useState(false);

  const filterOptions =()=> {
    document.body.classList.add('show')
    setOpen(!open);
  }

  const closeBtn = () => {
    document.body.classList.remove('show');
    setOpen(false);
  }

  return (
    <div className='filter_rgt'>
      <div className='filter_btns'>
        <a href='#' className='filter_btn clear_'>Clear All</a>
        <a href='#' onClick={filterOptions} className='filter_btn'>Filters</a>
      </div>
      <div className={open ? 'filteropen filter_options' : 'filter_options'}>
        <div className='close_' onClick={closeBtn}>
          <span></span>
        </div>
        <div className='fl_title'>
          <h3>Filters</h3>
        </div>
        <FilterOptions />
      </div>
    </div>
  )
}

export default FilterButton
