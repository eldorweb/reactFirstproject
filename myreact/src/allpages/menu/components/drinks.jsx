import React from 'react'
import { MenuMocbar } from '../../../mocdata/menuMoc'
import { LinkChange } from '../../../style/styleHome'
import { All } from './style'

const DrinksData = () => {
  const Drinks = MenuMocbar.filter(value => value.type === 'drinks')
  return (
    <All>
      <div className='grid'>
            {
            Drinks.map((value) => {
                return <LinkChange className='grid_card' key={value.id} to={`./detail/${value.id}`}>
                <img src={value.menu.photo} alt='none' />
                <h3>{value.menu.cost || "none"}</h3>
                <div>{value.menu.type || "none"}</div>
                <p>{value.menu.word || "none"}</p>
                </LinkChange>
            })
            }
        </div>
    </All>
  )
}

export default DrinksData