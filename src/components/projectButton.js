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
        return <button role="link" className={"proj-button " + "button-" + this.props.projNumber} alt={this.props.alt} onClick={(e) => this.clickAndBlur(e)} aria-label={"Project " + this.props.projNumber + " " + this.props.projName}>
            <div className='proj-label'>{this.props.projNumber}: {this.props.projName}</div>
            <div className='proj-desc-arrow-wrapper'>
                <div className='proj-desc'><p>{this.props.projDescription}</p></div>
                <div className='proj-arrow' aria-hidden="true">&rarr;</div>
            </div>
        </button>
    }
    
}

export default ProjectButton