import React from 'react'
import menuicons from './MenuIcons';

function Menu() {

    

  return (
    <div className='side_menu'>
        <ul className='nav'>
            {menuicons.map((menuicon , index)=>{
                return(
                    <li key={index}>
                        <a href='#' className={menuicon.active ? 'active' : ''}>
                            <img src={menuicon.icon} alt=""/>
                        </a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Menu
