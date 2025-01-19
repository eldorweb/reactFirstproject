import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLink from '../allpages/home/main'
import AboutLink from '../allpages/about/main'
import MenuLink from '../allpages/menu/main'
import PagesLink from '../allpages/pages/main'
import ContactLink from '../allpages/contact/main'
import NavBottom from '../allpages/home/nav_bottom'
import NavTop from './nav_top'
import Footer from './Footer'
import Detail from '../datails/detail'
import ArticleDetail from '../datails/articleDetail'
import NotFound from '../404'
import LoginComp from '../auth/login'

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
        <Route path='/menu/detail/:id' element = {<Detail/>}/>
        <Route path='/pages/articledetail/:id' element = {<ArticleDetail/>}/>
        <Route path= '*' element={<NotFound />}/>
        <Route path='/login' element={<LoginComp />}/>
    </Routes>
    <Footer />
    </>
    )
}

export default RouterComponent