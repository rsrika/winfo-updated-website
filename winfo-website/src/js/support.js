import React from 'react'

import { NavBar } from './navbar'


export function Support(props) {
    window.scrollTo(0, 0);
    
    return (
    <div className='support' >
        <NavBar handleClickHome={props.handleClickHome} handleClickHackathon={props.handleClickHackathon} handleClickEvents={props.handleClickEvents} handleClickTeam={props.handleClickTeam} handleClickSupport={props.handleClickSupport}/>
        <div className='grey-bg center big-heading'>
            <p className='black title middle'>
               Why Sponsor Us?
            </p>
        </div> 
        <div className='spacer'/>
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

    </div>
 );
}