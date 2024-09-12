import React from 'react';
import LinkButton from './linkButton';
import prev from '../media/prev.png';
import next from '../media/next.png';

class NextLastNav extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {
        const label= "You are currently on Project " + this.props.curr

        return <footer className='banner proj-next-last-banner'>
        <nav className='proj-next-last-controls' aria-label={'Project navigation '+label}>
            <LinkButton className="big left-icon" label='Prev' alt={`Previous project, Project ${this.props.last-1}`} onClick={(e) => this.props.handleNewProj(this.props.last)} icon={prev}/>
            <LinkButton className="small left-icon" label='' alt={`Previous project, Project ${this.props.last-1}`} onClick={(e) => this.props.handleNewProj(this.props.last)} icon={prev}/>
            <p aria-label={'Project '+this.props.curr+' out of 4'}>Project {this.props.curr}/4</p>
            <LinkButton className="big right-icon" label='Next' alt={`Next project, Project ${this.props.next-1}`} onClick={(e) => this.props.handleNewProj(this.props.next)} icon={next}/> 
            <LinkButton className="small right-icon" label='' alt={`Next project, Project ${this.props.next-1}`} onClick={(e) => this.props.handleNewProj(this.props.last)} icon={next}/>
        </nav>
    </footer>
    }
    
}

export default NextLastNav