import React from 'react'
import { ContainerBrowser } from '../../style/styleHome'
import breakfast from '../../img/svg/tea.svg'
import dish from '../../img/svg/dish.svg'
import water from '../../img/svg/water.svg'
import desserts from '../../img/svg/desserts.svg'

const Browse = () => {
    return (
    <ContainerBrowser>
        <div className='browse'>
            <h2>Browse Our Menu</h2>
            <div className='browse_wrapper'>
                <div className='browse_card'>
                    <img src={breakfast} />
                    <div>
                    Breakfast
                    </div>
                    <p>
In the new era of technology we look in the future with certainty and pride for our life.
                    </p>
                    <a>
                    Explore Menu
                    </a>
                </div>
                <div className='browse_card'>
                    <img src={dish} />
                    <div>
                    Main Dishes
                    </div>
                    <p>
In the new era of technology we look in the future with certainty and pride for our life.
                    </p>
                    <a>
                    Explore Menu
                    </a>
                </div>
                <div className='browse_card'>
                    <img src={water} />
                    <div>
                    Drinks
                    </div>
                    <p>
In the new era of technology we look in the future with certainty and pride for our life.
                    </p>
                    <a>
                    Explore Menu
                    </a>
                </div>
                <div className='browse_card'>
                    <img src={desserts} />
                    <div>
                    Desserts
                    </div>
                    <p>
In the new era of technology we look in the future with certainty and pride for our life.
                    </p>
                    <a>
                    Explore Menu
                    </a>
                </div>
            </div>
        </div>
    </ContainerBrowser>
    )
}

export default Browse