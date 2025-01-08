import React from 'react'
import logo from '../../img/svg/logo.svg'
import { ContainerNavBottom } from '../../style/styleHome'

const NavBottom = () => {
    return (
        <ContainerNavBottom>
    <div className='nav_bottom'>
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
    </ContainerNavBottom>
    )
}

export default NavBottom