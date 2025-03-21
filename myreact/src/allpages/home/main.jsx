import React, { StrictMode } from 'react'
import NavTop from '../../components/nav_top'
import NavBottom from './nav_bottom'
import Header from './header'
import Browse from './Browse'
import Provide from './Provide'
import Events from './Events'
import Delivery from './delivery'
import Comment from './Comment'
import Blog from './Blog'
import Footer from '../../components/Footer'

const HomeLink = () => {
    return (
        <StrictMode>
            <Header />
            <Browse />
            <Provide />
            <Events />
            <Delivery />
            <Comment />
            <Blog />
        </StrictMode>
    )
}

export default HomeLink
