import React from 'react'
import styles from "./navbar.css"
import {Logo} from "./navbar.images/images"
import{Link ,} from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai"
import { BsHandbag } from "react-icons/bs"
import Navdown from '../navbar2/navdown';

function Navbar() {
 
  return (
    <div>
    <div className= "navbar-container">
        <div className="logo">
        <Link to="/" > <img src={Logo }alt="logo image" /></Link>
           
        </div>
        <div className='nav-comp'>
          <Link to="/" ><h1>Women</h1></Link>

        </div >
        <div className='nav-comp'>
          <Link to="/product" ><h1>Men</h1></Link>

        </div>
        <form>
          <input className='search'/>
        </form>
        <Link to="*" className='nav-icon'>
        <CgProfile/>
        </Link>
        <Link to="/*" className='nav-icon'>
        <AiOutlineHeart/>
        </Link >
        <Link to="/*" className='nav-icon'>
        <BsHandbag/>
        </Link >  
</div>
{/* <Navdown/> */}
    </div>


   
    
  )
}

export default Navbar










