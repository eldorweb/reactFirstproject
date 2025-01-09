import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLink from '../allpages/home/main'
import AboutLink from '../allpages/about/main'
import MenuLink from '../allpages/menu/main'
import PagesLink from '../allpages/pages/main'
import ContactLink from '../allpages/contact/main'
import NavBottom from '../allpages/home/nav_bottom'
import NavTop from './nav_top'

const RouterComponent = () => {
    return (
    < >
    <NavTop />
    <NavBottom />
    <Routes>
        <Route path='/' element ={<HomeLink />} />
        <Route path='/about' element ={<AboutLink />} />
        <Route path='/menu' element ={<MenuLink />} />
        <Route path='/pages' element={<PagesLink />}/>
        <Route path='/contact' element={<ContactLink />} />
    </Routes>
    </>
    )
}

export default RouterComponent