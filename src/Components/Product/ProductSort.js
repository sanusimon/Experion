import React from 'react'
import Arrow from '../../images/arrow.svg'
function ProductSort() {

    const options = [
        {
            value : 'newest to oldest',
        },
        {
            value : 'oldest to newest',
        }
    ]


  return (
    <div className='prod_sort'>
        <div className='listing_title'>
            <h3 className='head_'>Showing 26 Product</h3>
        </div>
        <div className='sort_box'>
            <label className='label'>Sort by:</label>
            <div className='select_wrp'>
                <select className='select_'>
                    {options.map((option)=>{
                        return(
                            <option>{option.value}</option>
                        )
                    })}
                   
                </select>
                <span className='arow_'>
                    <img src={Arrow} />
                                        
                </span>
            </div>
            
        </div>
    </div>
  )
}

export default ProductSort
