import React from 'react'
import logo from '../../img/svg/logo.svg'
import { ContainerNavBottom, LinkChange } from '../../style/styleHome'
import { Link } from 'react-router-dom'
import message from './message.svg'

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
        <p>Loading</p>
    </LinkChange>
    </div>
    <LinkChange to={'/vhmenu'} style={{background:"transparent"}} >
    <button className='nav_bottom_btn'>Book A Table</button>
    </LinkChange>
    <LinkChange to={'/chat'} style={{background:"transparent"}} >
    <img src={message} style={{width:'30px', marginLeft:'30px' }}/>
    </LinkChange>
    
    </div>
    </ContainerNavBottom>
    )
}

export default NavBottom