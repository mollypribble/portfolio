import React from 'react';
// import ProjectButton from './projectButton';
import Title from './title';
import { withRouter } from 'react-router-dom';
import ReactButtonLink from './reactButtonLink';

// To add new project:
// (1) add project page button here
// (2) add to pageIndexArray on portfolioContent.js
// (3) add route to App.js and to projsArrayURLs
// (4) Check all buttons work... (projectList.js, portfolioNav.js, nextLastNav.js)

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        console.log(this.props.projURLs)
        return <div className="project-list-display">
                <Title title="Projects"/>
                <div className='project-list'>
                    <ReactButtonLink className={"proj-button-wrapper"} proj={true} linkTo={"/portfolio/projects/"+this.props.projURLs[0]} projName={"MindYoga"} projNumber={'1'} projDescription={"Design/HCI Research, Rapid Prototyping"} projRole={"Co-lead Researcher"} onClick={(e) => this.props.handleNewProj(3)} />
                    <ReactButtonLink className={"proj-button-wrapper"} proj={true} linkTo={"/portfolio/projects/"+this.props.projURLs[1]} projName={"Active View Data"} projNumber={'2'} projDescription={"UX Design, Interaction Design, Prototyping, User Testing"} projRole={"Lead UX Designer"} onClick={(e) => this.props.handleNewProj(4)} />
                    {/* <ReactButtonLink className={"proj-button-wrapper"} proj={true} linkTo="/portfolio/projects/universal-filtering" projName={"Universal Filtering"} projNumber={'3'} projDescription={"Interaction Design, UX Design, Mockups"} projRole={"Lead UX Designer"} onClick={(e) => this.props.handleNewProj(4)} /> */}
                    {/* <ReactButtonLink className={"proj-button-wrapper"} proj={true} linkTo="/portfolio/projects/recruit-right" projName={"Recruit Right"} projNumber={'3'} projDescription={"Wireframing, User Personas"} projRole={"Designer & Creator"} onClick={(e) => this.props.handleNewProj(4)} /> */}
                    <ReactButtonLink className={"proj-button-wrapper"} proj={true} linkTo={"/portfolio/projects/"+this.props.projURLs[2]} projName={"Accessibility Basics"} projNumber={'3'} projDescription={"Accessibility"} projRole={"Designer & Creator"} onClick={(e) => this.props.handleNewProj(5)} />
                    <ReactButtonLink className={"proj-button-wrapper"} proj={true} linkTo={"/portfolio/projects/"+this.props.projURLs[3]} projName={"Hold the Code"} projNumber={'4'} projDescription={"Communication Design, Project Management, Tech Ethics"} projRole={"Project Manager"} onClick={(e) => this.props.handleNewProj(6)} />
            </div>
        </div>
    }
    
}

export default withRouter(ProjectList)