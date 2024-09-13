import React from 'react';
import { Link } from 'react-router-dom'

class ReactLink extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <Link aria-hidden={true} className="react-link" to={this.props.linkTo}>
            {this.props.child}
        </Link>
    }
    
}

export default ReactLink