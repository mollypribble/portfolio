import React from 'react';
import prev from '../media/prev.png';
import next from '../media/next.png';
import ReactButtonLink from './reactButtonLink';

class NextLastNav extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {
        
        // handles URL 
        const nextLink=this.props.next
        const prevLink=this.props.last

        let prevIndex = this.props.curr-1
        let nextIndex = this.props.curr+1

        if (this.props.curr == 3){
            prevIndex = 6
        }

        if (this.props.curr == 6){
            nextIndex = 3
        }

        const UIPageNum = this.props.curr-2 //correct for page index numbers in App.js
        console.log(this.props.maxProjs)

        return <footer className='banner proj-next-last-banner'>
        <nav className='proj-next-last-controls' aria-label={'Project'}>
            <p className='visually-hidden-text'>Project {UIPageNum} out of {this.props.maxProjs}</p>
            <ReactButtonLink className="big-wrapper" nextLast={true} linkTo={"/portfolio/projects/"+prevLink} childClassName="big left-icon" label='Prev' alt={`Previous project`} onClick={(e) => this.props.handleNewProj(prevIndex)} icon={prev} />
            <ReactButtonLink className="small-wrapper" nextLast={true} linkTo={"/portfolio/projects/"+prevLink} childClassName="small left-icon" label='Prev' alt={`Previous project`} onClick={(e) => this.props.handleNewProj(prevIndex)} icon={prev} />
            <p aria-hidden={true}>Project {UIPageNum}/{this.props.maxProjs}</p>
            <ReactButtonLink className="big-wrapper" nextLast={true} linkTo={"/portfolio/projects/"+nextLink} childClassName="big right-icon" label='Next' alt={`Next project`} onClick={(e) => this.props.handleNewProj(nextIndex)} icon={next} />
            <ReactButtonLink className="small-wrapper" nextLast={true} linkTo={"/portfolio/projects/"+nextLink} childClassName="small right-icon" label='Next' alt={`Next project`} onClick={(e) => this.props.handleNewProj(nextIndex)} icon={next} />
        </nav>
    </footer>
    }
    
}

export default NextLastNav