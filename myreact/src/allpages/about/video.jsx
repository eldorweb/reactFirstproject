import React from 'react'
import AboutVideoStyle from '../../style/aboutStyle'
import play from '../../img/about/aboutPlay.svg'
import ease from '../../img/about/restaurant-ease.svg'
import menu from '../../img/about/restaurant-menu.svg'
import timer from '../../img/about/restaurant-timer.svg'
import bgVideo from '../../img/about/about_video.mp4'

const AboutVideo = () => {
  return (
    <AboutVideoStyle>
      <div className='video'>
        <div className='bg_video'>
          <video src={bgVideo} autoPlay='true' muted='true' loop='true'/>
          <div className='play_div'>
          <img className='play' src={play}/>
          <h2>Feel the authentic & original taste from us</h2>
          </div>
        </div>
        <div className='video_bottom'>

          <div className='card'>
            <img src={menu} />
            <div className='card-wrapper'>
              <h4>Multi Cuisine</h4>
              <p>In the new era of technology we look in the future with certainty life.</p>
            </div>
          </div>

          <div className='card'>
            <img src={ease} />
            <div className='card-wrapper'>
              <h4>Easy To Order</h4>
              <p>In the new era of technology we look in the future with certainty life.</p>
            </div>
          </div>

          <div className='card'>
            <img src={timer} />
            <div className='card-wrapper'>
              <h4>Fast Delivery</h4>
              <p>In the new era of technology we look in the future with certainty life.</p>
            </div>
          </div>

        </div>
      </div>
    </AboutVideoStyle>

  )
}

export default AboutVideo