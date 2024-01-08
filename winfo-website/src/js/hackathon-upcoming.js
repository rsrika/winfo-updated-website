import React from 'react'

import { NavBar } from './navbar'


export function HackathonUpcoming(props) {
        
    return (
    <div className='hackathon-upcoming' >
          <div className='purple title'>WINFO's 12th Annual Hackathon: Infinite Possibilities, Infinite Solutions</div>
        <div className='container container-left'>
            
            <div className='row'>
                <div className='col'>
                    <p className='description'>
                    Women in Informatics and the iSchool community strongly believe in learning from the past, in order to improve the future. In all contexts it is a strength to be able to cultivate former experiences, grow from them, and take new skills onward. Bringing together our diverse past experiences and backgrounds allows us to better design a future that incorporates all bodies, and strives to be more inclusive. As we look around us, we examine problems from various perspectives to reframe our preconceptions, build better products and services, and innovate to make the world a better place.
                    </p>
                    <br/>
                    <div className='purple title'>Registration is full!</div>
                    <a className="blue-button" href="">Join our Waitlist</a>
                    <div className='spacer'/>
                    <div className='purple title'>Hackathon Day-Of Schedule</div>
                    <a className="blue-button" href="">Hackathon Website</a>
                    
                </div>
                <div className='col'>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    </div>
 );
}