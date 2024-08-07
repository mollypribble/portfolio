import React from 'react';
import CustomButton from './button';
// import websitev2 from '../media/websitev2.mp4';
import websitev3gif from '../media/websitev3.gif';
// import poster from '../media/still.png'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.updateWidth = this.updateWidth.bind(this);
        this.state = {
            videoSize: true
        }
      }

      updateWidth() {
        const w = window.innerWidth;
        if (w <= 550) {
            this.setState({ videoSize: false })
        }
        else if (w > 550) {
            this.setState({videoSize: true})
        }
    }

    componentDidMount() {
        this.updateWidth();
        window.addEventListener('resize', this.updateWidth);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth);
      }

    render () {

        const disableVideo = (this.props.video && this.state.videoSize) ? "" : "disabled"
        const videoControls = (this.state.videoSize) ? "banner home-banner" : "banner home-banner disabled"
        const homeStyle = (this.props.video && this.state.videoSize) ? "" : "no-video"
        const videoCurrentLabel = (this.props.video && this.state.videoSize) ? "Video is on" : "Video is off"

        return <div className="home-display">

                <div className={"home-simple-alt "+ homeStyle}>
                        <h1 className='home-simple-name'>
                            Molly Pribble
                        </h1>
                        <h2 className='home-simple-title'>
                            UX designer
                        </h2>
                </div>

                <img className={disableVideo} id="home-background-video" src={websitev3gif} alt="Stylistic introduction video with scenes from Molly's recent adventures, hobbies, and life"/>

                <div className={videoControls}>
                <div className='home-simple-video-text' aria-label={videoCurrentLabel}>&larr; Video controls</div>
                    <div className='home-simple-video-controls'>
                            <CustomButton disabled={false} small={true} bounce={false} icon={"on.png"} active= {this.props.video} onClick={(e) => this.props.toggleVideo(true)} ariaLabel="Turn video on"/>
                            <CustomButton disabled={false} small={true} bounce={false} icon={"off.png"} active= {!this.props.video} onClick={(e) => this.props.toggleVideo(false)} ariaLabel="Turn video off"/> 
                    </div>
                </div>

        </div>
    }
    
}

export default Home