import React from 'react'
import SearchIcon from '../../images/search.svg'
function Search() {
  return (
    <div className='search_area'>
        <div className='srch_icon'>
            <img src={SearchIcon} alt="" />
        </div>
        <div className='search_field'>
            <input type="text" className='srch_txt' placeholder="Search for products, brands and more" />
        </div>
    </div>
  )
}

export default Search
