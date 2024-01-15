import React from 'react'

import { NavBar } from './navbar'


export function Support(props) {
  window.scrollTo(0, 0);
    
  return (
  <div id='support'>
      <NavBar handleClickHome={props.handleClickHome} handleClickHackathon={props.handleClickHackathon} handleClickEvents={props.handleClickEvents} handleClickTeam={props.handleClickTeam} handleClickSupport={props.handleClickSupport}/>
      
      <div id="sponsor-banner" className="banner center">
        <h1>Why Sponsor Us?</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col'>

          </div>
          <div className='col'>
            <img src="..." alt=""/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <img src="..." alt=""/>
          </div>
          <div className='col'>
              
          </div>
        </div>
      </div>
      
      <div className='sponsorship-tiers'/>
      
      <div className=' center big-heading'>
        <p className='pink title middle'>
          Other Kinds of Hackathon Sponsorship
        </p>
      </div> 
      <div className='container'>
        <div className='row'>
          <div className='col col-7'>
            <p>We understand that it is not always possible to provide monetary support, so we have listed some alternative items below that are essential to the success of the hackathon.
            <br/>
            1. Sending Mentors - Mentors play an extremely important role in guiding students to build successful products. This is also an excellent opportunity for your company to build relationships with young computer scientists, designers, and project managers. Students always appreciate the guidance and expertise you provide.
            <br/>
            2. Food (Meals, snacks and drinks) - Food is a very important part of our Hackathon! We want to make sure our participants are well fed to help fuel their creativity. You can help by powering the hackathon with meals and refreshments. (College students love pizza).
            <br/>
            3. Small items to give away (aka. Swag) - Swag is always a great perk to attending a Hackathon. This can be in the form of t-shirts, stickers, mugs, pens, notebooks, etc. If you have enough swag to give to a good portion of our participants (approximately 100 students), it would be a great item to bring! This is another way to ensure that participants have exposure to your brand.
            <br/>
            4. Prizes - Prizes will be used either for random giveaways or for our ranking winners. It would be great for participants to see an awesome prize for ranking in the hackathon!</p>
          </div>
          <div className='col col-5'>
            <img src=".." alt=""/>
          </div>
        </div>
      </div>
      <div className='center big-heading'>
        <p className='pink title middle'>
          Past Sponsors
        </p>
      </div> 
      <div className='past-sponsors'/>

  </div>
 );
}