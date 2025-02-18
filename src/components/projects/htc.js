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
            <div className='banner'>A technical newsletter for nontechnical people_</div>
            <ProjectOverview 
            what='Project Manager'
            skills='Communication Design, Project Management, Tech Ethics' 
            dates='Jan 2021-Jun 2022' 
            affiliation='Responsible AI Student Org. (RAISO)' />

            {/* <ProjectOverview 
            what='Responsible tech newletter'
            skills='Communication Design, Project Management, Tech Ethics' 
            dates='Jan 2021-Jun 2022' 
            affiliation='Responsible AI Student Org. (RAISO)' /> */}

            <div className='htc-summary'>
                <div className='htc-text'><p><a href="https://raiso.substack.com/" target="_blank">Hold the Code</a> was a communication and education initiative based out of the Responsible AI Student Organization (RAISO) at Northwestern University. As technology becomes more advanced, it is important that everyone is able to understand how it works, what it does, and what the potential impacts are. Hold the Code is a newsletter that aims to educate about these topics to a non-technical audience in an understandable, accessible way without misleading or confusing jargon and buzzwords.</p></div>
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
                    <div className='htc-text'><p>Under my leadership, Hold the Code reached a number of milestones, including:</p>
                        <ul>
                            <li>A <b>150% increase</b> in subscriber count</li>
                            <li>A <b>120% increase</b> in overall viewership</li>
                            {/* <li>Expansion into <b>long-form and social media content</b></li> */}
                            <li>Welcoming <b>five new contributors</b> to grow our team of three</li>
                            <li>Publication of <b>over 25 newsletter editions</b></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='htc-split'>
                <div className='htc-split-text'>
                    <h3 className='section-header'>OUT OF THE INBOX</h3>
                    <div className='htc-text'><p>Another initiative that began under my leadership at Hold the Code was to expand beyond written content to social media. Since social media is generally more popular among younger audiences, Hold the Code began creating visually engaging summaries of our newsletter editions for Instagram to increase our reach. The success of this effort lead to our committee absorbing most of RAISO's social media operations, where Hold the Code's social media expert would create stories and posts, advertise about upcoming events, and engage with our audience directly.</p></div>
                </div>
                <img className='htc-takeaway-image' src={insta} alt="Image of Hold the Code's instagram page including posts about AI legislation, creative AI, and AI & healthcare."/>
            </div>
            </div>

            <NextLastNav handleNewProj={this.props.handleNewProj} curr={5} last={this.props.last} next={this.props.next}/>

        </div>
    }
    
}

export default Htc