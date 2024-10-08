import React from 'react';

class NextLastLink extends React.Component {

    constructor(props) {
        super(props);
      }

      clickAndBlur (e) {
        this.props.onClick();
        e.currentTarget.blur();
    }

    render () {
        const classy = "link-button " + this.props.className;

        return <div className={classy} onClick={(e) => this.clickAndBlur(e)}>
            <img className='next-prev-icon' src={this.props.icon} aria-hidden />
            <p aria-label={this.props.alt}>{this.props.label}</p>
        </div>
    }
    
}

export default NextLastLink