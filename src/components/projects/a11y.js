import React from 'react';
import Title from '../title';
import ProjectOverview from '../projectOverview';
// import SubTitle from '../subtitle';
import NextLastNav from '../nextLastNav';
import Section from '../layout/section';
import SectionTitle from '../layout/sectionTitle';
import Single from '../layout/single';
import Double from '../layout/double';
// import Triple from '../layout/triple';
import TwoWeeks from '../../media/project-media/a11y/2-weeks.png'
import Devs from '../../media/project-media/a11y/devs.png'
import Uxs from '../../media/project-media/a11y/uxs.png'


class a11y extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <div className="project-display">
            <div className="project-display-content">
            <Title title="Accessibility Basics" />
            <div className='banner'>Accessibility resources for designers & developers_</div>
            <ProjectOverview 
            what='Designer & Curator'
            skills='Accessibility' 
            dates='Oct 2024-Jan 2025' 
            affiliation='Ab Initio Software' />

            <Section>
                <SectionTitle title="AUDITING ACCESSIBILITY" />
                <Single>
                    <div>
                        <p>My campaign to promote accessibility stemmed from leading an internal accessibility audit of one of our common components, where I:</p>
                            <ul>
                                <li>Found <b>14 <abbr title="Web Content Accessibility Guide">WCAG</abbr> violations</b></li>
                                <li>Filed over <b>30 jiras</b> to address these issues</li>
                                <li><b>Coordinated</b> the effort to fix these issues across multiple product teams</li>
                            </ul> 
                    </div>
                </Single>
                <Double>
                    <p className='section-header'>However, the biggest issue I uncovered during this audit was the widespread lack of accessibility knowledge in our organization.</p>
                    <div>
                        <p>Without dedicated accessibility resources, our products contain a lot of inaccessible code and design. The <b>lack of resources</b> was exacerbated by a general sense that accessibility was a <b>confusing, overwhelming topic</b> and an attitude that accessibility <b>doesn't provide additional business value</b>.</p>
                    </div>
                </Double>
            </Section>

            <Section>
                <SectionTitle title="TIME-CONSTRAINED TRAINING" />
                <Double small="right">
                    <div>
                        <p>After seeing the extent of inaccessible code our development organization was producing, I took it upon myself to create and curate accessibility resources, starting with my crash-course: <b>Accessibility Basics in Two Weeks</b>. Designed to fit into developers' busy schedules, this course provided basic accessibility knowledge in under 30-minutes per day over a 10 day period and covered topics from types of assistive technology, proper <abbr title="Hypertext Markup Language">HTML</abbr> and <abbr title="Accessible Rich Internet Applications">ARIA</abbr> use, and common accessible development techniques.</p>
                    </div>
                    <img src={TwoWeeks} alt={"Title page of accessibility in two weeks course"}/>
                </Double>
                {/* <Single>
                    <p className='section-header'>"quote"</p>
                </Single> */}
            </Section>

            <Section>
                <SectionTitle title="ACCESSIBILITY RESOURCE LIBRARY" />
                <Double small="left" reverse='true'>
                    <img src={Devs} alt={"Title page of accessibility resources for front-end developers"}/>
                    <div>
                        <h3 className='section-header'>FOR DEVS...</h3>
                        <p>Not every developer has the bandwidth to investigate accessibility. Sometimes, the best way to learn is on the fly. In addition to my 10-day course, I started to curate a <b>library of helpful resources</b> from around the web that cover common accessibility pitfalls, from inaccessible labels, to the mechanics of tab order, to live regions (and more).</p>
                    </div>
                </Double>
                <Double small="right">
                    <div>
                        <h3 className='section-header'>...AND DESIGNERS</h3>
                        <p>Developers are not the only ones at fault for inaccessible code, especially when they are implemented designs from the UX team which do not consider or address accessibility in their specs. However, in our organization, UX resources are always stretched thin. Therefore, I also curated a library <b>focused on accessible design considerations</b> for the rest of the UX team to consult as they design new features for our products.</p>
                    </div>
                    <img src={Uxs} alt={"Title page of accessibility resources for UX designers"}/>
                </Double>
            </Section>

            </div>

            <NextLastNav handleNewProj={this.props.handleNewProj} curr={4} last={this.props.last} next={this.props.next}/>

        </div>
    }
    
}

export default a11y