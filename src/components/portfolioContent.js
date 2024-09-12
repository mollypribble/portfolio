import React from 'react';
import NavBar from './portfolioNav';
import Home from './home';
import Akvd from './projects/akvd';
import Mindyoga from './projects/mindyoga';
// import Edc from './projects/edc';
import Htc from './projects/htc';
import RecruitRight from './projects/recruitRight.js';
import ProjectList from './projectList.js';
import AboutMe from './about.js';

class PortfolioContent extends React.Component {
    //pages --> 
    // 0 --> home
    // 1 --> project list
    // 2-5 --> projects
    // 6 --> about

    constructor(props) {
        super(props);
        this.handleNewProj = this.handleNewProj.bind(this)
        this.toggleVideo = this.toggleVideo.bind(this)
        this.scrollRef = React.createRef();
        this.state = {
            page: 0,
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
        if (this.state.page == 0){
            return <Home 
                    video={this.state.video} 
                    toggleVideo={this.toggleVideo}/>
        }
        else if (this.state.page == 1){
            return <ProjectList handleNewProj={this.handleNewProj} />
        }
        else if (this.state.page == 2){
            return <Mindyoga handleNewProj={this.handleNewProj} next={3} last={5}/>
        }
        else if (this.state.page == 3){
            return <Akvd handleNewProj={this.handleNewProj} next={4} last={2}/>
        }
        else if (this.state.page == 4){
            return <RecruitRight handleNewProj={this.handleNewProj} next={5} last={3}/>
        }
        else if (this.state.page == 5){
            return <Htc handleNewProj={this.handleNewProj} next={2} last={4}/>
        }
        else if (this.state.page == 6){
            return <AboutMe handleNewProj={this.handleNewProj} />
        }
        return <div>{this.state.page}</div>
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

        console.log(this.state.page)
        
        return <div className='portfolio-content' >
                    <NavBar handleNewProj={this.handleNewProj} currPage={this.state.page}/>
                    <main id='main' className='current-content' ref={this.scrollRef} onScroll={this.calcScroll}> 
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

export default PortfolioContent