import React from 'react'
import logo from '../assets/svg/logo.svg'

const NavBottom = () => {
    return (
    <div className='container nav_bottom'>
    <div className='logodiv'>
        <img src={logo}/>
        <p>Bistro Bliss</p>
    </div>
    <div className='nav_bottom_list'>
        <p>Home</p>
        <p>About</p>
        <p>Menu</p>
        <p>Pages</p>
        <p>Contact</p>
    </div>
    <button className='nav_bottom_btn'>Book A Table</button>
    </div>
    )
}

export default NavBottom