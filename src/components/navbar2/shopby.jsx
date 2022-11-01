import React from 'react'
import {Link} from "react-router-dom"
import './shopby.css'

function Shopby({head,shopby, toggle}) {
  return (
    <div className='shopby-div'>
        <h2 style={{fontWeight: 500, textDecoration: " underline 2px"}}>{head}</h2>
        <ul className='shopby-link-div' >
        {
            shopby.map((item)=>(
               <li onClick={()=> toggle() }>
                   <Link >{item}</Link>

               </li>
                
            ))
        }

        </ul>
       
    </div>
  )
}

export default Shopby