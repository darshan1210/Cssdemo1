import React from 'react'
import Logo from '../../../assets/img/logo.png'
import './header.css'

function Header () {
  return (
        <div className='header'>
            <div className='logo_background'>
            <img className='logo' src={Logo} alt="" />
            </div>
            <div className='nav'>
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">About</a>
                <a href="#">Page</a>
                <a href="#">Blocks</a>
                <a href="#">Contact</a>
                <button className='nav_btn'>buy now</button>
            </div>
        </div>
  )
}

export default Header
