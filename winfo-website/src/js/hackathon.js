import React from 'react'

import { NavBar } from './navbar'
import { HackathonAbout } from './hackathon-about';
import { HackathonFAQ } from './hackathon-faq';
import { HackathonUpcoming } from './hackathon-upcoming';
import { HackathonPast } from './hackathon-past';


export function Hackathon(props) {
        
    return (
    <div className='hackathon' >
        
        <NavBar handleClickHome={props.handleClickHome} handleClickHackathon={props.handleClickHackathon} handleClickEvents={props.handleClickEvents} handleClickTeam={props.handleClickTeam} handleClickSupport={props.handleClickSupport}/>
        

        <div className='grey-bg center'>
            <p className='black title'>
                WINFO Hackathon
            </p>
        </div>

        <div className='spacer'/>

        <div className='container'>
            <div className='row'>
                <div className='col navbar-col'>
                    <nav className="navbar">
                        <ul className="navbar-list">
                            <li><a href="#hackathon-about">About</a></li>
                            <li><a href="#hackathon-upcoming">Upcoming Events</a></li>
                            <li><a href="#hackathon-past">Past Events</a></li>
                            <li><a href="#hackathon-faq">FAQs</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='col content-col'>
                    <HackathonAbout/>
                    <div className='spacer'/>
                    <HackathonUpcoming/>
                    <div className='spacer'/>
                    <HackathonPast/>
                    <div className='spacer'/>
                    <HackathonFAQ/>

                </div>
            </div>
        </div>



    </div>
 );
}