import React, { useEffect, useState } from 'react'
import { ContainerMenu, LinkChange } from '../../style/styleHome'
import { MenuMocbar } from '../../mocdata/menuMoc'
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
          <div className='button' onClick={() => handleSelect('All')}>All</div>
          <div className='button' onClick={() => handleSelect('Breakfast')}>Breakfast</div>
          <div className='button' onClick={() => handleSelect('MainDishes')}>Main Dishes</div>
          <div className='button' onClick={() => handleSelect('Drinks')}>Drinks</div>
          <div className='button' onClick={() => handleSelect('Desserts')}>Desserts</div>
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