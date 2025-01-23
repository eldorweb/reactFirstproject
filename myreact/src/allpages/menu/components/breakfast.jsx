import React from 'react'
import { All } from './style'
import { MenuMocbar } from '../../../mocdata/menuMoc'
import { LinkChange } from '../../../style/styleHome'

const BreakfastData = () => {
  const Break = MenuMocbar.filter(value => value.type === 'breakfast')
  return (
    <All>
      <div className='grid'>
            {
            Break.map((value) => {
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

export default BreakfastData