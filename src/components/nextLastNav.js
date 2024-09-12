import React from 'react';
import LinkButton from './linkButton';
import prev from '../media/prev.png';
import next from '../media/next.png';

class NextLastNav extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className='banner proj-next-last-banner'>
        <nav className='proj-next-last-controls'>
            <LinkButton className="big left-icon" label='Prev' alt={`Go to Project ${this.props.last-1}`} onClick={(e) => this.props.handleNewProj(this.props.last)} icon={prev}/>
            <LinkButton className="small left-icon" label='' alt={`Go to Project ${this.props.last-1}`} onClick={(e) => this.props.handleNewProj(this.props.last)} icon={prev}/>
            <p>Project {this.props.curr}/4</p>
            <LinkButton className="big right-icon" label='Next' alt={`Go to Project ${this.props.next-1}`} onClick={(e) => this.props.handleNewProj(this.props.next)} icon={next}/> 
            <LinkButton className="small right-icon" label='' alt={`Go to Project ${this.props.next-1}`} onClick={(e) => this.props.handleNewProj(this.props.last)} icon={next}/>
        </nav>
    </div>
    }
    
}

export default NextLastNav