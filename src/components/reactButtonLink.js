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
        // const mychild2=this.props.proj ? 
        // <ProjectButton 
        // projName={this.props.projName} 
        // projNumber={this.props.projNumber} 
        // projDescription={this.props.projDescription} 
        // onClick={this.props.onClick} />
        // : (this.props.nextLast ?
        //     <NextLastLink 
        //     className={this.props.childClassName} 
        //     label={this.props.label} 
        //     alt={this.props.alt} 
        //     onClick={this.props.onClick} 
        //     icon={this.props.icon}/>
        //     :
        //     <ButtonBase 
        //     disabled={this.props.disabled} 
        //     className={this.props.childClassName} 
        //     small={this.props.small} 
        //     bounce={this.props.bounce} 
        //     icon={this.props.icon} 
        //     active={this.props.active} 
        //     onClick={this.props.onClick} 
        //     ariaLabel={this.props.toggleLabel} />)

        let ariaLabelledby = null
        let ariaDescribedBy = null
        let ariaLabel = null

        let mychild = <ProjectButton 
        projName={this.props.projName} 
        projNumber={this.props.projNumber} 
        projDescription={this.props.projDescription} 
        onClick={this.props.onClick} />

        if (this.props.proj) {
            ariaLabelledby= 'proj-label'+`${this.props.projNumber}`
            ariaDescribedBy= 'proj-desc'+`${this.props.projNumber}`
        }
        else if (this.props.nextLast) {
            ariaLabel=this.props.alt
            mychild=<NextLastLink 
            className={this.props.childClassName} 
            label={this.props.label} 
            onClick={this.props.onClick} 
            icon={this.props.icon}/>
        }
        else {
            ariaLabel=this.props.ariaLabel
            mychild=<ButtonBase 
            disabled={this.props.disabled} 
            className={this.props.childClassName} 
            small={this.props.small} 
            bounce={this.props.bounce} 
            icon={this.props.icon} 
            active={this.props.active} 
            onClick={this.props.onClick} 
            ariaLabel={this.props.toggleLabel} />
        }

        return <ReactLink linkTo={this.props.linkTo} child={mychild} hidden={this.props.disabled}  className={this.props.className} onClick={this.props.onClick} ariaLabel={ariaLabel} ariaLabelledBy={ariaLabelledby} ariaDescribedBy={ariaDescribedBy}/>
    }
    
}

export default ReactButtonLink