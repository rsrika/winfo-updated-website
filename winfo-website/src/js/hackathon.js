import React from 'react'

import { NavBar } from './navbar'


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

        



    </div>
 );
}