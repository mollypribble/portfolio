import React from 'react';
import Title from '../title';
import ProjectOverview from '../projectOverview';
import SubTitle from '../subtitle';
import NextLastNav from '../nextLastNav';

class Akvd extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <>
        <div className="project-display">
            <Title title="Active View Data" />
            <div className='banner'>Patent Pending_</div>
            <ProjectOverview 
            skills='UX Design, Interaction Design, Prototyping, User Testing' 
            dates='Jun 2022-Aug 2022' 
            affiliation='Ab Initio Software' />

            <div className='akvd-summary'>
                <div className='akvd-text'>Active View Data is a project aimed at creating a tool that enables non-technical business users to easily leverage highly-performant graphical data processing software in their work. Many powerful data processing software suites make use of a graph-based paradigm, where users use a canvas to create diagrams of data flows that read, write, combine, and transform data. These programs can be extremely powerful and efficient at processing large batches of data, but may not be a familiar environment to business users who are more familiar with spreadsheet tools that allow them to see and manipulate the data directly. Active View Data tries to bridge this gap by providing a low-code, data-centric environment that interfaces between the business users and the graph-based processing software.</div>
                <div className='akvd-request-info'>
                    <div className='akvd-request-info-title'>
                        REQUEST CASE STUDY
                    </div>
                    <div className='akvd-request-info-text'>
                        Images & details from this project are protected from public release. To request more information, please email me at <a href='mailto:mollypribble1@mac.com' target="_blank" tabIndex="1">mollypribble1@mac.com</a>.
                    </div>
                </div>
            </div>

            <div className='akvd-takeaways-header'>
                <SubTitle title="PROJECT TAKEAWAYS" />
            </div>
            <div className="akvd-takeaways">
                <div className='akvd-takeaway'>
                    <div className='section-header'>DO ONE THING WELL</div>
                    <div className='akvd-text'>Early in this project, I felt like I had to design ever aspect of this product, no matter how important the requirement. My initial mockups looked extremely busy, accommodating every feature that project stakeholders had expressed any amount of interest in. I was approaching my designs requirements as a to-do list instead of thinking critically about the importance of each feature, the best affordance and interaction to access a feature, and how each feature relates to the original product vision. My later prototypes focused on fleshing out the core, required features for Active View Data in detail as opposed to trying to incorporate poorly thought-out designs.</div>
                </div>
                <div className='akvd-takeaway'>
                    <div className='section-header'>COLLABORATING WITH DEVS</div>
                    <div className='akvd-text'>Active View Data was the first project where I worked with a separate development team to implement my designs. Prior to Active View Data, most of the projects I worked on were designed and implemented by the same team of people. This gave me experience with writing thorough specs, communicating my ideas clearly, and investigating technical constraints that needed to be considered in the final design. </div>
                </div>
                <div className='akvd-takeaway'>
                    <div className='section-header'>COMMUNICATION & PRESENTATION</div>
                    <div className='akvd-text'>Lastly, Active View Data gave me ample opportunities to practice my presentation and communication skills. Throughout my internship, I regularly scheduled and lead status updates and feedback sessions with the rest of the UX group. My mentors and co-workers often wanted to see demos or walkthroughs of Active View Data throughout the project, and I became practiced in explaining the concept of Active View Data and taking my audience through a typical user flow. My internship ended with a company-wide presentation and demo of Active View Data, where we generated a lot of interest and excitement about this new product.</div>
                </div>
            </div>

            <NextLastNav handleNewProj={this.props.handleNewProj} curr={2} last={this.props.last} next={this.props.next}/>
        </div>

        {/* Mobile */}

        {/* <div className='project-display-mobile'></div> */}
        </>
    }
    
}

export default Akvd