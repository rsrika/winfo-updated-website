import React from 'react'

export function HackathonAbout(props) {
        
    return (
    <div className='hackathon-about' >
        
        <div className='container container-left'>
            <div className='row'>
                <p className='purple title'>COLLABORATE. NETWORK. SOLVE.</p>
                <br/><br/>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='description'>
                    The WINFO Hackathon is a collegiate hackathon. Every year, we bring together students with diverse skill sets to develop solutions that address a wide array of issues. Here in the iSchool community, we believe in designing and developing technology-based solutions that positively impact the world. We challenge you to venture into a new problem space and develop thoughtful solutions that empower those around us to promote equity.
                    <br/><br/>
                    WINFO invites UW students from all backgrounds and identities to celebrate equity and inclusion in the technology field through our hackathon.
                    <br/><br/>
                    Our hackathon is a great experience for college students, especially women, entering the tech field to network, get hands-on experience coding or designing, and work in teams to problem solve. 
                    <br/><br/>
                    Whether you're an experienced hacker or just looking to explore, come join WINFO this year for a valuable experience.
                    </p>
                </div>
                <div className='col'>
                    <img src="./img/rectangle_15" alt=""/>
                </div>
            </div>
        </div>
    </div>
 );
}