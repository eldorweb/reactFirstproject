import React from 'react'
import { ContainerComment } from '../../style/styleHome'
import robson from '../../img/svg/robson.svg'
import cannon from '../../img/svg/cannon.svg'
import smith from '../../img/svg/smith.svg'


const Comment = () => {
    return (
    <ContainerComment>
        <div className='comment'>
            <h2>What Our Customers Say</h2>
            <div className='comment_wrapper'>
                <div className='comment_card'>
                    <h3>
                    “The best restaurant”
                    </h3>
                    <p className='comment_p'>
Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.
                    </p>
                    <div className='comment_card_people'>
                        <img src={robson} />
                        <div>
                            <p>
                            Sophire Robson
                            </p>
                            <text>
                            Los Angeles, CA
                            </text>
                        </div>
                    </div>
                </div>
                <div className='comment_card'>
                    <h3>
                    “Simply delicious”
                    </h3>
                    <p className='comment_p'>
                    Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.
                    </p>
                    <div className='comment_card_people'>
                        <img src={cannon} />
                        <div>
                            <p>
                            Matt Cannon
                            </p>
                            <text>
                            San Diego, CA
                            </text>
                        </div>
                    </div>
                </div>
                <div className='comment_card'>
                    <h3>
                    “One of a kind restaurant”
                    </h3>
                    <p className='comment_p'>
                    The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.
                    </p>
                    <div className='comment_card_people'>
                        <img src={smith} />
                        <div>
                            <p>
                            Andy Smith
                            </p>
                            <text>
                            San Francisco, CA
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContainerComment>
    )
}

export default Comment