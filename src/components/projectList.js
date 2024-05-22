import React from 'react';
import ProjectButton from './projectButton';
import Title from './title';

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className="project-list-display">
                <Title title="Projects"/>
                <div className='project-list'>
                    <ProjectButton projName={"MindYoga"} projNumber={'1'} projDescription={"Design Research, Human-Computer Interaction, Rapid Prototyping"} onClick={(e) => this.props.handleNewProj(2)}/>
                    <ProjectButton projName={"Active View Data"} projNumber={'2'} projDescription={"UX Design, Interaction Design, Prototyping, User Testing"} onClick={(e) => this.props.handleNewProj(3)}/>
                    <ProjectButton projName={"Recruit Right"} projNumber={'3'} projDescription={"Wireframing, User Personas, Branding/Logo Design"} onClick={(e) => this.props.handleNewProj(4)}/>
                    <ProjectButton projName={"Hold the Code"} projNumber={'4'} projDescription={"Project Management, Tech Ethics, Writing, Leadership"} onClick={(e) => this.props.handleNewProj(5)}/>
                </div>
        </div>
    }
    
}

export default ProjectList