import React from 'react';
import CustomButton from './button';
import { withRouter } from 'react-router-dom';
import ReactLink from './reactLink';

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
        const label = (this.props.currPage == 6) ? "You are currently on the About page" : (this.props.currPage == 0) ? "You are currently on the Home page" : "You are currently in the Projects section"
        const toggleLabel = (this.state.open) ? "Close menu" : "Menu"

        return <nav className={navBarClass+first} aria-label={"Portfolio Navigation, " + label}>
            <a href="#main" className="visually-hidden skip" tabIndex={tabIndex}>Skip to main</a>
            <CustomButton disabled={false} className='nav-toggle' small={true} bounce={false} icon={icon} active={false} onClick={(e) => this.toggleOpen()} ariaLabel={toggleLabel} />
            <ReactLink linkTo="/home" child={<CustomButton disabled={disableButtons} tabIndex={tabIndex} small={false} bounce={false} icon={"home.png"} active={(this.props.currPage == 0)} onClick={(e) => this.handleNavWrapper(0)} ariaLabel="Home" role="link"/>} />
            <ReactLink linkTo="/projects" child={<CustomButton disabled={disableButtons} tabIndex={tabIndex}  small={false} bounce={false} icon={"proj.png"} active={(this.props.currPage != 0 && this.props.currPage != 6)} onClick={(e) => this.handleNavWrapper(1)} ariaLabel="Projects" role="link"/>} />
            <ReactLink linkTo="/about" child={<CustomButton disabled={disableButtons} tabIndex={tabIndex}  small={false} bounce={false} icon={"about.png"} active={(this.props.currPage == 6)} onClick={(e) => this.handleNavWrapper(6)} ariaLabel="About" role="link"/>} />
        </nav>
    }
    
}

export default withRouter(NavBar)