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
        <div className="project-display"> <div className="project-display-content">
            <Title title="Active View Data" />
            <div className='banner'>A business-friendly interface for data processing &#xB7; Patent Pending_</div>
            <ProjectOverview 
            what='Solo UX Designer'
            skills='UX Design, Interaction Design, Prototyping, User Testing' 
            dates='Jun 2022-Aug 2022' 
            affiliation='Ab Initio Software' />

            {/* <ProjectOverview 
            what='Low-code data manipulation for business users'
            skills='UX Design, Interaction Design, Prototyping, User Testing' 
            dates='Jun 2022-Aug 2022' 
            affiliation='Ab Initio Software' /> */}

            <div className='akvd-summary'>
                <div className='akvd-text'><p>Active View Data is a project aimed at creating a tool that enables non-technical business users to easily leverage highly-performant graphical data processing software in their work. Many powerful data processing software suites make use of a graph-based paradigm, where users use a canvas to create diagrams of data flows that read, write, combine, and transform data. These programs can be extremely powerful and efficient at processing large batches of data, but may not be a familiar environment to business users who are more familiar with tools like Excel, PowerBI, or Tableau. Active View Data tries to bridge this gap by providing business-friendly interface between users and powerful, graph-based processing software.</p></div>
                <div className='akvd-request-info'>
                    <h2 className='akvd-request-info-title'>
                        REQUEST CASE STUDY
                    </h2>
                    <div className='akvd-request-info-text'>
                        <p>Images & details from this project are protected from public release. To request more information, please email me at <a href='mailto:mollypribble1@mac.com' target="_blank">mollypribble1@mac.com</a>.</p>
                    </div>
                </div>
            </div>

            <div className='akvd-takeaways-header'>
                <SubTitle title="PROJECT TAKEAWAYS" />
            </div>
            <div className="akvd-takeaways">
                <div className='akvd-takeaway'>
                    <h3 className='section-header'>DO ONE THING WELL</h3>
                    <div className='akvd-text'><p>Early in this project, I felt like I had to design ever aspect of this product, no matter how important the requirement. My initial mockups looked extremely busy, accommodating every feature that project stakeholders had expressed any amount of interest in. I was approaching my designs requirements as a to-do list instead of thinking critically about the importance of each feature, the best affordance and interaction to access a feature, and how each feature relates to the original product vision. My later prototypes focused on fleshing out the core, required features for Active View Data in detail as opposed to trying to incorporate poorly thought-out designs.</p></div>
                </div>
                <div className='akvd-takeaway'>
                    <h3 className='section-header'>COLLABORATING WITH DEVS</h3>
                    <div className='akvd-text'><p>Active View Data was the first project where I worked with a separate development team to implement my designs. Prior to Active View Data, most of the projects I worked on were designed and implemented by the same team of people. This gave me experience with writing thorough specs, communicating my ideas clearly, and investigating technical constraints that needed to be considered in the final design.</p></div>
                </div>
                <div className='akvd-takeaway'>
                    <h3 className='section-header'>COMMUNICATION & PRESENTATION</h3>
                    <div className='akvd-text'><p>Lastly, Active View Data gave me ample opportunities to practice my presentation and communication skills. Throughout my internship, I regularly scheduled and lead status updates and feedback sessions with the rest of the UX group. My mentors and co-workers often wanted to see demos or walkthroughs of Active View Data throughout the project, and I became practiced in explaining the concept of Active View Data and taking my audience through a typical user flow. My internship ended with a company-wide presentation and demo of Active View Data, where we generated a lot of interest and excitement about this new product.</p></div>
                </div>
            </div>
            </div>

            <NextLastNav handleNewProj={this.props.handleNewProj} curr={2} last={this.props.last} next={this.props.next}/>
        </div>
        
        </>
    }
    
}

export default Akvd