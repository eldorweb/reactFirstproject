import React, { useState } from 'react'
import { ContainerMenu, MenuLinks } from '../../style/styleHome'
import AllData from './components/all'
import BreakfastData from './components/breakfast'
import MainDishesData from './components/mainDishes'
import DrinksData from './components/drinks'
import DessertsData from './components/desserts'

const Menuheader = () => {
  const [select, setSelect] = useState("All")

const handleSelect = (category)=>{
  setSelect(category);
}
  return (
    <ContainerMenu>
      <div className='menu'>
        <h1>Our Menu</h1>
        <p className='p'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        <div className='div_wrapper'>
          <MenuLinks to={''}><div className='button' onClick={() => handleSelect('All')}>All</div></MenuLinks>
          <MenuLinks to={''}><div className='button' onClick={() => handleSelect('Breakfast')}>Breakfast</div></MenuLinks>
          <MenuLinks to={''}><div className='button' onClick={() => handleSelect('MainDishes')}>Main Dishes</div></MenuLinks>
          <MenuLinks to={''}><div className='button' onClick={() => handleSelect('Drinks')}>Drinks</div></MenuLinks>
          <MenuLinks to={''}><div className='button' onClick={() => handleSelect('Desserts')}>Desserts</div></MenuLinks>
        </div>
        {select === "All" && <AllData />}
        {select === "Breakfast" && <BreakfastData />}
        {select === "MainDishes" && <MainDishesData />}
        {select === "Drinks" && <DrinksData />}
        {select === "Desserts" && <DessertsData />}
      </div>
    </ContainerMenu>
  )
}

export default Menuheader