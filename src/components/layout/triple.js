import React from 'react';

class Triple extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        const className = (this.props.className) ? "port-triple " + this.props.className : "port-triple "

        return <div className={className}>
            {this.props.children}
        </div>
    }
    
}

export default Triple