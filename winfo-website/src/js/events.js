import React from 'react'

import { NavBar } from './navbar'


export function Events(props) {
    window.scrollTo(0, 0);
    
    return (
    <div className='events' >
        <NavBar handleClickHome={props.handleClickHome} handleClickHackathon={props.handleClickHackathon} handleClickEvents={props.handleClickEvents} handleClickTeam={props.handleClickTeam} handleClickSupport={props.handleClickSupport}/>
        <div className='grey-bg center big-heading'>
            <p className='black title middle'>
                Past Events
            </p>
        </div> 
        <div id="events" className='container'>
            {/* row 1  */}
            <div className="row event-row">
                <div className='col'>
                    <div className="event-card">
                        <div className="event-image">
                            <img src="" alt =""/>
                        </div>
                        <div className="event-info">
                            <p className='purple event-title'>WINFO Hackathon</p>
                            <p>Women in Informatics (WINFO) is a diversity organization in the Information 
                            School at the University of Washington, Seattle. Our organization is dedicated to empowering women 
                            to thrive as producers of technology.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="event-card">
                        <div className="event-image">
                            <img src="" alt =""/>
                        </div>
                        <div className="event-info">
                            <p className='purple event-title'>WINFO Hackathon</p>
                            <p>Women in Informatics (WINFO) is a diversity organization in the Information 
                            School at the University of Washington, Seattle. Our organization is dedicated to empowering women 
                            to thrive as producers of technology.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            {/* row 2 */}
            <div className="row event-row">
                <div className='col'>
                    <div className="event-card">
                        <div className="event-image">
                            <img src="" alt =""/>
                        </div>
                        <div className="event-info">
                            <p className='purple event-title'>WINFO Hackathon</p>
                            <p>Women in Informatics (WINFO) is a diversity organization in the Information 
                            School at the University of Washington, Seattle. Our organization is dedicated to empowering women 
                            to thrive as producers of technology.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="event-card">
                        <div className="event-image">
                            <img src="" alt =""/>
                        </div>
                        <div className="event-info">
                            <p className='purple event-title'>WINFO Hackathon</p>
                            <p>Women in Informatics (WINFO) is a diversity organization in the Information 
                            School at the University of Washington, Seattle. Our organization is dedicated to empowering women 
                            to thrive as producers of technology.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            {/* row 3  */}
            <div className="row event-row">
                <div className='col'>
                    <div className="event-card">
                        <div className="event-image">
                            <img src="" alt =""/>
                        </div>
                        <div className="event-info">
                            <p className='purple event-title'>WINFO Hackathon</p>
                            <p>Women in Informatics (WINFO) is a diversity organization in the Information 
                            School at the University of Washington, Seattle. Our organization is dedicated to empowering women 
                            to thrive as producers of technology.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="event-card">
                        <div className="event-image">
                            <img src="" alt =""/>
                        </div>
                        <div className="event-info">
                            <p className='purple event-title'>WINFO Hackathon</p>
                            <p>Women in Informatics (WINFO) is a diversity organization in the Information 
                            School at the University of Washington, Seattle. Our organization is dedicated to empowering women 
                            to thrive as producers of technology.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            {/* row 4 */}
            <div className="row event-row">
                <div className='col'>
                    <div className="event-card">
                        <div className="event-image">
                            <img src="" alt =""/>
                        </div>
                        <div className="event-info">
                            <p className='purple event-title'>WINFO Hackathon</p>
                            <p>Women in Informatics (WINFO) is a diversity organization in the Information 
                            School at the University of Washington, Seattle. Our organization is dedicated to empowering women 
                            to thrive as producers of technology.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="event-card">
                        <div className="event-image">
                            <img src="" alt =""/>
                        </div>
                        <div className="event-info">
                            <p className='purple event-title'>WINFO Hackathon</p>
                            <p>Women in Informatics (WINFO) is a diversity organization in the Information 
                            School at the University of Washington, Seattle. Our organization is dedicated to empowering women 
                            to thrive as producers of technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 );
}