import React from 'react';

class LinkButton extends React.Component {

    constructor(props) {
        super(props);
      }

      clickAndBlur (e) {
        this.props.onClick();
        e.currentTarget.blur();
    }

    render () {
        const classy = "link-button " + this.props.className;

        return <button role="link" className={classy} aria-label={this.props.alt} onClick={(e) => this.clickAndBlur(e)}>
            <img className='next-prev-icon' src={this.props.icon} aria-hidden />
            <p>{this.props.label}</p>
        </button>
    }
    
}

export default LinkButton