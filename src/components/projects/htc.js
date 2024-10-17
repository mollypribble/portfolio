import React from 'react';
import Title from '../title';
import ProjectOverview from '../projectOverview';
import SubTitle from '../subtitle';
import NextLastNav from '../nextLastNav';
import insta from '../../media/project-media/htc/htc-insta.png';
import substack from '../../media/project-media/htc/htc-home.png';

class Htc extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className="project-display">
            <div className="project-display-content">
            <Title title="Hold the Code" />
            <ProjectOverview 
            what='Responsible tech newletter'
            skills='Communication Design, Project Management, Tech Ethics' 
            dates='Jan 2021-Jun 2022' 
            affiliation='Responsible AI Student Org. (RAISO)' />

            <div className='htc-summary'>
                <div className='htc-text'><p>Hold the Code was a communication design initiative based out of the Responsible AI Student Organization (RAISO) at Northwestern University, aimed at educating non-technical readers about the applications, break-throughs, and risks of AI and contemporary technology. As technology becomes more advanced, it is important that everyone is able to understand how it works, what it does, and what the potential impacts are. Hold the Code is a newsletter that aims to educate about these topics in an understandable, accessible way without misleading or confusing jargon and buzzwords.</p></div>
                <img className='htc-summary-image' src={substack} alt="Hold the Code newsletter page featuring a post titled 'Chatbots: Friend or Foe'."/>
            </div>

            <div className='htc-takeaways-header'>
                <SubTitle title="EXECUTIVE MILESTONES" />
            </div>
            <div className="htc-takeaways">
                <div className='htc-takeaway text-only'>
                    <h3 className='section-header'>COLLABORATE & CREATE</h3>
                    <div className='htc-text'><p>Much of our success during my tenure as newsletter executive came from the collaborative practices that I introduced to our team's workflow. Curating the newsletter became a collective effort from the entire team, ensuring each writer could choose topics they were truley interested in. Team meetings turned from brief status updates into team-driven whiteboarding sessions, where we would brainstorm new topics to explore and new ways to present these topics to our audience. As team members had more of a say in what they individually worked on and in setting the creative direction for the entire group, our group's dedication and productivity saw a remarkable increase.</p></div>
                </div>
                <div className='htc-takeaway text-only'>
                <h3 className='section-header'>GROWING OUR ROOTS</h3>
                    <div className='htc-text'><p>During my time leading Hold the Code as newsletter executive, our team reached a number of milestones, including:</p>
                        <ul>
                            <li>A 150% increase in subscriber count and 120% increase in overall viewership.</li>
                            <li>Expansion into new forms of content, such as opinion pieces and interviews Instagram content.</li>
                            <li>Welcoming five new team members to grow our initial team of three.</li>
                            <li>Continued publication of our newsletter with over 25 new editions.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='htc-split'>
                <div className='htc-split-text'>
                    <h3 className='section-header'>OUT OF THE INBOX</h3>
                    <div className='htc-text'><p>Another initiative at Hold the Code was to expand beyond written content to social media. Since social media is generally more popular among younger audiences, Hold the Code began creating visually engaging summaries of our newsletter editions for Instagram to increase our reach. The success of this effort lead to our committee absorbing most of RAISO's social media operations, where Hold the Code's social media expert would create stories and posts, advertise about upcoming events, and engage with our audience directly.</p></div>
                </div>
                <img className='htc-takeaway-image' src={insta} alt="Image of Hold the Code's instagram page including posts about AI legislation, creative AI, and AI & healthcare."/>
            </div>
            </div>

            <NextLastNav handleNewProj={this.props.handleNewProj} curr={4} last={this.props.last} next={this.props.next}/>

        </div>
    }
    
}

export default Htc