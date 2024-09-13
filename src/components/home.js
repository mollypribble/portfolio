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
                        <img className={"home-tv-tv"} src={tv} aria-hidden/>
                        <p className='visually-hidden-text' id='tv-label'>Stylistic introduction video played on a retro TV with scenes from Molly's recent adventures, hobbies, and life</p>
                        <p className='visually-hidden-text' id='tv-description'>Includes videos of traveling in Europe and South America, hiking, cute animals, road tripping through national parks, going to Lake Michigan, walking around Boston, visiting San Francisco, and doing pottery.</p>
                        <img className={"home-tv-video" + disableVideo} src={websitev3gif} aria-labelledby='tv-label' aria-describedby='tv-description'/>
                        <div className='home-simple-video-controls' role='group' aria-label='Video controls'>
                            <CustomButton disabled={false} small={true} bounce={false} icon={"play.png"} active= {this.props.video} onClick={(e) => this.props.toggleVideo(true)} ariaLabel="Play" ariaPressed={this.props.video ? "true" : "false"}/>
                            <CustomButton disabled={false} small={true} bounce={false} icon={"pause.png"} active= {!this.props.video} onClick={(e) => this.props.toggleVideo(false)} ariaLabel="Pause" ariaPressed={this.props.video ? "false" : "true"}/> 
                        </div>
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