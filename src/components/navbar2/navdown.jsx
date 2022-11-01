import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navdown.css";
// import { navdownArr } from "./navdown";
import Downmenu from "./downmenu";

const navdownArr = [
  {name:"sale",status:false,id:1},
  {name:"New in",status:false,id:2},
  {name:"clothing",status:false,id:3},
  {name:"Dresses",status:false,id:4},
  {name:"Shoes",status:false,id:5},
  {name:"Sportswear",status:false,id:6},
  {name:"Accessories",status:false,id:13},
  {name:"Autumn",status:false,id:7},
  {name: "Trending Now",status:false,id:8},
  {name:"Topshop",status:false,id:9},
  {name:"Face + Body",status:false,id:10},
  {name:"Brands",status:false,id:11},
  {name:"Outlet",status:false,id:14},
  {name:"Marketpalce",status:false,id:12},

];

function Navdown() {
  const [status, setStatus] = useState(false);
  const [arr, setArr]=useState(navdownArr)
  const [selectedid,setselectedid]=useState(null)

  const handleUpdateTrue=(id)=>{
  {
    let x=arr.map((e)=>(
      ((e.id===id) ?  {...e,status:true}:e)
      
      ))
      setArr(x)
      setStatus(true)
   
  }
  setselectedid(id)
}

const handleUpdateFalse=(selectedid)=>{
  {
    let x=arr.map((e)=>(
      ((e.id===selectedid) ?  {...e,status:false}:e)
      
      ))
      setArr(x)
      setStatus(false)
    
   
  }
}
console.log(selectedid)
  return (
    <div>
      <nav className="nav-down">
        {arr.map((item) => (
         
          <ul
          key={item.id}
         

            className="nav-down-links"
            onMouseEnter={() => handleUpdateTrue(item.id) }
            // onMouseLeave={() => handleUpdateFalse(item.id)}
           
          >
            <li  >
              <Link>{item.name}</Link>  
            </li>
          </ul>
        ))}
      </nav>
        {status && <Downmenu handleUpdateFalse={handleUpdateFalse}   />}
    </div>
  );
}

export default Navdown;
