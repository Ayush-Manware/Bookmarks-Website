import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className="topbar">
        <img src="https://www.a1bookmarks.com/wp-content/uploads/2021/02/logo.png" alt="logo" className='logo-image'/>
        <div className="login-register-div">
          <Link to={"/login"} className="button" >Login</Link>
          <Link to={"/register"} className='button'>Register</Link>
        </div>
    </div>
  )
}

export default Topbar