import React from 'react'
import logo from '../../img/svg/logo.svg'
import { ContainerNavBottom } from '../../style/styleHome'
import { Link } from 'react-router-dom'
import RouterComponent from '../../components/router'

const NavBottom = () => {
    return (
        <ContainerNavBottom>
    <div className='nav_bottom'>
    <div className='logodiv'>
        <img src={logo}/>
        <p>Bistro Bliss</p>
    </div>
    <div className='nav_bottom_list'>
    <Link to={'/'} style={{textDecoration :"none"}}>
    <p>Home</p>
    </Link>
    <Link to={'/about'} style={{textDecoration: 'none'}}>
        <p>About</p>
    </Link>
    <Link to={'/menu'} style={{textDecoration: 'none'}}>
        <p>Menu</p>
    </Link>
    <Link to={'/pages'} style={{textDecoration: 'none'}}>
        <p>Pages</p>
    </Link>
    <Link to={'/contact'} style={{textDecoration: 'none'}}>
        <p>Contact</p>
    </Link>
    </div>
    <button className='nav_bottom_btn'>Book A Table</button>
    </div>
    </ContainerNavBottom>
    )
}

export default NavBottom