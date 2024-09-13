import React from 'react';
import SubTitle from './subtitle';
import Title from './title';
import CustomButton from './button';
import me from "../media/me-prof.jpg";
import { withRouter } from 'react-router-dom';

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
                            <SubTitle title="HI, I'M MOLLY" />
                            <div className='about-text'>
                                <p>I'm a UX designer at Ab Initio Software Corporation in Boston, MA. I utilize an iterative design process to tackle complex, user challenges, seek feedback from multiple perspectives, and communicate solutions for web-based products. My background includes work in design research, user-centered interaction design, web development,  enterprise software, and accessibility. <br/> <br/> Contact me for professional inquiries.</p>
                            </div>
                        </div>

                        <div className='link-nav banner'>
                            <div className='about-button-label'>LinkedIn & email &rarr;</div>
                            <div className='about-button-wrapper'>
                                <a href='https://www.linkedin.com/in/molly-pribble' target='_blank' tabIndex="-1">
                                    <CustomButton disabled={false} small={true} bounce={false} icon={"linkedin.png"} onClick={(e) => {}} ariaLabel="LinkedIn" role="link"/>
                                </a>
                                <a href='mailto:mollypribble1@mac.com' target='_blank' tabIndex="-1">
                                    <CustomButton disabled={false} small={true} bounce={false} icon={"email.png"} onClick={(e) => {}} ariaLabel="Email" role="link"/>
                                </a>
                            </div>
                        </div>

                    </div>

                    <img className='about-takeaway-image' alt='Headshot of Molly' src={me}/>
                    
                </div>

                <div className="about-takeaways">
                    <div className='about-takeaway text-only'>
                        <h3 className='section-header'>RESUME SUMMARY</h3>
                        <ul className='about-text'>
                            <li>{this.state.exp} years of professional UX experience</li>
                            <li>1.5 years of academic research experience</li>
                            <li>BS/MS in Computer Science (Northwestern '22)</li>
                            <li>Segal Design Certificate (Northwestern '22)</li>
                            <li>HTML, CSS, Javascript/Typescript, React, Python</li>
                            <li>Figma, Sketch</li>
                        </ul>
                    </div>
                    <div className='about-takeaway text-only last-one'>
                        <h3 className='section-header'>MISC. INTERESTS</h3>
                        <ul className='about-text'>
                            <li>Pottery</li>
                            <li>Baking</li>
                            <li>Yoga</li>
                            <li>Soccer</li>
                            <li>Hiking</li>
                            <li>Photography</li>
                        </ul>
                    </div>
                </div>
        </div>
    }
    
}

export default withRouter(AboutMe)