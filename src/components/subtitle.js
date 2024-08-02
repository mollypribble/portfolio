import React from 'react';

class SubTitle extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        const className = (this.props.className) ? "banner-subtitle " + this.props.className : "banner-subtitle "

        return <h2 className={className}>
                {this.props.title}
            </h2>
    }
    
}

export default SubTitle