import React from 'react'
import ProductData from './ProductData';
function ProductList() {
  return (
    <div className='product_list'>
        {ProductData.map((product,index)=>{
            return(
                <div className='item_' key={index}>
                    <div className='product_image'>
                        <img src={product.image} alt="" />
                    </div>
                    <div className='content_box'>
                        <h3 className='title_'>
                            {product.title}
                        </h3>
                        <p className='desc_'> 
                            {product.description}
                        </p>
                        <span className='price_'>
                            Rs. <label> {product.price} </label>
                        </span>
                        <div className='add_to_cart'>
                            <input className='crt_btn_' type="submit" value="Add to Cart" />
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ProductList
