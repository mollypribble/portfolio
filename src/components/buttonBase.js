import React from 'react';
import home from "../media/home.png"
import email from "../media/email.png"
import linkedin from "../media/linkedin.png"
import play from "../media/play.png"
import p1 from "../media/p1.png"
import p2 from "../media/p2.png"
import p3 from "../media/p3.png"
import p4 from "../media/p4.png"
import p5 from "../media/p5.png"
import p6 from "../media/p6.png"
import close from "../media/close.png"
import menu from "../media/menu.png"
import on from "../media/on.png"
import off from "../media/off.png"
import proj from "../media/proj.png"
import next from "../media/next.png"
import last from "../media/prev.png"
import emailText from "../media/email-text.png"
import about from "../media/about.png"
import pause from "../media/pause.png"
import light from "../media/light-mode.png"
import dark from "../media/dark-mode.png"
import color from "../media/color-mode.png"

class ButtonBase extends React.Component {

    constructor(props) {
        super(props);
      }

      clickAndBlur (e) {
        this.props.onClick();
        e.currentTarget.blur();
    }

    render () {
        const sizeClass = this.props.small ? "small-button " : "big-button "
        const bounceClass = this.props.bounce ? " bounce " : ""
        const buttonClass = this.props.className ? sizeClass + bounceClass + this.props.className : sizeClass + bounceClass

        const buttonTopClass=this.props.active ?"button-top active" : "button-top"

        // hard-coded images -- FUTURE: could update to take string as icon file name
        let icon = play
        let alt = "button"
        if (this.props.icon === "home.png"){
            icon = home
            alt = "home"
        }
        else if (this.props.icon === "email.png"){
            icon = email
            alt = "email"
        }
        else if (this.props.icon === "linkedin.png"){
            icon = linkedin
            alt = "linkedin"
        }
        else if (this.props.icon === "email-text.png"){
            icon = emailText
            alt = "email"
        }
        else if (this.props.icon === "play.png"){
            alt = "play"
        }
        else if (this.props.icon === "p1.png"){
            icon = p1
            alt = "project 1"
        }
        else if (this.props.icon === "p2.png"){
            icon = p2
            alt = "project 2"
        }
        else if (this.props.icon === "p3.png"){
            icon = p3
            alt = "project 3"
        }
        else if (this.props.icon === "p4.png"){
            icon = p4
            alt = "project 4"
        }
        else if (this.props.icon === "p5.png"){
            icon = p5
            alt = "project 5"
        }
        else if (this.props.icon === "p6.png"){
            icon = p6
            alt = "project 6"
        }
        else if (this.props.icon === "close.png"){
            icon = close
            alt = "close menu"
        }
        else if (this.props.icon === "menu.png"){
            icon = menu
            alt = "open menu"
        }
        else if (this.props.icon === "on.png"){
            icon = on
            alt = "turn video on"
        }
        else if (this.props.icon === "off.png"){
            icon = off
            alt = "turn video off"
        }
        else if (this.props.icon === "proj.png"){
            icon = proj
            alt = "projects"
        }
        else if (this.props.icon === "prev.png"){
            icon = last
            alt = "previous"
        }
        else if (this.props.icon === "next.png"){
            icon = next
            alt = "next"
        }
        else if (this.props.icon === "about.png"){
            icon = about
            alt = "about"
        }
        else if (this.props.icon === "pause.png"){
            icon = pause
            alt = "pause"
        }
        else if (this.props.icon === "light-mode.png"){
            icon = light
            alt = "Light mode"
        }
        else if (this.props.icon === "dark-mode.png"){
            icon = dark
            alt = "Dark mode"
        }
        else if (this.props.icon === "color-mode.png"){
            icon = color
            alt = "Color mode"
        }

        return <div className={buttonClass} 
        onClick={(e) => this.clickAndBlur(e)} 
        // disabled={this.props.disabled} 
        hidden={this.props.disabled} 
        aria-label={this.props.ariaLabel} 
        aria-pressed={this.props.ariaPressed} 
        aria-current={this.props.active}>
            <div className={buttonTopClass}>
                <img src={icon} alt={alt} aria-hidden="true"/>
            </div>
            <div className="button-bottom" />
        </div>
    }
    
}

export default ButtonBase