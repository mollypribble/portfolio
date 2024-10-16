import React from 'react';
import CustomButton from './button';
import ReactButtonLink from './reactButtonLink';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.updateWidth = this.updateWidth.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        this.handleNavWrapper = this.handleNavWrapper.bind(this);
        this.state = {
            width: 0,
            open: false,
            first: true,
        }
    }

    handleNavWrapper(x) {
        this.props.handleNewProj(x);
        if (this.state.open){
            this.setState({ open: !this.state.open });
        }
        {this.props.mainContentRef.current.focus()}
    }


    updateWidth() {
        this.setState({ width: window.innerWidth });
        if (this.state.width <= 550) {
            this.setState({ open: false })
        }
        else if (this.state.width > 550) {
            this.setState({first: false})
        }
    }

    toggleOpen () {
        this.setState({ open: !this.state.open });
        if (this.state.first){
            this.setState({first: false})
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
        const first = (this.state.first) ? " first" : ""
        const navBarClass = (this.state.width <= 600 && this.state.open) ? "nav-bar-small" : "nav-bar"
        const icon = (this.state.open) ? "close.png" : "menu.png"
        const tabIndex = ((this.state.width <= 600 && this.state.open) || this.state.width > 600) ? "0" : "-1"
        const disableButtons = (this.state.width <= 600 & !this.state.open) ? true : false
        const hideColorModes = disableButtons ? "hidden-modes" : ""
        // const label = (this.props.currPage == 6) ? "You are currently on the About page" : (this.props.currPage == 0) ? "You are currently on the Home page" : "You are currently in the Projects section"
        const toggleLabel = (this.state.open) ? "Close navigation" : "Open navigation"

        return <>
        <CustomButton disabled={false} className='nav-toggle-wrapper small-button' childClassName='nav-toggle' small={true} bounce={false} icon={icon} active={false} onClick={(e) => this.toggleOpen()} ariaLabel={toggleLabel} />
        <nav className={navBarClass+first} aria-label={"Portfolio"}>
            <a className="visually-hidden skip"  tabIndex={0}
                onKeyDown={(e) => {if (e.key === 'Enter' || e.keyCode === 13) {
                    this.props.mainContentRef.current.focus()
                }}}
                onClick={() => {this.props.mainContentRef.current.focus()}} >
                Skip to main
            </a>

            {/* <CustomButton disabled={false} className='nav-toggle-wrapper small-button' childClassName='nav-toggle' small={true} bounce={false} icon={icon} active={false} onClick={(e) => this.toggleOpen()} ariaLabel={toggleLabel} /> */}

            <ReactButtonLink linkTo="/portfolio/home" disabled={disableButtons} tabIndex={tabIndex} small={false} bounce={false} icon={"home.png"} active={(this.props.currPage == 0)} onClick={(e) => this.handleNavWrapper(0)} ariaLabel="Home" />
            <ReactButtonLink linkTo="/portfolio/projects" disabled={disableButtons} tabIndex={tabIndex} small={false} bounce={false} icon={"proj.png"} active={(this.props.currPage != 0 && this.props.currPage != 6)} onClick={(e) => this.handleNavWrapper(1)} ariaLabel="Projects" />
            <ReactButtonLink linkTo="/portfolio/about" disabled={disableButtons} tabIndex={tabIndex} small={false} bounce={false} icon={"about.png"} active={(this.props.currPage == 6)} onClick={(e) => this.handleNavWrapper(6)} ariaLabel="About" />
                

            <div className='color-row-wrapper'>
                <CustomButton disabled={disableButtons} className={'small-button ' + hideColorModes} childClassName='dark-mode' small={true} bounce={false} icon={"dark-mode.png"} active={(this.props.theme == 'dark')} onClick={(e) => this.props.changeTheme("dark")} ariaLabel={"Dark mode"} />
                <CustomButton disabled={disableButtons} className={'small-button ' + hideColorModes} childClassName='light-mode' small={true} bounce={false} icon={"light-mode.png"} active={(this.props.theme == 'light')} onClick={(e) => this.props.changeTheme("light")} ariaLabel={"Light mode"} />
            </div>
            <div className='color-row-wrapper'>
                <CustomButton disabled={disableButtons} className={'small-button ' + hideColorModes} childClassName='color-mode' small={true} bounce={false} icon={"color-mode.png"} active={(this.props.theme == 'color')} onClick={(e) => this.props.changeTheme("color")} ariaLabel={"Color mode"} />
                {/* <CustomButton disabled={disableButtons} className={'small-button ' + hideColorModes} childClassName='color-mode' small={true} bounce={false} icon={"play.png"} active={false} onClick={(e) => this.props.changeTheme("color")} ariaLabel={"Color mode"} /> */}
            </div>

        </nav>
        </>
    }
    
}

export default withRouter(NavBar)