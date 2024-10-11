import React from 'react';
import ButtonBase from './buttonBase';

class CustomButton extends React.Component {

    constructor(props) {
        super(props);
      }

    clickAndBlur (e) {
        this.props.onClick();
        e.currentTarget.blur();
    }

    render () {
        return <button className={this.props.className} onClick={(e) => this.clickAndBlur(e)} aria-label={this.props.ariaLabel} hidden={this.props.disabled} >
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