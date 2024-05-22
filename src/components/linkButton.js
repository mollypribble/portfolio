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

        return <button className={classy} alt={this.props.alt} onClick={(e) => this.clickAndBlur(e)}>
            {this.props.label}
        </button>
    }
    
}

export default LinkButton