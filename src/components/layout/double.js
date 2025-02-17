import React from 'react';

class Double extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        const className = (this.props.className) ? "port-double " + this.props.className : "port-double "
        const rev = (this.props.reverse) ? " reverse " : ""
        const small = (this.props.small == "left") ? " left-small " : (this.props.small == "right") ? " right-small " : ""

        return <div className={className+small+rev}>
            {this.props.children}
        </div>
    }
    
}

export default Double