import React from 'react';

class ProjectOverview extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className="project-overview">
            <div className='project-overview-detail'>{this.props.skills}</div>
            <div className='project-overview-detail'>{this.props.dates}</div>
            <div className='project-overview-detail'>{this.props.affiliation}</div>
            </div>
    }
    
}

export default ProjectOverview