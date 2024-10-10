import React from 'react';
import ButtonBase from './buttonBase';
import ProjectButton from './projectButton';
import ReactLink from './reactLink';
import NextLastLink from './nextLastLink';

class ReactButtonLink extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {
        const mychild=this.props.proj ? 
        <ProjectButton 
        projName={this.props.projName} 
        projNumber={this.props.projNumber} 
        projDescription={this.props.projDescription} 
        onClick={this.props.onClick} />
        : (this.props.nextLast ?
            <NextLastLink 
            className={this.props.childClassName} 
            label={this.props.label} 
            alt={this.props.alt} 
            onClick={this.props.onClick} 
            icon={this.props.icon}/>
            :
            <ButtonBase 
            disabled={this.props.disabled} 
            className={this.props.childClassName} 
            small={this.props.small} 
            bounce={this.props.bounce} 
            icon={this.props.icon} 
            active={this.props.active} 
            onClick={this.props.onClick} 
            ariaLabel={this.props.toggleLabel} />)

        const ariaLabelledby= this.props.proj ? 'proj-label' : ''
        const ariaDescribedBy= this.props.proj ? 'proj-desc' : ''

        return <ReactLink linkTo={this.props.linkTo} child={mychild} hidden={this.props.disabled}  className={this.props.className} onClick={this.props.onClick} ariaLabelledBy={ariaLabelledby} ariaDescribedBy={ariaDescribedBy}/>
    }
    
}

export default ReactButtonLink