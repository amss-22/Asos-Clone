import React from 'react'

function LogoCards({src}) {
  return (
    <div >
      <img style={{border:"px solid red",height:'100%',marginLeft:"10px"}} src={src} alt="" />
    </div>
  )
}

export default LogoCards