import React from 'react'
import { ContainerEvents } from '../../style/styleHome'
import kebab from '../../img/jpg/kebabTable.png'
import birthday from '../../img/jpg/birthday.png'
import wedding from '../../img/jpg/wedding.png'
import events from '../../img/jpg/events.png'


const Events = () => {
    return (
    <ContainerEvents>
        <div className='events'>
            <h2>
            We also offer unique services for your events
            </h2>
            <div className='events_wrapper'>

                <div className='events_card'>
                    <img src={kebab} />
                    <div>
                    Caterings
                    </div>
                    <p>
                    In the new era of technology we look in the future with certainty for life.
                    </p>
                </div>

                <div className='events_card'>
                    <img src={birthday} />
                    <div>
                    Birthdays
                    </div>
                    <p>
                    In the new era of technology we look in the future with certainty for life.
                    </p>
                </div>

                <div className='events_card'>
                    <img src={wedding} />
                    <div>
                    Weddings
                    </div>
                    <p>
                    In the new era of technology we look in the future with certainty for life.
                    </p>
                </div>
                
                <div className='events_card'>
                    <img src={events} />
                    <div>
                    Events
                    </div>
                    <p>
                    In the new era of technology we look in the future with certainty for life.
                    </p>
                </div>

            </div>
        </div>
    </ContainerEvents>
    )
}

export default Events