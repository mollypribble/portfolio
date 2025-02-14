import React from 'react';
import ProjectButton from './projectButton';
import Title from './title';
import { withRouter } from 'react-router-dom';
import ReactButtonLink from './reactButtonLink';

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className="project-list-display">
                <Title title="Projects"/>
                <div className='project-list'>
                    <ReactButtonLink className={"proj-button-wrapper"} proj={true} linkTo="/portfolio/projects/mindyoga" projName={"MindYoga"} projNumber={'1'} projDescription={"Design/HCI Research, Rapid Prototyping"} onClick={(e) => this.props.handleNewProj(2)} />
                    <ReactButtonLink className={"proj-button-wrapper no-right"} proj={true} linkTo="/portfolio/projects/active-view-data" projName={"Active View Data"} projNumber={'2'} projDescription={"UX Design, Interaction Design, Prototyping, User Testing"} onClick={(e) => this.props.handleNewProj(3)} />
                    <ReactButtonLink className={"proj-button-wrapper"} proj={true} linkTo="/portfolio/projects/recruit-right" projName={"Recruit Right"} projNumber={'3'} projDescription={"Wireframing, User Personas"} onClick={(e) => this.props.handleNewProj(4)} />
                    <ReactButtonLink className={"proj-button-wrapper no-right"} proj={true} linkTo="/portfolio/projects/hold-the-code" projName={"Hold the Code"} projNumber={'4'} projDescription={"Communication Design, Project Management, Tech Ethics"} onClick={(e) => this.props.handleNewProj(5)} />
            </div>
        </div>
    }
    
}

export default withRouter(ProjectList)