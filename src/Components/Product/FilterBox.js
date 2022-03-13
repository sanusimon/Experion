import React from 'react'
import FilterButton from './FilterButton'
function FilterBox() {

    const selectCategory = [
        {
            catname : "Size"
        },
        {
            catname : "Color"
        },
        {
            catname : "Nike"
        },
        {
            catname : "Casual"
        },
        {
            catname : "Footwear"
        },

    ]

  return (
    <div className='filter_box'>
        <div className='select_cat'>
            <p className='filtr_title'>Filters based on your profile</p>
            <ul className='list_'>
                {selectCategory.map((cat , index)=>{
                    return(
                        <li key={index}> 
                            <p>{cat.catname}</p>
                            <a className='close'> 
                                <span></span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
        <FilterButton />
    </div>
  )
}

export default FilterBox
