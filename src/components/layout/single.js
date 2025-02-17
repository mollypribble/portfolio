import React from 'react';

class Single extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        const className = (this.props.className) ? "port-single " + this.props.className : "port-single "

        return <div className={className}>
            {this.props.children}
        </div>
    }
    
}

export default Single