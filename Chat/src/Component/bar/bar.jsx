import React, { useState } from 'react'
import logo from "../assets/online-shopping.png"
import "../bar/bar.css"
import { SideBar } from '../../../data/data'
function Sidebar(){
    let [Value , Setvalue] = useState(0);
    return(
        <div className='navbar'>
            <div className='logosec'>
                <img src={logo} alt="logo" />
                <span>
                    Sh<span>o</span>p
                </span>
            </div>
            <div className='menu'>
               { SideBar.map((value,index)=> {
                  return (
                    <div onClick={()=>{
                        Setvalue(index)
                    }} key={index} className={Value === index ? "element active" : "element"}>{value.name}</div>
                  )
                }) }
            </div>
        </div>
    )
}
export default Sidebar
