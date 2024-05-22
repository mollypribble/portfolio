import React from 'react';
import LinkButton from './linkButton';

class NextLastNav extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className='banner proj-next-last-banner'>
        <div className='proj-next-last-controls'>
            <LinkButton label='&larr; Prev' alt='Previous Project' onClick={(e) => this.props.handleNewProj(this.props.last)}/>
            <LinkButton label='Next &rarr;' alt='Next Project' onClick={(e) => this.props.handleNewProj(this.props.next)}/> 
        </div>
    </div>
    }
    
}

export default NextLastNav