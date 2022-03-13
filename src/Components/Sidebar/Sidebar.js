import React from 'react'
import Logo from './Logo';
import Menu from './Menu';
import './style.scss';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Logo /> 
      <Menu />
    </div> 
  )
}

export default Sidebar
