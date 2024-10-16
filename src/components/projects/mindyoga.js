import React from 'react';
import Title from '../title';
import ProjectOverview from '../projectOverview';
import SubTitle from '../subtitle';
import NextLastNav from '../nextLastNav';
import process from '../../media/project-media/mindyoga/process.png';

class Mindyoga extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <>
        <div className="project-display"> <div className="project-display-content">
            <Title title="Mindyoga" />
            <ProjectOverview 
            what='Socio-technical framework to improve metacognition'
            skills='Design Research, Human-Computer Interaction, Rapid Prototyping' 
            dates='Sept 2021-Jun 2022' 
            affiliation='Northwestern Univ.' />

            <div className='mindyoga-summary'>
                <div className='mindyoga-text-banner-wrapper'>
                    <div className='mindyoga-text'><p>One of the frequently-overlooked (but vitally important) learning processes is improving metacognitive skills. Often referred to as someone's “ways of working”, metacognitive skills encompass abilities such as planning, goal-setting, organization, and time management that can be improved — similarly to practical, concrete skills — through self-reflection. However, many learners struggle with this reflection process and find it hard to (1) identify weak points in their metacognition, (2) develop an actionable plan to address these weak points, and (3) act on this plan and see improvement. This was the core issue addressed by MindYoga, a socio-technical framework that utilizes guided reflection sessions, input from other, more experienced learners, and automated reminders of improved practices to take learners through the metacognitive reflection process. <br /><br />This design research project was advised by Prof. Haoqi Zhang and Dr. Leesha Maliakal Shah (PhD) at Northwestern University. Our research was published in ACM CHI 2022 Late-Breaking Work.</p></div>
                    <div className='banner mindyoga-banner'><p>Read our published work <a href ="https://dl.acm.org/doi/10.1145/3491101.3519751" target="_blank" tabIndex="1" aria-label="Read the MindYoga published abstract">here &rarr;</a></p></div>
                </div>
            </div>

            <div className='mindyoga-three-stages'>
                <div>
                    <SubTitle title="WHAT IS METACOGNITIVE REFLECTION?" />
                    <div className='mindyoga-text'><p>Prior research in the field of learning science has found that reflection is an essential skill that drives improved learning. Most reflection models detail a monitoring phase - where learner identify risks, a planning phase - where learners determine how they can address risks, and a practicing phase - where learning implement improvements. Mindyoga adapts this model by providing scaffolds at key points in the process to help learners overcome obstacles in the reflection process.</p></div>
                    <p id='process-image-label' className='visually-hidden-text'>The three stages of reflection that MindYoga leverages for metacognitive behavioral improvement. The stages include: monitoring (where learners ask "what is my riskiest metacognitive behavior"), planning (where learners ask "in what ways can I improve these behaviors"), and practicing (where learners ask "when can i implement these improvements").'</p>
                    <img className='mindyoga-stage mindyoga-stages-image' src={process} aria-labelledby='process-image-label'/>
                </div>

                <div className='mindyoga-three-stages-text-title'>
                    <SubTitle title="OBSTACLES IN METACOGNITIVE REFLECTION" />
                    <div className='mindyoga-three-stages-text'>
                        <div className='mindyoga-stage'>
                            <h3 className='section-header'>PRACTICAL-FIRST MENTALITY</h3>
                            <div className='akvd-text'><p>Novice learners are often prioritize improving their practical risks as opposed to their metacognitive risks. During some needfinding observations, learners were even unaware when their mentor gave them direct metacognitive feedback. After one session, the mentor reported that they “gave them feedback on believing in themselves as an expert designer”. However, the learners only reported receiving “feedback on ways to collect data”, missing the comments about how their lack of confidence was impacting their work entirely. This observation was corroborated by another learner, stating “I never really think about metacognitive feedback, only practical or project-based feedback”.</p></div>
                        </div>
                        <div className='mindyoga-stage'>
                            <h3 className='section-header'>VAGUE PLANNING</h3>
                            <div className='akvd-text'><p>If learners are able to identify metacognitive risks and feedback, they then form a plan to improve on their weak points. This could be committing to using a planner to track upcoming meetings or writing out a list of goals before each work session to stay focused. If these plans are not specific enough, they can be difficult to implement. This is the main obstacle novice learners encounter in the planning stage. Often their plans are vague and difficult to take action on, making it more difficult for novice learners to successfully complete the expert learning process. One learner stated that they “should help seek better” as their plan, but had no concrete way to make their helpseeking "better".</p></div>
                        </div>
                        <div className='mindyoga-stage'>
                            <h3 className='section-header'>FORGETFUL PRACTICING</h3>
                            <div className='akvd-text'><p>The last phase of the learning process is to practice what the learner outlined in their plan. However, even if learners are able to identify relevant metacognitive risks and develop an actionable strategy to improve, they commonly report forgetting to implement their plan in their work sessions. These new ways of working are often not front-of-mind when learners begin to work, perhaps due to an over-emphasis on practical risks or an over-reliance on poor metacognitive habits that require effort to break.</p></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <NextLastNav handleNewProj={this.props.handleNewProj} curr={1} last={this.props.last} next={this.props.next}/>
        </div>

        </>
    }
    
}

export default Mindyoga