import React from 'react'
import { ContainerDelivery } from '../../style/styleHome'
import delivery1 from '../../img/jpg/delivery1.png'
import delivery2 from '../../img/jpg/delivery2.png'
import delivery3 from '../../img/jpg/delivery3.png'
import clock from '../../img/svg/clock.svg'
import receipt from '../../img/svg/receipt-tax.svg'
import cart from '../../img/svg/shopping-cart.svg'

const Delivery = () => {
    return (
    <ContainerDelivery>
        <div className='delivery'>
            <div className='delivery_imgwrapper'>
                <img src={delivery1}/>
                <div className='delivery_imgcart'>
                <img src={delivery2}/>
                <img src={delivery3}/>
                </div>
            </div>
            <div className='delivery_textwrapper'>
                <h2>Fastest Food Delivery in City</h2>
                <p className='delivery_p'>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
                <div className='delivery_iconcard'>
                    <img src={clock}/>
                    <p>Delivery within 30 minutes</p>
                </div>
                <div className='delivery_iconcard'>
                    <img src={receipt}/>
                    <p>Best Offer & Prices</p>
                </div>
                <div className='delivery_iconcard'>
                    <img src={cart}/>
                    <p>Online Services Available</p>
                </div>
            </div>
        </div>
    </ContainerDelivery>
    )
}

export default Delivery