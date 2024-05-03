import React from 'react';
import CustomButton from './button';

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.animateImg=this.animateImg.bind(this);
        this.animateAndNav=this.animateAndNav.bind(this);
        this.state = {
            animate: false
        };
      }

      animateImg () {
        this.setState({ animate: true });
      }

      animateAndNav () {
        this.animateImg();
        setTimeout(this.props.enterPortfolio, 1500);
      }

    render () {
        const animateClass = this.state.animate ? " animate" : ""

        return <>
        <div className={'insert-vhs' + animateClass} />
        <div className={'landing-page' + animateClass}>
            <img className='landing-page-vhs-img' src="/media/vhs.png" alt="Molly's UX portfolio now available on VHS. Play now!" width="80%" height="auto" />
            <CustomButton small={false} bounce={true} icon={"play.png"} onClick={this.animateAndNav} />
        </div>
        </>
    }
    
}

export default LandingPage