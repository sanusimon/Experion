import React from 'react'
import Cart from './Cart'
import Wishlist from './Wishlist'



function Profilebox() {
    const userData = [
        {
            username : "John Paul",
            img : require("../../images/user-img.png")
        },
    ]
    console.log(userData.username)
  return (
    <div className='prof_box'>
        <div className='first_bx'>
            <Wishlist />
            <Cart />
        </div>
        <div className='user_prfle'>
            {userData.map((user)=>{
                return(
                    <>
                    <div className='img_'>
                        <img src={user.img} alt="" />
                    </div>
                    <label className='usrname'> 
                        <span className="name_">{user.username}</span>
                        <span className='usr_arow'></span>
                    </label>
                    
                    </>
                    
                )
                
            })}
            
        </div>
    </div>
  )
}

export default Profilebox
