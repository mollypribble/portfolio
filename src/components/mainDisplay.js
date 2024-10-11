import React from 'react';
import LandingPage from './landingPage';
import PortfolioContent from './portfolioContent'
import { withRouter } from 'react-router-dom';

class MainDisplay extends React.Component {
    //pages --> 
    // 0: landing page
    // 1: home page/project pages

    constructor(props) {
        super(props);
        this.enterPortfolio = this.enterPortfolio.bind(this)
        this.handleResize = this.handleResize.bind(this)
        this.setColorMode = this.setColorMode.bind(this)
        this.state = {
            vhs: this.props.vhs,
            height: window.innerHeight,
            page: (this.props.page),
            colorMode: "color"
        }
      }

      enterPortfolio() {
        this.setState({
            vhs: false
        })
        console.log("Playing Molly's UX Portfolio...")
      }

      handleResize(e) {
        this.setState({height: window.innerHeight});
      }

      setColorMode(newMode) {
        this.setState({colorMode: newMode});
      }
    
      componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
          this.setColorMode("light");
        }
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
      }

    render () {
        
        const returnMe = (this.state.vhs) ? <LandingPage enterPortfolio={this.enterPortfolio}/>:<PortfolioContent page={this.props.page} theme={this.state.colorMode} changeTheme={this.setColorMode}/>
        
        return <div className={'main-display'+ " " + this.state.colorMode}
                  style={{height: `${this.state.height}px`}} >
                  {returnMe}
        </div>
    }
    
}

export default withRouter(MainDisplay)