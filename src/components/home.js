import React from 'react';
import CustomButton from './button';
// import websitev2 from '../media/websitev2.mp4';
import websitev3gif from '../media/websitev3.gif';
// import poster from '../media/still.png'
import tv from '../media/TV.svg';

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

        const disableVideo = this.props.video ? "" : " disabled"

        return <div className="home-display">

                <div className={"home-simple-alt"}>
                    <div className="home-tv">
                        <div className='home-simple-video-controls'>
                            <CustomButton disabled={false} small={true} bounce={false} icon={"on.png"} active= {this.props.video} onClick={(e) => this.props.toggleVideo(true)} ariaLabel="Play video" ariaPressed={this.props.video ? "true" : "false"}/>
                            <CustomButton disabled={false} small={true} bounce={false} icon={"off.png"} active= {!this.props.video} onClick={(e) => this.props.toggleVideo(false)} ariaLabel="Pause video" ariaPressed={this.props.video ? "false" : "true"}/> 
                        </div>
                        <img className={"home-tv-tv"} src={tv} aria-hidden/>
                        <img className={"home-tv-video" + disableVideo} src={websitev3gif} alt="Stylistic introduction video played on a retro TV with scenes from Molly's recent adventures, hobbies, and life"/>
                    </div>
                    <h1 className='home-simple-name'>
                        Molly Pribble
                    </h1>
                    <h2 className='home-simple-title'>
                        UX designer
                    </h2>
                </div>

        </div>
    }
    
}

export default Home