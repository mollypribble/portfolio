import React from 'react';
import LinkButton from './linkButton';
import prev from '../media/prev.png';
import next from '../media/next.png';
import ReactLink from './reactLink';

class NextLastNav extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {
        const label= "You are currently on Project " + this.props.curr

        let nextLink="active-view-data"
        let prevLink="hold-the-code"
        if (this.props.curr == 2){
            nextLink="recruit-right"
            prevLink="mindyoga"
        }
        else if (this.props.curr == 3){
            nextLink="hold-the-code"
            prevLink="active-view-data"
        }
        else if (this.props.curr == 4){
            nextLink="mindyoga"
            prevLink="recruit-right"
        }

        return <footer className='banner proj-next-last-banner'>
        <nav className='proj-next-last-controls' aria-label={'Project navigation '+label}>
            <ReactLink linkTo={"/portfolio/projects/"+prevLink} child={<LinkButton className="big left-icon" label='Prev' alt={`Previous project, Project ${this.props.last-1}`} onClick={(e) => this.props.handleNewProj(this.props.last)} icon={prev}/>} />
            <ReactLink linkTo={"/portfolio/projects/"+prevLink} child={<LinkButton className="small left-icon" label='' alt={`Previous project, Project ${this.props.last-1}`} onClick={(e) => this.props.handleNewProj(this.props.last)} icon={prev}/>} />
            <p aria-label={'Project '+this.props.curr+' out of 4'}>Project {this.props.curr}/4</p>
            <ReactLink linkTo={"/portfolio/projects/"+nextLink} child={<LinkButton className="big right-icon" label='Next' alt={`Next project, Project ${this.props.next-1}`} onClick={(e) => this.props.handleNewProj(this.props.next)} icon={next}/>} />
            <ReactLink linkTo={"/portfolio/projects/"+nextLink} child={<LinkButton className="small right-icon" label='' alt={`Next project, Project ${this.props.next-1}`} onClick={(e) => this.props.handleNewProj(this.props.next)} icon={next}/>} />
        </nav>
    </footer>
    }
    
}

export default NextLastNav