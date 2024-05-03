import React from 'react';
import LandingPage from './landingPage';
import PortfolioContent from './portfolioContent'

class MainDisplay extends React.Component {
    //pages --> 
    // 0: landing page
    // 1: home page/project pages

    constructor(props) {
        super(props);
        this.enterPortfolio = this.enterPortfolio.bind(this)
        this.state = {
            vhs: true,
        }
      }

      enterPortfolio() {
        this.setState({
            vhs: false
        })
        console.log("Playing Molly's UX Portfolio...")
      }

    render () {
        const returnMe = (this.state.vhs) ? <LandingPage enterPortfolio={this.enterPortfolio} /> : <PortfolioContent page={0}/>
        return returnMe
    }
    
}

export default MainDisplay