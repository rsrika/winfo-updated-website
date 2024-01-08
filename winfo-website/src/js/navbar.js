import React from 'react'

export function NavBar(props) {

    let navImg = () => {
        
        return (<img id="nav-img" src="/img/general/roshni-pink.png" alt="winfo logo" onClick={() => { props.handleClickHome()}}></img>);
    }

    
    return (
        <div className="nav">
            <nav id="examples">
                <div className="nav-sig">
                    <div className="signature">
                        {navImg()}
                    </div>
                </div>
                <div className="links">
                    <ul className='example'>
                        <li>
                            <button className="fs-5 navlink home hover1 hover1-1"
                                onClick={
                                    () => {
                                        props.handleClickHome()
                                    }
                            }>Home</button>
                        </li>
                        <li>
                            <button className="fs-5 navlink hackathon hover2 hover2-1"
                                onClick={
                                    () => {
                                        props.handleClickHackathon()
                                    }
                            }>Hackathon</button>
                        </li>
                        <li>
                            <button className="fs-5 navlink events hover3 hover3-1"
                                onClick={
                                    () => {
                                        props.handleClickEvents()
                                    }
                            }>Events</button>
                        </li>
                        <li>
                            <button className="fs-5 navlink team hover4 hover4-1"
                                onClick={
                                    () => {
                                        props.handleClickTeam()
                                    }
                            }>Team</button>
                        </li>
                        <li>
                            <button className="fs-5 navlink border-blue support hover5 hover5-1"
                                onClick={
                                    () => {
                                        props.handleClickSupport()
                                    }
                            }>Support Us</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


