import React from 'react'
import { ContainerOrder } from '../../style/orderstyle'
import icon1 from '../../img/menusvg/1.svg'
import icon2 from '../../img/menusvg/2.svg'
import icon3 from '../../img/menusvg/3.svg'
import icon4 from '../../img/menusvg/4.svg'
import icon5 from '../../img/menusvg/5.svg'
import icon6 from '../../img/menusvg/6.svg'
import icon7 from '../../img/menusvg/7.svg'
import icon8 from '../../img/menusvg/8.svg'
import icon9 from '../../img/menusvg/9.svg'

const Order = () => {
    return (
    <ContainerOrder>
        <div className='order'>
            <div className='text_part'>
                <h2>You can order through apps</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
            </div>
            <div className='svg_part'>
                <img src={icon1}/>
                <img src={icon2}/>
                <img src={icon3}/>
                <img src={icon4} className='a'/>
                <img src={icon5} className='s'/>
                <img src={icon6} className='d'/>
                <img src={icon7}/>
                <img src={icon8}/>
                <img src={icon9}/>
            </div>
        </div>
    </ContainerOrder>
    )
}

export default Order