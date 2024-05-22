import React from 'react';
import Title from '../title';
import ProjectOverview from '../projectOverview';
import SubTitle from '../subtitle';
import NextLastNav from '../nextLastNav';

class Edc extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <>
        <div className="project-display">
            <Title title="On to 2022" />
            <ProjectOverview 
            skills='Web Dev, Data Visualization, Information Architecture' 
            dates='Sept 2019-Jun 2020' 
            affiliation='Design & Innovate for Social Change (DISC) @ Northwestern Univ.' />

            <div className='edc-summary'>
                <div className='edc-text'>The Evanston Development Co-operative (EDC), a Chicagoland-based organization that promotes the adoption of ADUs* both locally and nationally, approached DISC to create a website to promote an upcoming campaign. Together, we worked to design and develop a website for their "On to 2022" campaign, which aimed to: <br /><br />1 - increase awareness of the legality of ADUs. <br />2 - promote education about the benefits of ADUs. <br />3 - mobilize campaigners for the legalization of ADUs.</div>
                <div className='edc-summary-image' />
            </div>

            <SubTitle className="edc-title" title="*WHAT IS AN ADU?" />
            <div className="edc-takeaways">
                <div className='split-box-text'>
                    <div className='htc-text'>Accessory dwelling units (aka ADUs or Granny Flats) are smaller dwellings located on the same property as a single-family home. Many municipalities across the country have restricted or banned these types of housing. However, ADUs actually bring many benefits to communities, such as additional income for homeowners, increased affordability, more equitable housing, reduced urban sprawl, and improved sustainability.</div>
                </div>
            </div>

            <SubTitle className="edc-title" title="LOCAL TO NATIONAL" />
            <div className="edc-takeaways edc-reverse">
                <div className='edc-takeaway text-only'>
                    <div className='edc-text'>The On to 2022 campaign was aimed at raising awareness of ADU legality across a variety of demographics. Locally, EDC wanted to engage Evanston residents to educate and promote campaigns to reverse decades-old anti-ADU policies. At a national level, EDC also aimed to educate citizens and policymakers on what ADUs are and how they can benefit communities. <br /> <br /> In order to address the wide targte audience of this campaign, the website needed to provide features that appealed to both local and national visitors. Early efforts heavily focused on low-fidelity paper prototyping of the landing page, specific interactive features, and the overall website architecture and navigation. </div>
                </div>
                <div className='edc-takeaway image-only'>
                    <div className='top-image' />
                    <div className='bottom-image' />
                </div>
            </div>

            <SubTitle className="edc-title" title="EDUCATION THROUGH DATA VISUALIZATION" />
            <div className='edc-viz'>
                <div className='edc-viz-text'>
                    <div className='edc-text'>With both a local and national audience in mind, one of the most impactful features I contributed to on this website was a page dedicated to increasing awareness about ADU legality through data visualizations. This included information about the current legal state of ADUs in the Chicagoland area, statistics on the success of ADUs in model communities, and an interactive map encoding the current landscape of ADU legality state-by-state. <br/> <br/> The goal of this visualization was to provide visitors with an at-a-glance overview of ADU laws relevant to their state. Since ADU laws are highly variable and are often set by local municipalities, we found multiple instances of ADU legistlation per state and then categorized the state by the consistency of ADU legality across the board. The resulting map gives users an idea of how ADU-friendly their states legistation is - as well as a starting point to conduct further research into their local policies on ADUs. </div>
                </div>
                <div className='edc-viz-image' />
            </div>

            <NextLastNav handleNewProj={this.props.handleNewProj} curr={"n/a"} last={this.props.last} next={this.props.next}/>
        </div>

        </>
    }
    
}

export default Edc