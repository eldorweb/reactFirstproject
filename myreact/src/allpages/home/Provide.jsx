import React from 'react'
import {ContainerProvide } from '../../style/styleHome'
import provideImg from '../../img/jpg/provideBg.png'
import tel from '../../img/svg/phone.svg'
import location from '../../img/svg/location-marker.svg'
import email from '../../img/svg/mail.svg'

const Provide = () => {
    return (
    <ContainerProvide>
    <div className='provide'>
        <div className='provide_imgwrapper'>
            <img src={provideImg} />
            <div className='visitcard_container'>
            <div className='provide_visitcard'>
                <h3>
                Come and visit us
                </h3>
                <div className='visit_tel'>
                    <img src={tel} />
                    <p>(414) 857 - 0107</p>
                </div>
                <div className='visit_email'>
                    <img src={email} />
                    <p>happytummy@restaurant.com</p>
                </div>
                <div className='visit_location'>
                    <img src={location} />
                    <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                </div>
            </div>
            </div>
        </div>

        <div className='provide_right'>
            <h2>We provide healthy food for your family.</h2>
            <p className='provide_right_text1'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
            <p className='provide_right_text2'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
            <button>More About Us</button>
        </div>
    </div>
    </ContainerProvide>
    )
}

export default Provide