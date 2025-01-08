import React from 'react'
import tel from '../allpages/img/svg/phone.svg'
import email from '../allpages/img/svg/mail.svg'
import facebook from '../allpages/img/svg/facebook.svg'
import twitter from '../allpages/img/svg/twitter.svg'
import inst from '../allpages/img/svg/inst.svg'
import github from '../allpages/img/svg/github.svg'


const NavTop = () => {
    return (
    <div className='container nav_top'>
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
    )
}

export default NavTop