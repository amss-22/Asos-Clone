import React,{useState} from 'react'
import Shopby from './shopby'
import './downmenu.css'
import {downmenu} from "./navdownone"
import Shopbyimage from './shopbyimage'

function Downmenu({handleUpdateFalse}) {
    // console.log(downmenu.shopbyProducts)
    const[state,setState]=useState(false)

    const handleClick=()=>{
        setState(true)
        // console.log("hi")
    }
  return (
    <div className="down-menu" onClick={()=>handleUpdateFalse()}>
       <Shopby head="SHOP BY PRODUCT" shopby={downmenu.shopbyProducts} toggle={handleClick}/>
       <Shopbyimage head="SHOP BY EDIT" shopby={downmenu.shopbyEdit} toggle={handleClick} />
       <Shopbyimage head="SHOP BY STUDENTS" shopby={downmenu.shopbyStudent} toggle={handleClick} />

       

    </div>
  )
}

export default Downmenu