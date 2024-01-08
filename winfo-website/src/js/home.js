import React from 'react'

import { NavBar } from './navbar'


export function Home(props) {
    window.scrollTo(0, 0);
    
    return (
    <div className='home' >
        
        <NavBar handleClickHome={props.handleClickHome} handleClickHackathon={props.handleClickHackathon} handleClickEvents={props.handleClickEvents} handleClickTeam={props.handleClickTeam} handleClickSupport={props.handleClickSupport}/>
        
        <div className="banner-image"/>
        <div className='spacer'/>

        <div className='about-us center px-5'>
            <div className='px-5'>
                <p className='purple section-title'>
                    About Us
                </p>
                <p className='text-description px-5'>
                Women in Informatics (WINFO) is a diversity organization at the Information School at the University of Washington, Seattle. Our organization is dedicated to empowering women to thrive as producers of technology. We establish and maintain a network of women who offer encouragement, support, and ongoing knowledge. As an organization open to all interested students, we aim to attract and inspire everyone to explore opportunities in information technology, to connect them with others of passion in the realm of technology, and to utilize their unique perspectives to lead technological innovation.
                </p>
            </div>
        </div>

        <div className='spacer'/>
        <div className='divider'/>
        <div className='spacer'/>

        <div className='row informatics'>
            <div className='col'>
                <img className='image' src="" alt=""/>
            </div>
            <div className='col description purple-bg'>
                <div className='p-5'>
                    <p className='black section-title'>
                        What is Informatics?
                    </p>
                    <p className='text-description px-5'>
                    The term “informatics” broadly describes the study and practice of creating, storing, finding, manipulating, and sharing information. When the iSchool chose "informatics" as the name of its bachelor of science degree in 1999, the term was not widely used in the U.S. The name was chosen because it spoke to the opportunities that are available to students with the strong technical background needed to develop solutions to the world’s information challenges. ischool.uw.edu
                    <br/><br/><br/>
                    <a className='white-button' href="https://ischool.uw.edu/">Visit the iSchool Website</a>
                    </p>
                    
                </div>
            </div>
        </div>

        <div className='spacer'/>

        <div className='row informatics'>
            <div className='col description'>
                <div className='p-5'>
                    <p className='purple section-title'>
                        Our Mission
                    </p>
                    <p className='text-description px-5'>
                    Our mission is to empower women to thrive as producers of technology by establishing and maintaining a network of women who offer encouragement, support, and the ongoing knowledge needed to succeed. We inspire each other to challenge ourselves, achieve our goals, and work together. By providing students with resources and support towards career development and academic pursuits, WINFO hopes to have a positive impact on the lives of all students at the iSchool and beyond.
                    </p>
                </div>
            </div>
            <div className='col'>
                <img className='image' src="" alt=""/>
            </div>
        </div>

        <div className='spacer'/>

        <div className='our-history grey-bg center'>
            <div className='p-5'>
                <p className='purple section-title'>
                    Our History
                </p>
                <p className='text-description px-5'>
                Women in Informatics (WINFO) was founded in 2012 by a group of women in the University of Washington Informatics program. Their goal was to attract and inspire female students in the tech industry to. Through events such as company visits, social meetings, hackathons and more, we continue to carry out this mission in our operations. They wanted to increase female applicants to the Informatics program. In 2012, the Informatics program admitted only 140 students, 28% of which were female. Now, the Informatics program accepts 210 students per year, 40% of which are female. iSchool.uw.edu
                </p>
            </div>
        </div>



    </div>
 );
}