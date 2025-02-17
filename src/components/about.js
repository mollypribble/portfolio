import React from 'react';
import SubTitle from './subtitle';
import Title from './title';
import CustomButton from './button';
import me from "../media/me-prof.jpg";
import { withRouter } from 'react-router-dom';
import ButtonLink from './link';

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

        return <div className="">
                <Title title="About Me"/>

                <div className='about-split'>
                    
                    <div className='about-split-text'>
                        
                        <div>
                            <SubTitle title="HI, I'M MOLLY" />
                            <div className='about-text'>
                                <p>I'm a Boston-based UX designer, currently at Ab Initio. My interests and professional expertise include: UI/interaction design, accessibility, HCI, ethical technology, and design research.<br /> <br />
                                    {/* I've worked on a wide range of projects from designing a re-usable, cross-product filtering widget to developing an introductory accessibility training course for front-end developers and designers.
                                    Prior to this, I graduated from and conducted HCI design research at Northwestern University.
                                    In future, I want to further explore accessible design, socio-technical interaction design, and how technology can positively influence emotions.
                                    <br/> <br/>  */}
                                    Contact me for professional inquiries.</p>
                            </div>
                        </div>

                        <div className='link-nav banner'>
                            <div className='about-button-label'>LinkedIn & email &rarr;</div>
                            <div className='about-button-wrapper'>
                                <ButtonLink href='https://www.linkedin.com/in/molly-pribble' 
                                target='_blank'
                                disabled={false} 
                                small={true} 
                                bounce={false} 
                                icon={"linkedin.png"} 
                                onClick={(e) => {}}
                                ariaLabel="LinkedIn" />
                                <ButtonLink href='mailto:mollypribble1@mac.com' 
                                target='_blank'
                                disabled={false} 
                                small={true} 
                                bounce={false} 
                                icon={"email.png"} 
                                onClick={(e) => {}}
                                ariaLabel="Email" />
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
                            <li><a href='https://practical-accessibility.today/' target='_blank'>Practical Accessibility</a> Certificate of Completion</li>
                            <li>HTML, CSS, Javascript/Typescript, React, Python</li>
                            <li>Figma, Sketch</li>
                        </ul>
                    </div>
                    <div className='about-takeaway text-only last-one'>
                        <h3 className='section-header'>HOBBIES & EXTRACURRICULARS</h3>
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

                {/* <div className="about-takeaways">
                    <div className='about-takeaway text-only part-two'>
                        <h3 className='section-header'>TO DO LIST</h3>
                        <ul className='about-text'>
                            <li>Convince parents to get a dog <span aria-label='done'>&#9745;</span></li>
                            <li>Graduate from engineering school <span aria-label='done'>&#9745;</span></li>
                            <li>Hike in Patagonia <span aria-label='done'>&#9745;</span></li>
                            <li>Do improv <span aria-label='done'>&#9745;</span></li>
                            <li>Design a font</li>
                            <li>Open a bakery</li>
                            <li>Learn another language</li>
                            <li>Do a triathlon</li>
                        </ul>
                    </div>
                    <div className='about-takeaway text-only part-two'>
                        <h3 className='section-header'>ABOUT THIS SITE</h3>
                        <p className='about-text'>
                           Honestly, I initially tried to make my portfolio look like a "designer's" website: minimalistic, an effortless color palette, fun and playful graphics...
                           <br /> <br />
                           <b>I wasn't successful.</b> I was too concerned with fitting in and doing things "right" (which limited the things I was even willing to try).
                           <br /> <br />
                           Until I began approaching this portfolio's web design from a place of self-expression did I find inspiration and satisfaction. The process of redesigning this site not only gave me an opportunity to practice my web development, but also gave me an opportunity to be creative and introspective. I figure if I want people to learn more about me from this portfolio, I ought to put a bit of myself into the site first.
                        </p>
                    </div>
                </div> */}
        </div>
    }
    
}

export default withRouter(AboutMe)