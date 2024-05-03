import React from 'react';

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
        let icon = "../media/" + this.props.icon
        let alt = "button"
        if (this.props.icon == "home.png"){
            alt = "home"
        }
        else if (this.props.icon == "email.png"){
            alt = "email"
        }
        else if (this.props.icon == "linkedin.png"){
            alt = "linkedin"
        }
        else if (this.props.icon == "play.png"){
            alt = "play"
        }
        else if (this.props.icon == "p1.png"){
            alt = "project 1"
        }
        else if (this.props.icon == "p2.png"){
            alt = "project 2"
        }
        else if (this.props.icon == "p3.png"){
            alt = "project 3"
        }
        else if (this.props.icon == "p4.png"){
            alt = "project 4"
        }
        else if (this.props.icon == "p5.png"){
            alt = "project 5"
        }
        else if (this.props.icon == "p6.png"){
            alt = "project 6"
        }
        else if (this.props.icon == "close.png"){
            alt = "close menu"
        }
        else if (this.props.icon == "menu.png"){
            alt = "open menu"
        }
        else if (this.props.icon == "on.png"){
            alt = "on"
        }
        else if (this.props.icon == "off.png"){
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