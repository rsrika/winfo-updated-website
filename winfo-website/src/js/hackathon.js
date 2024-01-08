import React from 'react'
import { HashLink } from 'react-router-hash-link';

import { NavBar } from './navbar'
import { HackathonAbout } from './hackathon-about';
import { HackathonFAQ } from './hackathon-faq';
import { HackathonUpcoming } from './hackathon-upcoming';
import { HackathonPast } from './hackathon-past';


export function Hackathon(props) {
        
    return (
    <div className='hackathon' >
        
        <NavBar handleClickHome={props.handleClickHome} handleClickHackathon={props.handleClickHackathon} handleClickEvents={props.handleClickEvents} handleClickTeam={props.handleClickTeam} handleClickSupport={props.handleClickSupport}/>
        

        <div className='grey-bg center big-heading'>
            <p className='black title middle'>
                WINFO Hackathon
            </p>
        </div>

        <div className='spacer'/>

        <div  className='container'>
            <div className='row'>
                <div className='col col-3 navbar-col'>
                    <nav className="navbar">
                        <div className="navbar-list">
                            <p><HashLink className='navbar-list' smooth to='/hackathon/#hackathon-about' > About </HashLink></p>
                            <p><HashLink className='navbar-list' smooth to='/hackathon/#hackathon-upcoming' > Current Hackathon </HashLink></p>
                            <p><HashLink className='navbar-list' smooth to='/hackathon/#hackathon-past' > Past Events </HashLink></p>
                            <p><HashLink className='navbar-list' smooth to='/hackathon/#hackathon-faq' > FAQ </HashLink></p>
                        </div>
                    </nav>
                </div>
                <div className='col col-9 content-col'>
                    <div id="hackathon-about">
                        <HackathonAbout/>
                    </div>
            
                    <div className='spacer'/>
                    <div id="hackathon-upcoming">
                        <HackathonUpcoming/>
                    </div>
                    <div className='spacer'/>
                    <div id="hackathon-past">
                        <HackathonPast/>
                    </div>
                    <div className='spacer'/>
                    <div id="hackathon-faq">
                        <HackathonFAQ/>
                    </div>

                </div>
            </div>
        </div>



    </div>
 );
}