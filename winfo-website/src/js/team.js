import React, { useState } from 'react';

import { NavBar } from './navbar'


export function Team(props) {
    const [activeYear, setActiveYear] = useState(null);

    const toggleAccordion = (year) => {
        setActiveYear(activeYear === year ? null : year);
      };

    window.scrollTo(0, 0);
    
    const years = ["2022-2023","2021-2022","2020-2021","2019-2020", "2018-2019", "2017-2018", "2016-2017"]

    const teamMembers = [
        { year: "2022-2023", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2022-2023", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2022-2023", name: 'Officer Name Here', position: 'Director of Finance', imageUrl: '...' },
        { year: "2022-2023", name: 'Officer Name Here', position: 'Director of Outreach', imageUrl: '...' },
        { year: "2022-2023", name: 'Officer Name Here', position: 'Creative Director', imageUrl: '...' },
        { year: "2022-2023", name: 'Officer Name Here', position: 'Director of Public Relations', imageUrl: '...' },
        { year: "2022-2023", name: 'Officer Name Here', position: 'Director of Diversity Efforts', imageUrl: '...' },
        { year: "2022-2023", name: 'Officer Name Here', position: 'Director of Community Efforts', imageUrl: '...' },
        { year: "2022-2023", name: 'Officer Name Here', position: 'Hackathon Director', imageUrl: '...' },

        { year: "2021-2022", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2021-2022", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2021-2022", name: 'Officer Name Here', position: 'Director of Finance', imageUrl: '...' },
        { year: "2021-2022", name: 'Officer Name Here', position: 'Director of Outreach', imageUrl: '...' },
        { year: "2021-2022", name: 'Officer Name Here', position: 'Creative Director', imageUrl: '...' },
        { year: "2021-2022", name: 'Officer Name Here', position: 'Director of Public Relations', imageUrl: '...' },
        { year: "2021-2022", name: 'Officer Name Here', position: 'Director of Diversity Efforts', imageUrl: '...' },
        { year: "2021-2022", name: 'Officer Name Here', position: 'Director of Community Efforts', imageUrl: '...' },
        { year: "2021-2022", name: 'Officer Name Here', position: 'Hackathon Director', imageUrl: '...' },
    
        { year: "2020-2021", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2020-2021", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2020-2021", name: 'Officer Name Here', position: 'Director of Finance', imageUrl: '...' },
        { year: "2020-2021", name: 'Officer Name Here', position: 'Director of Outreach', imageUrl: '...' },
        { year: "2020-2021", name: 'Officer Name Here', position: 'Creative Director', imageUrl: '...' },
        { year: "2020-2021", name: 'Officer Name Here', position: 'Director of Public Relations', imageUrl: '...' },
        { year: "2020-2021", name: 'Officer Name Here', position: 'Director of Diversity Efforts', imageUrl: '...' },
        { year: "2020-2021", name: 'Officer Name Here', position: 'Director of Community Efforts', imageUrl: '...' },
        { year: "2020-2021", name: 'Officer Name Here', position: 'Hackathon Director', imageUrl: '...' },

        { year: "2019-2020", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2019-2020", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2019-2020", name: 'Officer Name Here', position: 'Director of Finance', imageUrl: '...' },
        { year: "2019-2020", name: 'Officer Name Here', position: 'Director of Outreach', imageUrl: '...' },
        { year: "2019-2020", name: 'Officer Name Here', position: 'Creative Director', imageUrl: '...' },
        { year: "2019-2020", name: 'Officer Name Here', position: 'Director of Public Relations', imageUrl: '...' },
        { year: "2019-2020", name: 'Officer Name Here', position: 'Director of Diversity Efforts', imageUrl: '...' },
        { year: "2019-2020", name: 'Officer Name Here', position: 'Director of Community Efforts', imageUrl: '...' },
        { year: "2019-2020", name: 'Officer Name Here', position: 'Hackathon Director', imageUrl: '...' },

        { year: "2018-2019", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2018-2019", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2018-2019", name: 'Officer Name Here', position: 'Director of Finance', imageUrl: '...' },
        { year: "2018-2019", name: 'Officer Name Here', position: 'Director of Outreach', imageUrl: '...' },
        { year: "2018-2019", name: 'Officer Name Here', position: 'Creative Director', imageUrl: '...' },
        { year: "2018-2019", name: 'Officer Name Here', position: 'Director of Public Relations', imageUrl: '...' },
        { year: "2018-2019", name: 'Officer Name Here', position: 'Director of Diversity Efforts', imageUrl: '...' },
        { year: "2018-2019", name: 'Officer Name Here', position: 'Director of Community Efforts', imageUrl: '...' },
        { year: "2018-2019", name: 'Officer Name Here', position: 'Hackathon Director', imageUrl: '...' },

        { year: "2017-2018", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2017-2018", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2017-2018", name: 'Officer Name Here', position: 'Director of Finance', imageUrl: '...' },
        { year: "2017-2018", name: 'Officer Name Here', position: 'Director of Outreach', imageUrl: '...' },
        { year: "2017-2018", name: 'Officer Name Here', position: 'Creative Director', imageUrl: '...' },
        { year: "2017-2018", name: 'Officer Name Here', position: 'Director of Public Relations', imageUrl: '...' },
        { year: "2017-2018", name: 'Officer Name Here', position: 'Director of Diversity Efforts', imageUrl: '...' },
        { year: "2017-2018", name: 'Officer Name Here', position: 'Director of Community Efforts', imageUrl: '...' },
        { year: "2017-2018", name: 'Officer Name Here', position: 'Hackathon Director', imageUrl: '...' },

        { year: "2016-2017", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2016-2017", name: 'Officer Name Here', position: 'Co-President', imageUrl: '...' },
        { year: "2016-2017", name: 'Officer Name Here', position: 'Director of Finance', imageUrl: '...' },
        { year: "2016-2017", name: 'Officer Name Here', position: 'Director of Outreach', imageUrl: '...' },
        { year: "2016-2017", name: 'Officer Name Here', position: 'Creative Director', imageUrl: '...' },
        { year: "2016-2017", name: 'Officer Name Here', position: 'Director of Public Relations', imageUrl: '...' },
        { year: "2016-2017", name: 'Officer Name Here', position: 'Director of Diversity Efforts', imageUrl: '...' },
        { year: "2016-2017", name: 'Officer Name Here', position: 'Director of Community Efforts', imageUrl: '...' },
        { year: "2016-2017", name: 'Officer Name Here', position: 'Hackathon Director', imageUrl: '...' },


        // Add team member data for each year
    ];

   const renderAccordion = () => {
    return years.map((year) => (
      <div key={year} className="accordion">
        <button className="accordion-btn" onClick={() => {console.log("making ", {year}," active"); toggleAccordion(year)}}>
          {year} Officer Team
        </button>
        {activeYear === year && (
            <div className="accordion-content">
                {teamMembers
                .filter((member) => member.year === year)
                .map((member, index) => (
                    <div key={index} className="accordion-item">
                    <img src={member.imageUrl} alt={`Team member ${index + 1}`} />
                    <h3 className='purple question'>{member.name}</h3>
                    <p>{member.position}</p>
                    </div>
                ))}
            </div>
        )}
      </div>
    ));
  };

    return (
    <div className='team' >
        <NavBar handleClickHome={props.handleClickHome} handleClickHackathon={props.handleClickHackathon} handleClickEvents={props.handleClickEvents} handleClickTeam={props.handleClickTeam} handleClickSupport={props.handleClickSupport}/>
        <div id="team-banner" className="banner center">
          <h1>Our Officer Team</h1>
        </div>
        
        <div className="accordion-container container">
            {
                renderAccordion()
            }
        </div>

    </div>
 );
}