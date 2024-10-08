import React from 'react';
import { Link } from 'react-router-dom'

class ReactLink extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <Link className={"react-link " + this.props.className} to={this.props.linkTo} onClick={this.props.onClick}>
            {this.props.child}
        </Link>
    }
    
}

export default ReactLink