import React from 'react'
import { ContainerMenu, LinkChange } from '../../style/styleHome'
import { MenuMocbar } from '../../mocdata/menuMoc'

const Menuheader = () => {
  return (
    <ContainerMenu>
      <div className='menu'>
        <h1>Our Menu</h1>
        <p className='p'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        <div className='div_wrapper'>
          <button>All</button>
          <button>Breakfast</button>
          <button>Main Dishes</button>
          <button>Drinks</button>
          <button>Desserts</button>
        </div>
        <div className='grid'>
          {
            MenuMocbar.map((value) => {
              return <LinkChange className='grid_card' key={value.id} to={`./detail/${value.id}`}>
              <img src={value.menu.photo} alt='none' />
              <h3>{value.menu.cost}</h3>
              <div>{value.menu.type}</div>
              <p>{value.menu.word}</p>
              </LinkChange>
            })
          }
        </div>
      </div>
    </ContainerMenu>
  )
}

export default Menuheader