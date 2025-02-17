import React from 'react';

class Section extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className="port-section">
                {this.props.children}
        </div>
    }
    
}

export default Section