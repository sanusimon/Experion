import React from 'react'
import './style.scss'
import Search from './Search'
import Profilebox from './Profilebox'

function Header() {
  return (
    <header className='header'>
        <div className='inner_'>
            <div className='user_name'>
                <h2>Hi John!</h2>
            </div>
            <div className='rt_bar'>
                <Search />
                <Profilebox />  
            </div>
        </div>
    </header>
  )
}

export default Header
