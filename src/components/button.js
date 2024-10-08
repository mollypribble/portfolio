import React from 'react';
import ButtonBase from './buttonBase';

class CustomButton extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {
        return <button className={this.props.className}>
            <ButtonBase 
            disabled={this.props.disabled} 
            className={this.props.childClassName} 
            small={this.props.small} 
            bounce={this.props.bounce} 
            icon={this.props.icon} 
            active={this.props.active} 
            onClick={this.props.onClick} 
            ariaLabel={this.props.toggleLabel} />
        </button>
    }
    
}

export default CustomButton