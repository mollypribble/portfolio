import React from 'react';
import CustomButton from './button';

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className="project-list-display">
                project list
                <CustomButton disabled={false} small={false} bounce={false} icon={"p1.png"} active={false} onClick={(e) => this.props.handleNewProj(2)}/>
                <CustomButton disabled={false} small={false} bounce={false} icon={"p2.png"} active={false} onClick={(e) => this.props.handleNewProj(3)}/>
                <CustomButton disabled={false} small={false} bounce={false} icon={"p3.png"} active={false} onClick={(e) => this.props.handleNewProj(4)}/>
                <CustomButton disabled={false} small={false} bounce={false} icon={"p4.png"} active={false} onClick={(e) => this.props.handleNewProj(5)}/>
        </div>
    }
    
}

export default ProjectList