import React from 'react'
import tel from '../img/svg/phone.svg'
import email from '../img/svg/mail.svg'
import facebook from '../img/svg/facebook.svg'
import twitter from '../img/svg/twitter.svg'
import inst from '../img/svg/inst.svg'
import github from '../img/svg/github.svg'
import { ContainerNavtop } from '../style/styleHome'


const NavTop = () => {
    return (
        <ContainerNavtop>
    <div className='nav_top'>
        <div className='nav_top_left'>
            <div className='nav_top_left1'>
                <img src={tel} />
                <p>(414) 857 - 0107</p>
            </div>
            <div className='nav_top_left1'>
                <img src={email}/>
                <p>yummy@bistrobliss</p>
            </div>
        </div>

        <div className='nav_top_right'>
            <img src={twitter} />
            <img src={facebook} />
            <img src={inst} />
            <img src={github} />
        </div>
    </div>
        </ContainerNavtop>
    )
}

export default NavTop