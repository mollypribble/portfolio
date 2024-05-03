import React from 'react';
import Title from '../title';
import ProjectOverview from '../projectOverview';
import SubTitle from '../subtitle';

class RecruitRight extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <>
        <div className="project-display">
            <Title title="Recruit Right" />
            <ProjectOverview 
            skills='Wireframing, User Personas, Branding/Logo Design' 
            dates='Jun 2022-Jul 2023' 
            affiliation='Freelance' />

            <div className='rr-summary'>
                <div className='rr-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                <div className='rr-summary-image'>
                    {/* image here */}
                </div>
            </div>

            <div className='rr-takeaways-header'>
                <SubTitle title="USER GROUPS" />
            </div>
            <div className="rr-takeaways">
                <div className="rr-takeaway-image-wrapper">
                    <div className='rr-takeaway'>
                        <div className='section-header'>COACHES</div>
                        <div className='rr-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                    </div>
                    <div className='rr-takeaway-image'>
                    </div>
                </div>
                <div className="rr-takeaway-image-wrapper">
                    <div className='rr-takeaway'>
                        <div className='section-header'>PLAYERS</div>
                        <div className='rr-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                    </div>
                    <div className='rr-takeaway-image'>
                    </div>
                </div>
                <div className="rr-takeaway-image-wrapper">
                    <div className='rr-takeaway'>
                        <div className='section-header'>TEAM MANAGERS</div>
                        <div className='rr-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                    </div>
                    <div className='rr-takeaway-image'>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
    
}

export default RecruitRight