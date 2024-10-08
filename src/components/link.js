import React from 'react';
import ButtonBase from './buttonBase';

class ButtonLink extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {
        return <a href={this.props.href} target={this.props.target} className='small-button button-link-class'>
            <ButtonBase 
            disabled={this.props.disabled} 
            className={this.props.className} 
            small={this.props.small} 
            bounce={this.props.bounce} 
            icon={this.props.icon} 
            active={this.props.active} 
            onClick={this.props.onClick} 
            ariaLabel={this.props.toggleLabel} />
        </a>
    }
    
}

export default ButtonLink