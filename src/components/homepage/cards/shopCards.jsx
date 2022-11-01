import React from 'react'
import { Link } from 'react-router-dom'
import "./shopcards.css"




function ShopCards({src,headline,deadline,bttn}) {
    
  return (
    <div className='shopCards_container' >
        <div className='shopCards_image_container'>
        <img style={{height: "100%" ,width:"100%"}} src={src} alt="" />

        </div>
        <h1 style={{fontWeight:"700",fontSize:"1.8rem",marginTop:"15px"}}>{headline}</h1>
        <p style={{fontSize:"1.25rem"}}>{deadline}</p>
       
        <div >
            <h3 className='shopCards_link'>{bttn}</h3>
        </div>
        
       
    </div>
  )
}

export default ShopCards