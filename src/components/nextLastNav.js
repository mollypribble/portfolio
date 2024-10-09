import React from 'react';
import prev from '../media/prev.png';
import next from '../media/next.png';
import ReactButtonLink from './reactButtonLink';

class NextLastNav extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {
        // const label= "You are currently on Project " + this.props.curr

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
        <nav className='proj-next-last-controls' aria-label={'Project'}>
            <p className='visually-hidden-text'>Project {this.props.curr} out of 4</p>
            <ReactButtonLink className="big-wrapper" nextLast={true} linkTo={"/portfolio/projects/"+prevLink} childClassName="big left-icon" label='Prev' alt={`Previous project, Project ${this.props.last-1}`} onClick={(e) => this.props.handleNewProj(this.props.last)} icon={prev} />
            <ReactButtonLink className="small-wrapper" nextLast={true} linkTo={"/portfolio/projects/"+prevLink} childClassName="small left-icon" label='Prev' alt={`Previous project, Project ${this.props.last-1}`} onClick={(e) => this.props.handleNewProj(this.props.last)} icon={prev} />
            <p aria-hidden={true}>Project {this.props.curr}/4</p>
            <ReactButtonLink className="big-wrapper" nextLast={true} linkTo={"/portfolio/projects/"+nextLink} childClassName="big right-icon" label='Next' alt={`Next project, Project ${this.props.next-1}`} onClick={(e) => this.props.handleNewProj(this.props.next)} icon={next} />
            <ReactButtonLink className="small-wrapper" nextLast={true} linkTo={"/portfolio/projects/"+nextLink} childClassName="small right-icon" label='Next' alt={`Next project, Project ${this.props.next-1}`} onClick={(e) => this.props.handleNewProj(this.props.next)} icon={next} />
        </nav>
    </footer>
    }
    
}

export default NextLastNav