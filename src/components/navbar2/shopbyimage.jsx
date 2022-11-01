import React from 'react'
import {Link} from "react-router-dom"
import './shopby.css'

function Shopbyimage({head,shopby,toggle}) {
  return (
    <div className='shopbyimage-div'>
        <h2 style={{fontWeight: 500, textDecoration: " underline 2px"}}>{head}</h2>
        <ul className='shopbyimage-link-div'>
        {
            shopby.map((item)=>(
               <li className='image-link-child' onClick={()=>toggle()}>
                <div >
                <img src={item.image} alt="" />

                </div>
                <Link >{item.title}</Link>
                   
                   {/* <u style={{color:"#666"}}/> */}
                  

               </li>
                
            ))
        }

        </ul>
       
    </div>
  )
}

export default Shopbyimage