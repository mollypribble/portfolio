import React from 'react';

class SectionTitle extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        const className = (this.props.className) ? "port-section-title " + this.props.className : "port-section-title "

        return <h2 className={className}>
                {this.props.title}
            </h2>
    }
    
}

export default SectionTitle