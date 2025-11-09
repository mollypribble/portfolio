import React from 'react';
import Title from '../title';
import ProjectOverview from '../projectOverview';
import SubTitle from '../subtitle';
import NextLastNav from '../nextLastNav';

class Filters extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <>
        <div className="project-display"> <div className="project-display-content">
            <Title title="Universal Filtering" />
            <div className='banner'>A cross-platform filtering mechanism</div>
            <ProjectOverview 
            what='Lead UX Designer'
            skills='Interaction Design, UX Design, Mockups' 
            dates='Mar 2024-Oct 2024' 
            affiliation='Ab Initio Software' />

            {/* <ProjectOverview 
            what='Low-code data manipulation for business users'
            skills='UX Design, Interaction Design, Prototyping, User Testing' 
            dates='Jun 2022-Aug 2022' 
            affiliation='Ab Initio Software' /> */}

            <div className='akvd-summary'>
                <div className='akvd-text'><p>Prior to this effort, there were a number of filtering mechanism used across Ab Initio's product suite, each designed independently and for a specific set of requirements. As our company moved to integrate products, we needed a filtering mechanism that could be used across the platform and satisfy the needs of all products. During this project, I lead the cross-team design process of creating this new feature.</p></div>
                <div className='akvd-request-info'>
                    <h2 className='akvd-request-info-title'>
                        REQUEST CASE STUDY
                    </h2>
                    <div className='akvd-request-info-text'>
                        <p>Images & details from this project are protected from public release. To request more information, please email me at <a href='mailto:mollypribble1@mac.com' target="_blank">mollypribble1@mac.com</a>.</p>
                    </div>
                </div>
            </div>

            <div className='htc-takeaways-header'>
                <SubTitle title="PROJECT TAKEAWAYS" />
            </div>
            <div className="htc-takeaways">
                <div className='htc-takeaway text-only'>
                    <h3 className='section-header'>CROSS-TEAM COLLABORATION</h3>
                    <div className='htc-text'><p>This project represented a departure from my usual work process in that it involved developers and managers from multiple product teams. As the project progressed, more stakeholder became interested in leveraging the design in their future products and contributed additional requirements to consider. This was an exercise in managing multiple (sometimes conflicting) sets of requirements and distilling them into a single feature that could be used and re-used by all interested parties. </p></div>
                
                </div>
                <div className='htc-takeaway text-only'>
                    <h3 className='section-header'>COMPREHRENSIVE SPECS</h3>
                    <div className='htc-text'><p>The outcome of the Universal Filtering project was one of the most comprehensive set of specs I have written to date. I learned the importance of keeping specs organized, navigable, and clear to a wide audience with varying perspectives and priorities. </p></div>
                </div>
            </div>

            </div>

            <NextLastNav handleNewProj={this.props.handleNewProj} curr={this.props.currPageNum} last={this.props.last} next={this.props.next} maxProjs={this.props.maxProjs}/>
        </div>
        
        </>
    }
    
}

export default Filters