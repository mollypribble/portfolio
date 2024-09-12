import React from 'react';
import LinkButton from './linkButton';

class NextLastNav extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className='banner proj-next-last-banner'>
        <nav className='proj-next-last-controls'>
            <LinkButton className="big" label='&larr; Prev' alt={`Go to Project ${this.props.last-1}`} onClick={(e) => this.props.handleNewProj(this.props.last)}/>
            <LinkButton className="small" label='&larr;' alt={`Go to Project ${this.props.last-1}`} onClick={(e) => this.props.handleNewProj(this.props.last)}/>
            <p>Project {this.props.curr}/4</p>
            <LinkButton className="big" label='Next &rarr;' alt={`Go to Project ${this.props.next-1}`} onClick={(e) => this.props.handleNewProj(this.props.next)}/> 
            <LinkButton className="small" label='&rarr;' alt={`Go to Project ${this.props.next-1}`} onClick={(e) => this.props.handleNewProj(this.props.last)}/>
        </nav>
    </div>
    }
    
}

export default NextLastNav