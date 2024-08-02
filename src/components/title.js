import React from 'react';

class Title extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className="project-title">
            <h1 className='text'>{this.props.title}</h1>
            <div className='rect-1'></div>
            <div className='rect-2'></div>
            <div className='rect-3'></div>
            <div className='rect-4'></div>
            <div className='rect-5'></div>
            <div className='rect-6'></div>
            </div>
    }
    
}

export default Title