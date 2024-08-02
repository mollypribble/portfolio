import React from 'react';
import CustomButton from './button';
import vhs from '../media/vhs.png'
import websitev3gif from '../media/websitev3.gif';

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.animateImg=this.animateImg.bind(this);
        this.animateAndNav=this.animateAndNav.bind(this);
        this.preloadImages=this.preloadImages.bind(this);
        this.preloadImage=this.preloadImage.bind(this);
        this.delay=this.delay.bind(this);
        this.state = {
            animate: false,
            loaded: false
        };
      }

      animateImg () {
        this.setState({ animate: true });
      }

      animateAndNav () {
        this.animateImg();
        setTimeout(this.props.enterPortfolio, 1500);
      }

      preloadImage = (src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
          console.log("preload", img)
        });
      };

      preloadImages = (imagesArray) => {
        const promises = imagesArray.map((src) => this.preloadImage(src));
        return Promise.all(promises);
      };

      delay(t) {
        return new Promise(resolve => setTimeout(resolve, t));
      }

      componentDidMount() {
        const loadImages = [
          vhs,
          websitev3gif
        ]

        this.preloadImages(loadImages).then(() => {
          this.setState({ loaded: true });
          console.log('all preloaded');
        });

        this.delay(6300).then(() => {
          console.log("max timeout hit when loaded is: ", this.state.loaded);
          this.setState({ loaded: true });
        }
        )
      }

    render () {
        const animateClass = this.state.animate ? " animate" : ""

        return <>
        <div className={this.state.loaded ? "hide-me" : "show-me"} aria-hidden={this.state.loaded ? "true" : "false"}>
          <div className='loading-page'>
            <div className='loading-bar'>
              <div className='loading-bar-text'>
              Loading...  Loading...  Loading...  Loading...  Loading...  Loading... 
              </div> 
            </div>
          </div>
        </div>
        <div className={this.state.loaded ? "show-me" : "hide-me"} aria-hidden={this.state.loaded ? "false" : "true"}>
          <div className={'insert-vhs' + animateClass} />
          <div className={'landing-page' + animateClass}>
              <img className='landing-page-vhs-img' src={vhs} alt="Molly's UX portfolio now available on VHS. Play now!" width="80%" height="auto" />
              <CustomButton small={false} bounce={true} icon={"play.png"} onClick={this.animateAndNav} ariaLabel={"Press play to enter portfolio"}/>
          </div>
        </div>
        </>
    }
    
}

export default LandingPage