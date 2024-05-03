import React from 'react';

class SubTitle extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        const className = (this.props.className) ? "banner-subtitle " + this.props.className : "banner-subtitle "

        return <div className={className}>
                {this.props.title}
            </div>
    }
    
}

export default SubTitle