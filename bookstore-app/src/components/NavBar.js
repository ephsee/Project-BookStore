import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    
    <div className='topnav container-fluid'>
      <div  className='col ms-5'>
        <NavLink exact to='/'><p className="ps-3 pe-3" style={{fontFamily: "Amaranth", fontSize: "30px", color: "#816C61"}}>Home</p></NavLink>
      </div>
      <div className='col'>
        <NavLink to='/cart'><p className="ps-3 pe-3" style={{fontFamily: "Amaranth", fontSize: "30px", color: "#816C61"}}>Cart</p></NavLink>
      </div>
    </div>
  )
}

export default NavBar