import React from 'react';
import Title from '../title';
import ProjectOverview from '../projectOverview';
import SubTitle from '../subtitle';

class Htc extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <>
        <div className="project-display">
            <Title title="Hold the Code" />
            <ProjectOverview 
            skills='Project Management, Tech Ethics, Writing, Leadership' 
            dates='Jan 2021-Jun 2022' 
            affiliation='Responsible AI Student Org. (RAISO)' />

            <div className='htc-summary'>
                <div className='htc-text'>While not strictly a UX project, Hold the Code was one of initiatives that I was proudest of and most passionate to be a part of. Hold the Code is the newsletter for the Responsible AI Student Organization (RAISO) at Northwestern University, aimed at educating non-technical readers about the applications, break-throughs, and risks of AI and contemporary technology. As technology becomes more advanced, it is important that everyone is able to understand how it works, what it does, and what the potential impacts are. Hold the Code aims to educate about these topics in an understandable, accessible way without misleading or confusing jargon and buzzwords.</div>
                <div className='htc-summary-image' />
            </div>

            <div className='htc-takeaways-header'>
                <SubTitle title="EXECUTIVE MILESTONES" />
            </div>
            <div className="htc-takeaways">
                <div className='htc-takeaway text-only'>
                    <div className='section-header'>COLLABORATE & CREATE</div>
                    <div className='htc-text'>Much of our success during my tenure as newsletter executive came from the collaborative practices that I introduced to our team's workflow. Curating the newsletter became a collective effort from the entire team, ensuring each writer could choose topics they were truley interested in. Team meetings turned from brief status updates into team-driven whiteboarding sessions, where we would brainstorm new topics to explore and new ways to present these topics to our audience. As team members had more of a say in what they individually worked on and in setting the creative direction for the entire group, our group's dedication and productivity saw a remarkable increase.</div>
                </div>
                <div className='htc-takeaway text-only'>
                <div className='section-header'>GROWING OUR ROOTS</div>
                    <div className='htc-text'>During my time leading Hold the Code as newsletter executive, our team reached a number of milestones, including:<br /> <br />1 - A 150% increase in subscriber count and 120% increase in overall viewership.<br />2 - Expansion into new forms of content, such as opinion pieces and interviews Instagram content.<br />3 - Welcoming 5 new team members to grow our initial team of 3.<br />4 - Continued publication of our newsletter with over 25 new editions.</div>
                </div>
            </div>

            <div className='htc-split'>
                <div className='htc-split-text'>
                    <div className='section-header'>OUT OF THE INBOX</div>
                    <div className='htc-text'>Another initiative at Hold the Code was to expand beyond written content to social media. Since social media is generally more popular among younger audiences, Hold the Code began visually engaging summaries of our newsletter editions for Instagram to increase our reach. The success of this effort lead to our committee absorbing most of RAISO's social media operations, where Hold the Code's social media expert would create stories and posts, advertise about upcoming events, and engage with our audience directly.</div>
                </div>
                <div className='htc-takeaway-image' />
            </div>

        </div>
        </>
    }
    
}

export default Htc