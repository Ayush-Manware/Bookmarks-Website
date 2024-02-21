import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <Link className='navbar-tabs' to={"/"}>Home</Link>
        <Link to={"/bookmarks"} className='navbar-tabs'>Bookmarks</Link>
        <Link to={"/locations"} className='navbar-tabs'>Locations</Link>
        <Link to={"/stories"} className='navbar-tabs'>Stories</Link>
        <Link to={"/policies"} className='navbar-tabs'>Policies</Link>
        <Link to={"/top-social-sites"} className='navbar-tabs'>Top Social Sites</Link>
        <Link to={"/pricing-plans"} className='navbar-tabs'>Pricing Plans</Link>
        <Link to={"/contact-us"} className='navbar-tabs'>Contact Us</Link>
    </div>
  )
}

export default Navbar