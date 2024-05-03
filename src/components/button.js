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

class CustomButton extends React.Component {

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
        const buttonClass = sizeClass + bounceClass + this.props.className

        const buttonTopClass=this.props.active ?"button-top active" : "button-top"

        // hard-coded images -- FUTURE: could update to take string as icon file name
        let icon = play
        console.log(icon)
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
            alt = "on"
        }
        else if (this.props.icon === "off.png"){
            icon = off
            alt = "off"
        }

        return <button className={buttonClass} onClick={(e) => this.clickAndBlur(e)} disabled={this.props.disabled}>
            <div className={buttonTopClass}>
                <img src={icon} alt={alt} />
            </div>
            <div className="button-bottom" />
        </button>
    }
    
}

export default CustomButton