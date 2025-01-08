import React from 'react'
import { ContainerHeader } from '../../style/styleHome'


const Header = () => {
  return (
    <ContainerHeader>
    <div className='header'>
      <h1>Best food for your taste</h1>
      <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
      <div className='header_btndiv'>
        <button>Book A Table</button>
        <button>Explore Menu</button>
      </div>
    </div>
    </ContainerHeader>
  )
}

export default Header