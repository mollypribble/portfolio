import React from 'react';
import { Link } from 'react-router-dom'

class ReactLink extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <Link hidden={this.props.hidden} className={"react-link " + this.props.className} to={this.props.linkTo} onClick={this.props.onClick} aria-labelledby={this.props.ariaLabelledBy} aria-describedby={this.props.ariaDescribedBy} aria-label={this.props.ariaLabel}>
            {this.props.child}
        </Link>
    }
    
}

export default ReactLink