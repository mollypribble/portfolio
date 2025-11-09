import React from 'react';
import NavBar from './portfolioNav';
import Home from './home';
import Akvd from './projects/akvd';
import Mindyoga from './projects/mindyoga';
// import Edc from './projects/edc';
import Htc from './projects/htc';
// import RecruitRight from './projects/recruitRight.js';
import A11y from './projects/a11y.js';
import Filters from './projects/filters.js'
import ProjectList from './projectList.js';
import AboutMe from './about.js';
import { withRouter } from 'react-router-dom';

class PortfolioContent extends React.Component {

    constructor(props) {
        super(props);
        this.handleNewProj = this.handleNewProj.bind(this)
        this.toggleVideo = this.toggleVideo.bind(this)
        this.scrollRef = React.createRef();
        this.state = {
            page: this.props.page,
            video: true,
            heightCalc: 0
        }
      }

    toggleVideo (newVal) {
        this.setState({ video: newVal });
        console.log("video on: ", newVal)
    }

    handleNewProj(newProj) {
        if (newProj == -1){
            return
        }
        this.setState({
            page: newProj
        })
        this.calcScroll();
        this.scrollToTop();
    }

    renderCurrentPage (){

        const pageIndexArray = [
            <Home video={this.state.video} toggleVideo={this.toggleVideo} tvColor={this.props.theme}/>, 
            <ProjectList handleNewProj={this.handleNewProj} projURLs={this.props.projURLs} />, 
            <AboutMe handleNewProj={this.handleNewProj} />,
            <Mindyoga handleNewProj={this.handleNewProj} currPageNum={this.state.page} next={this.props.projURLs[1]} last={this.props.projURLs[3]} maxProjs={this.props.numProjs}/>,
            <Akvd handleNewProj={this.handleNewProj} currPageNum={this.state.page} next={this.props.projURLs[2]} last={this.props.projURLs[0]} maxProjs={this.props.numProjs}/>, 
            <A11y handleNewProj={this.handleNewProj} currPageNum={this.state.page} next={this.props.projURLs[3]} last={this.props.projURLs[1]} maxProjs={this.props.numProjs}/>,
            <Htc handleNewProj={this.handleNewProj} currPageNum={this.state.page} next={this.props.projURLs[0]} last={this.props.projURLs[2]} maxProjs={this.props.numProjs}/>
        ];

        return pageIndexArray[this.state.page];
        // return <div> hi {this.state.page} {this.props.projURLs}</div>
    }

    scrollToTop = () => {
        this.scrollRef.current.scroll({
          top: 0,
          behavior: "smooth"
        });
      }

    calcScroll = () => {
        if (this.scrollRef.current) {
          const { scrollTop, scrollLeft } = this.scrollRef.current;
          this.setState({
            heightCalc: (this.scrollRef.current.clientHeight * ((this.scrollRef.current.clientHeight + scrollTop) / this.scrollRef.current.scrollHeight)) + 8
          })
        }
      }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.page != this.state.page){
            this.setState({
                heightCalc: (this.scrollRef.current.clientHeight * ((this.scrollRef.current.clientHeight) / this.scrollRef.current.scrollHeight)) + 8
              })
        }
    }

    render () {
        const scrollClass = (this.state.page == 0) ? "custom-scroll no-display" : "custom-scroll"
        
        return <div className='portfolio-content' >
                    <NavBar handleNewProj={this.handleNewProj} currPage={this.state.page} mainContentRef={this.scrollRef} theme={this.props.theme} changeTheme={this.props.changeTheme}/>
                    <main id='main' tabIndex={-1} className='current-content' ref={this.scrollRef} onScroll={this.calcScroll}> 
                        {this.renderCurrentPage()}
                    </main>
                    <div className={scrollClass}>
                        <div className='custom-scroll-fill' 
                        style={{
                            height: `${this.state.heightCalc}px`
                        }} />
                    </div>
                </div>
    }
}

export default withRouter(PortfolioContent)