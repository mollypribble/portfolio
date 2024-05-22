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
            <div className='proj-ticker'>
                Proj. {this.props.curr}/4
            </div>
            <LinkButton className="big" label='Next &rarr;' alt='Next Project' onClick={(e) => this.props.handleNewProj(this.props.next)}/> 
            <LinkButton className="small" label='&rarr;' alt='Previous Project' onClick={(e) => this.props.handleNewProj(this.props.last)}/>
        </div>
    </div>
    }
    
}

export default NextLastNav