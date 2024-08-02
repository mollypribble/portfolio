import React from 'react';
import LinkButton from './linkButton';

class NextLastNav extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className='banner proj-next-last-banner'>
        <div className='proj-next-last-controls'>
            <LinkButton className="big" label='&larr; Prev' alt='Previous Project' onClick={(e) => this.props.handleNewProj(this.props.last)}/>
            <LinkButton className="small" label='&larr;' alt='Previous Project' onClick={(e) => this.props.handleNewProj(this.props.last)}/>
            <LinkButton className="no-underline" label={`Project ${this.props.curr}/4`} alt={`Current Project ${this.props.curr} of 4`} onClick={(e) => this.props.handleNewProj(1)}/> 
            <LinkButton className="big" label='Next &rarr;' alt='Next Project' onClick={(e) => this.props.handleNewProj(this.props.next)}/> 
            <LinkButton className="small" label='&rarr;' alt='Previous Project' onClick={(e) => this.props.handleNewProj(this.props.last)}/>
        </div>
    </div>
    }
    
}

export default NextLastNav