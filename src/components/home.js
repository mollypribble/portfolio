import React from 'react';
import CustomButton from './button';
import websitev2 from '../media/websitev2.mp4';
import websitev2gif from '../media/websitev2.gif'

class Home extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        const disableVideo = (this.props.video) ? "" : "disabled"

        return <div className="home-display">
                <video className={disableVideo} id="home-background-video" src={websitev2} typeof='video/mp4' autoPlay loop muted poster={websitev2gif} />
                
                <div className='home-simple'>
                    <div className='home-simple-name'>
                        Hi, my name is Molly Pribble.
                    </div>
                    <div className='home-simple-title'>
                        I am a UX Designer.
                    </div>
                    <div className='home-simple-portfolio'>
                        This is my portfolio.
                    </div>
                </div>

                <div className='banner home-banner'>
                    <div className='home-simple-video-controls'>
                            <CustomButton disabled={false} small={true} bounce={false} icon={"on.png"} active= {this.props.video} onClick={(e) => this.props.toggleVideo(true)} />
                            <CustomButton disabled={false} small={true} bounce={false} icon={"off.png"} active= {!this.props.video} onClick={(e) => this.props.toggleVideo(false)} /> 
                    </div>
                    <div className='home-simple-video-text'>&larr; You can control the video here.</div>
                </div>

                <div className='banner home-banner small'>
                    <div className='home-simple-video-controls'>
                            <CustomButton disabled={false} small={true} bounce={false} icon={"on.png"} active= {this.props.video} onClick={(e) => this.props.toggleVideo(true)} />
                            <CustomButton disabled={false} small={true} bounce={false} icon={"off.png"} active= {!this.props.video} onClick={(e) => this.props.toggleVideo(false)} /> 
                    </div>
                    <div className='home-simple-video-text'>&larr; Control video here.</div>
                </div>
        </div>
    }
    
}

export default Home