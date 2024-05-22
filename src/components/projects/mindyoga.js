import React from 'react';
import Title from '../title';
import ProjectOverview from '../projectOverview';
import SubTitle from '../subtitle';
import NextLastNav from '../nextLastNav';

class Mindyoga extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <>
        <div className="project-display">
            <Title title="Mindyoga" />
            <ProjectOverview 
            skills='Design Research, Human-Computer Interaction, Rapid Prototyping' 
            dates='Sept 2021-Jun 2022' 
            affiliation='Northwestern Univ.' />

            <div className='mindyoga-summary'>
                <div className='mindyoga-text-banner-wrapper'>
                    <div className='mindyoga-text'>One of the frequently-overlooked (but vitally important) learning processes is improving on metacognitive skills. Often referred to as someone's “ways of working”, metacognitive skills encompass abilities such as planning, goal-setting, organization, and time management that can be improved through self-reflection. However, many leaners struggle with this reflection process and find it hard to (1) identify weak points in their ways of working, (2) develop an actionable plan to address these weak points, and (3) act on this plan and see improvement. This was the core issue addressed by MindYoga, a socio-technical framework that utilizes automated reminders of improved practices, input from other, more experienced learners, and guided reflection sessions to take learners through the metacognitive reflection process. <br /><br />This design research project was advised by Prof. Haoqi Zhang and Leesha Maliakal Shah (PhD) at Northwestern University. Our research was published in ACM CHI 2022 Late-Breaking Work.</div>
                    <div className='banner mindyoga-banner'>Read our published work <a href ="https://dl.acm.org/doi/10.1145/3491101.3519751" target="_blank" tabIndex="1">here &rarr;</a></div>
                </div>
                <div className='mindyoga-summary-image'>
                </div>
            </div>

            <div className='mindyoga-three-stages'>
                <div className='mindyoga-three-stages-text-title'>
                    <SubTitle title="OBSTACLES IN METACOGNITIVE REFLECTION" />
                    <div className='mindyoga-three-stages-text'>
                        <div className='mindyoga-stage'>
                            <div className='section-header'>MONITORING</div>
                            <div className='akvd-text'>MindYoga applies a reflective learning process in the context of metacognition. The first step of this process is when learners monitor their current behaviors and identify both positive behavioral improvements as well as risky behaviors. When attempting to reflect on their metacognitive skills, novice learners are often much more in-tune with their practical risks as opposed to their metacognitive risks. For example, learners might identify a risk such as “[the] findings section [of our end-of-term paper] is still weak” but might still be unaware of how their ways of working (e.g. time management, a lack of confidence, poor planning) contribute to these risks. </div>
                        </div>
                        <div className='mindyoga-stage'>
                            <div className='section-header'>PLANNING</div>
                            <div className='akvd-text'>After monitoring their ways of working, learners then create a plan they can use to improve on their weak points. This could be committing to using a planner to track upcoming meetings or writing out a list of goals before each work session to stay focused. If these plans are not specific enough, they can be difficult to implement. This is the main obstacle novice learners encounter in the planning stage. Often their plans are vague and difficult to take action on (e.g. “I should help seek better”), making it more difficult for novice learners to successfully complete the expert learning process.</div>
                        </div>
                        <div className='mindyoga-stage'>
                            <div className='section-header'>PRACTICING</div>
                            <div className='akvd-text'>The last phase of the learning process is to practice what the learner outlined in their plan. However, even if learners are able to identify relevant metacognitive risks and develop an actionable strategy to improve, they commonly report forgetting to implement their plan in their work sessions. These new ways of working are often not front-of-mind when learners begin to work, perhaps due to an over-emphasis on practical risks and goals.</div>
                        </div>
                    </div>
                </div>
                <div className='mindyoga-stage mindyoga-stages-image'/>
            </div>

            <NextLastNav handleNewProj={this.props.handleNewProj} last={this.props.last} next={this.props.next}/>
        </div>

        </>
    }
    
}

export default Mindyoga