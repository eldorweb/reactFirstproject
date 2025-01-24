import React from 'react'
import logo from '../../img/svg/logo.svg'
import { ContainerNavBottom, LinkChange } from '../../style/styleHome'
import { Link } from 'react-router-dom'

const NavBottom = () => {
    return (
        <ContainerNavBottom>
    <div className='nav_bottom'>
    <div className='logodiv'>
        <img src={logo}/>
        <p>Bistro Bliss</p>
    </div>
    <div className='nav_bottom_list'>
    <LinkChange to={'/'}>
    <p>Home</p>
    </LinkChange>
    <LinkChange to={'/about'} style={{}}>
        <p>About</p>
    </LinkChange>
    <LinkChange to={'/menu'} style={{}}>
        <p>Menu</p>
    </LinkChange>
    <LinkChange to={'/pages'} style={{}}>
        <p>Pages</p>
    </LinkChange>
    <LinkChange to={'/contact'} style={{}} >
        <p>Contact</p>
    </LinkChange>
    <LinkChange to={'/login'} style={{}} >
        <p>Login</p>
    </LinkChange>
    </div>
    <button className='nav_bottom_btn'>Book A Table</button>
    </div>
    </ContainerNavBottom>
    )
}

export default NavBottom