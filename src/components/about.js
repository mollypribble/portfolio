import React from 'react';
// import ProjectButton from './projectButton';
import Title from './title';
import CustomButton from './button';

class AboutMe extends React.Component {

    constructor(props) {
        super(props);
        this.calcExp = this.calcExp.bind(this);
        this.state = {
            exp: 0
        }
      }

    calcExp() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();

        const year_start = 2023
        const month_start = 3

        const total_exp = (12*(year-year_start) + (month-month_start)) / 12
        this.setState({ exp: total_exp.toFixed(1)});
    }

    componentDidMount() {
        this.calcExp();
      }

    render () {

        return <div className="project-list-display">
                <Title title="About Me"/>

                <div className='about-split'>
                    <div className='about-split-text'>
                        <div>
                            <div className='section-header'>HI, I'M MOLLY.</div>
                            <div className='about-text'>
                                I'm a UX designer at Ab Initio Software Corporation in Boston, MA. I employ an iterative design process to tackle complex, user challenges, seek feedback from multiple perspectives, and communicate solutions for web-based products. My background and areas of expertise include human-computer interaction (HCI), academic design research, interaction design, and web design. <br/> <br/> Contact me for professional inquiries.
                            </div>
                        </div>

                        <div className='link-nav banner'>
                            <div className='about-button-label'>LinkedIn & email &rarr;</div>
                            <div className='about-button-wrapper'>
                                <a href='https://www.linkedin.com/in/molly-pribble' target='_blank' tabIndex="-1">
                                    <CustomButton disabled={false} small={true} bounce={false} icon={"linkedin.png"} onClick={(e) => {}}/>
                                </a>
                                <a href='mailto:mollypribble1@mac.com' target='_blank' tabIndex="-1">
                                    <CustomButton disabled={false} small={true} bounce={false} icon={"email.png"} onClick={(e) => {}}/>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className='about-takeaway-image' />
                </div>

                <div className="about-takeaways">
                    <div className='about-takeaway text-only'>
                        <div className='section-header'>RESUME SUMMARY</div>
                        <div className='about-text'>-- {this.state.exp} years of professional UX experience<br />-- 1.5 years of academic research experience<br />-- BS/MS in Computer Science (Northwestern '22)<br />-- Segal Design Certificate (Northwestern '22)<br />-- HTML, CSS, Javascript/Typescript, React, Python</div>
                    </div>
                    <div className='about-takeaway text-only last-one'>
                    <div className='section-header'>MISC. INTERESTS</div>
                        <div className='about-text'>--  Pottery <br />-- Baking<br />-- Yoga<br />-- Soccer<br />-- Hiking<br />-- Photography</div>
                    </div>
                </div>
        </div>
    }
    
}

export default AboutMe