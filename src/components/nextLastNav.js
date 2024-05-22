import React from 'react';
import CustomButton from './button';

class NextLastNav extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className='banner proj-next-last-banner'>
        <div className='proj-next-last-controls'>
            <CustomButton disabled={false} small={true} bounce={false} icon={"last.png"} active={false} onClick={(e) => this.props.handleNewProj(this.props.last)}/>
            <CustomButton disabled={false} small={true} bounce={false} icon={"next.png"} active={false} onClick={(e) => this.props.handleNewProj(this.props.next)}/> 
        </div>
    </div>
    }
    
}

export default NextLastNav