import React from 'react'
import  './all.css'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav '>
        <ul className='ul'>
           <NavLink  to='/login' className={(e)=>{return e.isActive?'red':''}}>login</NavLink>
           <NavLink  to='/signup' className={(e)=>{return e.isActive?'red':''}}>signup</NavLink>
           <NavLink  to='/' className={(e)=>{return e.isActive?'red':''}}>home</NavLink>
            
        </ul>
    </div>
  )
}

export default Navbar