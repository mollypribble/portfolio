import React from 'react';
import ProjectButton from './projectButton';
import Title from './title';
import CustomButton from './button';

class AboutMe extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className="project-list-display">
                <Title title="About Molly"/>

                <a href='mailto:mollypribble1@mac.com' target='_blank' tabIndex="-1">
                    <CustomButton disabled={false} small={false} bounce={false} icon={"email-text.png"} onClick={(e) => this.handleNavWrapper(-1)}/>
                </a>
            
                <a href='https://www.linkedin.com/in/molly-pribble' target='_blank' tabIndex="-1">
                    <CustomButton disabled={false} small={false} bounce={false} icon={"linkedin.png"} onClick={(e) => this.handleNavWrapper(-1)}/>
                </a>

                <div className='project-list'>
                    <div className='top-row'>
                        <ProjectButton projName={"MindYoga"} projNumber={'1'} projDescription={"Molly is a UX designer with experience in human-computer interaction, enterprise software, and design research."} onClick={(e) => this.props.handleNewProj(2)}/>
                        <ProjectButton projName={"Active View Data"} projNumber={'2'} projDescription={"UX Design, Interaction Design, Prototyping, User Testing"} onClick={(e) => this.props.handleNewProj(3)}/>
                    </div>
                    <div className='bottom-row'>
                        <ProjectButton projName={"Recruit Right"} projNumber={'3'} projDescription={"Wireframing, User Personas"} onClick={(e) => this.props.handleNewProj(4)}/>
                        <ProjectButton projName={"Hold the Code"} projNumber={'4'} projDescription={"Project Management, Tech Ethics, Writing, Leadership"} onClick={(e) => this.props.handleNewProj(5)}/>
                    </div>
            </div>
        </div>
    }
    
}

export default AboutMe