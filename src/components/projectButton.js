import React from 'react'

class ProjectButton extends React.Component {

    constructor(props) {
        super(props);
      }

      clickAndBlur (e) {
        this.props.onClick();
        e.currentTarget.blur();
    }

    render () {
        return <button className={"proj-button " + "button-" + this.props.projNumber} alt={this.props.alt} onClick={(e) => this.clickAndBlur(e)}>
            <div className='proj-label'>{this.props.projNumber}: {this.props.projName}</div>
            <div className='proj-image'></div>
            <div className='proj-desc-arrow-wrapper'>
                <div className='proj-desc'>{this.props.projDescription}</div>
                <div className='proj-arrow'>&rarr;</div>
            </div>
        </button>
    }
    
}

export default ProjectButton