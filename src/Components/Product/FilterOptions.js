import React from 'react'

function FilterOptions() {

    

    const Options = [
        {
            "gender" : [
                {
                    name : "Men",
                    id : "men"
                },
                {
                    name : "Women",
                    id : "women"
                },
                {
                    name : "Boys",
                    id : "boys"
                },
                {
                    name : "Girls",
                    id : "girls"
                }
            ],
            "price" :[
                {
                    price : "Rs. 1997 to Rs. 6172 ",
                    id : "price1"
                },
                {
                    price : "Rs. 1997 to Rs. 6172 ",
                    id : "price2"
                },
                {
                    price : "Rs. 1997 to Rs. 6172 ",
                    id : "price3"
                },
                {
                    price : "Rs. 1997 to Rs. 6172 ",
                    id : "price4"
                },
                {
                    price : "Rs. 1997 to Rs. 6172 ",
                    id : "price5"
                },
                {
                    price : "Rs. 1997 to Rs. 6172 ",
                    id : "price6"
                }
            ],
            "Categories" :[
                {
                    name : "Tshirts ",
                    count : (106),
                    id : "cat1"
                },
                {
                    name : "Track Pants",
                    count : (106),
                    id : "cat2"
                },
                {
                    name : "Tshirts ",
                    count : (106),
                    id : "cat3"
                },
                {
                    name : "Track Pants",
                    count : (106),
                    id : "cat4"
                },
                {
                    name : "Tshirts ",
                    count : (106),
                    id : "cat5"
                },
                {
                    name : "Track Pants",
                    count : (106),
                    id : "cat6"
                },
                {
                    name : "Tshirts ",
                    count : (106),
                    id : "cat7"
                },
                {
                    name : "Track Pants",
                    count : (106),
                    id : "cat8"
                },
            ],
            "color" : [
                {
                    color : "Black",
                    code: "#323F39",
                    id:"color1",
                    border:"1px solid #323F39"
                },
                {
                    color : "White",
                    code: "#FFFFFF",
                    id:"color2",
                    border:"1px solid rgba(0, 0, 0, 0.26)"
                },
                {
                    color : "Blue",
                    code: "#005EBB",
                    id:"color3",
                    border:"1px solid #005EBB"
                },
                {
                    color : "Pink",
                    code: "#FE9898",
                    id:"color4",
                    border:"1px solid #FE9898"
                }
            ]
        }
    ]

  return (
    <div className='fl_bx'>
        {Options.map((option,index)=>{
            return(
                <div key={index} className=''>
                    <div className='item'>
                        {option.gender.map((subitem , i) => {
                            return (
                                <div className='half_' key={i}>
                                    <input type="checkbox" id={subitem.id} name={subitem.name} value="" />
                                    <label for={subitem.id}> {subitem.id} </label>
                                </div>
                            )
                        })}
                    </div>
                    <div className='item'>
                        <h3>Price</h3>
                        {option.price.map((subitem , i) => {
                            return (
                                <div className='half_' key={i}>
                                    <input type="checkbox" id={subitem.id} name={subitem.name} value="" />
                                    <label for={subitem.id}> {subitem.price} </label>
                                </div>
                            )
                        })}
                    </div>
                    <div className='item'>
                    <h3>Categories</h3>
                        {option.Categories.map((subitem , i) => {
                            return (
                                <div className='half_' key={i}>
                                    <input type="checkbox" id={subitem.id} name={subitem.name} value="" />
                                    <label for={subitem.id}> {subitem.name} <span className='count'>({subitem.count})</span> </label>
                                </div>
                            )
                        })}
                    </div>

                    <div className='item color_'>
                    <h3>Color</h3>
                        {option.color.map((subitem , i) => {
                            return (
                                <div className='half_' key={i}>
                                    <input type="checkbox" id={subitem.id} name={subitem.name} value="" />
                                    <label for={subitem.id}> <span className='code' style={{background:subitem.code , border: subitem.border}}></span> {subitem.color} </label>
                                </div>
                            )
                        })}
                    </div>
                    
                    
                </div>
            )
        })}
    </div>
  )
}

export default FilterOptions
