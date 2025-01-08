import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeComponent from './inscDecrement';
import About from '../allpages/about/header';
import Menu from '../allpages/menu/header';

const RouterComponent = () => {
  return (
    <BrowserRouter >
        <Routes>
            <Route path='/' element = {<HomeComponent />}/>
            <Route path='/about' element ={<About />}/>
            <Route path='/menu' element = {<Menu />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent