import React from 'react'

function Cards({src,headline,deadline}) {
   
  return (
    <div style={{display:'flex',flexDirection:"column",alignItems:"center"}}>
        <img src={src} alt="" />
        <p style={{fontSize:"1rem",fontWeight:"700"}}>{headline}</p>
        <p>{deadline}</p>
    </div>
  )
}

export default Cards;