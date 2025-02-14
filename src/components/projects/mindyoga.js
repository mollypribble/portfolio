import React from 'react';
import Title from '../title';
import ProjectOverview from '../projectOverview';
import SubTitle from '../subtitle';
import NextLastNav from '../nextLastNav';
import process from '../../media/project-media/mindyoga/process.png';
import ww from '../../media/project-media/mindyoga/work_week.png';
import p1 from '../../media/project-media/mindyoga/Reflection_Dash.png'
import p2 from '../../media/project-media/mindyoga/Planning_Scaffold.png'
import p3 from '../../media/project-media/mindyoga/Slack_Reminders.png'

class Mindyoga extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        const sourceAlt='The three stages of reflection that MindYoga leverages for metacognitive behavioral improvement. The stages include: monitoring (where learners ask "what is my riskiest metacognitive behavior"), planning (where learners ask "in what ways can I improve these behaviors"), and practicing (where learners ask "when can i implement these improvements").'
        const wwAlt="These scaffolds integrate into key parts of the learners' work week: The Reflection Dashboard is completed prior to their weekly planning meeting with their mentors. The Planning Scaffold is completed during or shortly after the planning meeting with the learners' mentors. And the Slack reminders are sent to the users during key work sessions to remind them of their plans to change their metacognitive habits."

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
                    <div className='mindyoga-text'><p>One of the frequently-overlooked (but vitally important) learning processes is improving metacognitive skills. Often referred to as someone's “ways of working”, metacognitive skills encompass abilities such as planning, goal-setting, organization, and time management that can be improved — similarly to practical, concrete skills — through self-reflection. However, many learners struggle to apply this reflection process to their metacognition, even in structured learning environments. This was the core issue addressed by MindYoga, a socio-technical framework that utilizes guided reflection sessions, input from mentor figures, and automated reminders of improved practices to take learners through the metacognitive reflection process. <br /><br />This design research project was advised by Prof. Haoqi Zhang and Dr. Leesha Maliakal Shah (PhD) at Northwestern University. Our research was <b>published in ACM CHI 2022 Late-Breaking Work</b>.</p></div>
                    <div className='banner mindyoga-banner'><p>Read our published work <a href ="https://dl.acm.org/doi/10.1145/3491101.3519751" target="_blank" tabIndex="1" aria-label="Read the MindYoga published abstract">here &rarr;</a></p></div>
                </div>
            </div>

            <div className='mindyoga-three-stages'>
                <div>
                    <SubTitle title="WHAT IS METACOGNITIVE REFLECTION?" />
                    <div className='mindyoga-text'><p>Prior research in the field of learning science has found that reflection is an essential skill that drives improved learning. Most reflection models detail a monitoring phase - where learner identify risks, a planning phase - where learners determine how they can address risks, and a practicing phase - where learning implement improvements. Mindyoga adapts this model by providing scaffolds at key points in the process to help learners overcome obstacles in the reflection process.</p></div>
                    <img className='mindyoga-stage mindyoga-stages-image' src={process} alt={sourceAlt}/>
                </div>

                <div className='mindyoga-three-stages-text-title'>
                    <SubTitle title="OBSTACLES IN METACOGNITIVE REFLECTION" />
                    <div className='mindyoga-three-stages-text'>
                        <div className='mindyoga-stage'>
                            <h3 className='section-header'>“I never really think about my metacognitive risks”</h3>
                            <div className='akvd-text'><p>Novice learners are often prioritize improving their practical risks as opposed to their metacognitive risks. During some needfinding observations, learners were even unaware when their mentor gave them direct metacognitive feedback. After one session, the mentor reported that they “gave them feedback on believing in themselves as an expert designer”. However, the learner completely missed the comments about how their lack of confidence was impacting their work entirely. This observation was corroborated by learners from all mentor groups.</p></div>
                        </div>
                        <div className='mindyoga-stage'>
                            <h3 className='section-header'>Do “better"</h3>
                            <div className='akvd-text'><p>If learners are able to identify metacognitive risks and feedback, they then form a plan to improve on their weak points. This could be committing to using a planner to track upcoming meetings or writing out a list of goals before each work session to stay focused. But these plans are often not specific enough and can be difficult to implement. For example, one learner stated that they “should help seek better” as their plan, but had no concrete way to make their helpseeking "better".</p></div>
                        </div>
                        <div className='mindyoga-stage'>
                            <h3 className='section-header'> “I forgot"</h3>
                            <div className='akvd-text'><p>The last phase of the learning process is to practice what the learner outlined in their plan. However, even if learners are able to identify relevant metacognitive risks and develop an actionable strategy to improve, they commonly report forgetting to implement their plan in their work sessions. These new ways of working are often not front-of-mind when learners begin to work, perhaps due to an over-emphasis on practical risks or an over-reliance on poor metacognitive habits that require effort to break.</p></div>
                        </div>
                    </div>
                </div>

                {/* <div className='mindyoga-three-stages-text-title'>
                    <SubTitle title="THE MINDYOGA FRAMEWORK" />
                    <div className='mindyoga-three-stages-text'>
                        <div className='mindyoga-stage'>
                            <h3 className='section-header'>REFLECTION DASHBOARD</h3>
                            <div className='akvd-text'><p>blah</p></div>
                        </div>
                        <div className='mindyoga-stage'>
                            <h3 className='section-header'>MENTOR-SUPPORTED PLANNING SCAFFOLD</h3>
                            <div className='akvd-text'><p>blah</p></div>
                        </div>
                        <div className='mindyoga-stage'>
                            <h3 className='section-header'>IN-ACTION SLACK REMINDERS</h3>
                            <div className='akvd-text'><p>blah</p></div>
                        </div>
                    </div>
                </div> */}

                <div className='mindyoga-three-stages-text-title mindyoga-results'>
                    <SubTitle title="THE MINDYOGA FRAMEWORK" />

                    <div className='mindyoga-stage ones'>
                            <div className='akvd-text'><p>To address each of the observed obstacles, we created a low-fi prototype of the Mindyoga framework, which consisted of:
                                <br/><br/>
                                <ul>
                                    <li>A <b>reflection dashboard</b> to require learners to explicitly write down their perceived metacognitive risks</li>
                                    <li>A mentor-guided <b>planning scaffold</b> to create an specific, accurate action plan to improve metacognition</li>
                                    <li>Automated <b>Slack reminders</b> delivered during key work sessions and customized with the learner’s action plan for the week</li>
                                </ul>
                                <br/>
                                <p aria-hidden="true">
                                    {wwAlt}
                                </p>
                            </p></div>

                    </div>
                    <div className='my-group'>
                    <div className='mindyoga-three-stages-text'>
                        <div className='mindyoga-stage twos prototype-imgs'>
                            <img className='mindyoga-stage mindyoga-stages-image mindyoga-p-image' src={p1} alt='Reflection Dashboard Prototype'/>
                            <div className='akvd-text'><p aria-hidden="true"><b>Reflection Dashboard</b></p></div>
                            <img className='mindyoga-stage mindyoga-stages-image mindyoga-p-image' src={p2} alt='Planning Scaffold Prototype'/>
                            <div className='akvd-text'><p aria-hidden="true"><b>Planning Scaffold</b></p></div>
                            <img className='mindyoga-stage mindyoga-stages-image mindyoga-p-image' src={p3} alt='Slack Reminders'/>
                            <div className='akvd-text'><p aria-hidden="true"><b>Slack Reminders</b></p></div>
                        </div>
                        <div className='mindyoga-stage twos work-week-imgs'>
                            <img className='mindyoga-stage mindyoga-stages-image mindyoga-ww-image' src={ww} alt={wwAlt}/>
                        </div>
                    </div>
                    </div>
                    
                </div>

                <div className='mindyoga-three-stages-text-title mindyoga-results'>
                    <SubTitle title="STUDY RESULTS" />

                    <div className='mindyoga-stage ones'>
                            <div className='akvd-text'><p>Over two weeks, we observed a number of novice research students at Northwestern University and their interactions with the Mindyoga system. Through a combination of tracking metric, feeedback interviews, and post-study surveys, we were able to determine is Mindyoga was successful in aiding metacognitive reflection and identify areas for improvement.</p></div>
                    </div>

                    <div className='my-group'>
                    <div className='mindyoga-three-stages-text'>
                        <div className='mindyoga-stage twos callout'>
                            <h3 className='section-header'>☺︎ 100% completion rate of the associated reflection phase</h3>
                        </div>
                        <div className='mindyoga-stage twos'>
                            <div className='akvd-text'><p>Our results show that our users were able to reach all three outcomes when they engaged with our prototype at the associated reflection stages. We had two teams of learners that engaged with the entire reflection process at least once with our prototype and were able to complete all three stages of metacognitive reflection at least once. Even teams that did not engage with the prototype across all three stages still saw improvements in the stages where they did utilize the prototype. </p></div>
                        </div>
                    </div>

                    <div className='mindyoga-three-stages-text'>
                        <div className='mindyoga-stage'>
                            <div className='akvd-text section-header'><p>“I really internalized [my metacognitive risks] this week– I spend a lot of time worrying...when it’s best for me to just try to test something”</p></div>
                        </div>
                        <div className='mindyoga-stage'>
                            <div className='akvd-text section-header'><p>“[Mindyoga's planning scaffold] helped me reflect on the feedback and solidify an action item in my head.”</p></div>
                        </div>
                        <div className='mindyoga-stage'>
                            <div className='akvd-text section-header'><p>“I would have never done [my action plan] if not for the Slack [reminders]”</p></div>
                        </div>
                    </div>
                    </div>
                    <div className='my-group'>
                    <div className='mindyoga-three-stages-text'>
                        <div className='mindyoga-stage twos callout'>
                            <h3 className='section-header'>☺︎ Mentors also observed benefits from Mindyoga</h3>
                        </div>
                        <div className='mindyoga-stage twos'>
                            <div className='akvd-text'><p>Participating mentors also found benefits from engaging passively with the Mindyoga scaffolds, with one reporting Mindyoga allowed them to evaluate “what [my mentees] think and if they need to be corrected.”</p></div>
                        </div>
                    </div>
                    </div>

                    <div className='my-group'>
                    <div className='mindyoga-three-stages-text'>
                        <div className='mindyoga-stage twos callout'>
                            <h3 className='section-header'>☹ Mindyoga scaffolds were “too heavyweight"</h3>
                        </div>
                        <div className='mindyoga-stage twos'>
                            <div className='akvd-text'><p>While the Mindyoga scaffolds were successful when used, learners had trouble consistently incorporating them into their work week. Overall, learners only engaged with the scaffolds about half the time over the two-week study. This indicates future work could focus on scaling down the scaffolds, while keeping the features that provide the most benefit to supporting learners' reflection processes.</p></div>
                        </div>
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