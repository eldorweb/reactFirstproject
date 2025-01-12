import React from 'react'
import { ContainerFooter } from '../style/styleHome'
import footerlogo from '../img/svg/footerLogo.svg'
import icon1 from '../img/svg/1.svg'
import icon2 from '../img/svg/2.svg'
import icon3 from '../img/svg/3.svg'
import icon4 from '../img/svg/4.svg'
import footer1 from '../img/jpg/footer1.png'
import footer2 from '../img/jpg/footer2.png'
import footer3 from '../img/jpg/footer3.png'
import footer4 from '../img/jpg/footer4.png'

const Footer = () => {
    return (
    <ContainerFooter>
        <div className='footer'>
        <div className='footer1'>
            <div className='cart1'>
                <div className='logo'>
                    <img src={footerlogo} />
                    <h2>Bistro Bliss</h2>
                </div>
                <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                <div className='icon'>
                    <img src={icon1}/>
                    <img src={icon2}/>
                    <img src={icon3}/>
                    <img src={icon4}/>
                </div>
            </div>
            <div className='cart2'>
                <div>Pages</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Delivery</li>
                </ul>
            </div>
            <div className='cart3'>
                <div>Utility Pages</div>
                <ul>
                    <li>Start Hero</li>
                    <li>Styleguide</li>
                    <li>Password Protected</li>
                    <li>404 Not Found</li>
                    <li>Licenses</li>
                    <li>Changelog</li>
                    <li>View More</li>
                </ul>
            </div>
            <div className='cart4'>
                <p>Follow Us On Instagram</p>
                <div>
                <img src={footer1}/>
                <img src={footer2}/>
                <img src={footer3}/>
                <img src={footer4}/>
                </div>
            </div>
            </div>
            <p className='p'>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
        </div>
    </ContainerFooter>
    )
}

export default Footer