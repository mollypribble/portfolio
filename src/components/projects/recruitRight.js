import React from 'react';
import Title from '../title';
import ProjectOverview from '../projectOverview';
import SubTitle from '../subtitle';
import NextLastNav from '../nextLastNav';

class RecruitRight extends React.Component {

    constructor(props) {
        super(props);
      }

    render () {

        return <>
        <div className="project-display">
            <Title title="Recruit Right" />
            <ProjectOverview 
            skills='Wireframing, User Personas, Web Design' 
            dates='Jun 2022-Jul 2023' 
            affiliation='Freelance' />

            <div className='rr-summary'>
                <div className='rr-text'><p>RecruitRight is a web application designed to make the college soccer recruitment process smoother for coaches, players, and teams. As the primary UX designer, I focused identifying core features and designing a set of conceptual mockups to guide development, acquire further investors, and set RecruitRight apart from alternative platforms.</p></div>
                <div className='rr-summary-image'>
                    {/* image here */}
                </div>
            </div>

                <SubTitle title="OUR USERS" />

            <div className="rr-takeaways">
                <div className="rr-takeaway-image-wrapper">
                    <div className='rr-takeaway'>
                        <h3 className='section-header'>COACHES</h3>
                        <div className='rr-text'><p>RecruitRight’s first user group are head/assistant collegiate soccer coaches looking to fill their rosters for upcoming seasons. Initial efforts focused on small- to mid-sized programs, with an eye to getting larger programs onboard in the future. The collegiate coaches need to be able to find the right players for their team within budget, time, and travel constraints.</p></div>
                    </div>
                </div>
                <div className="rr-takeaway-image-wrapper">
                    <div className='rr-takeaway'>
                        <h3 className='section-header'>PLAYERS</h3>
                        <div className='rr-text'><p>Players on RecruitRight are looking to be recruited by coaches to play at the collegiate level. These are mostly high school-aged athletes who need to be noticed by coaches and develop relationships with programs they are interested in.</p></div>
                    </div>
                </div>
                <div className="rr-takeaway-image-wrapper">
                    <div className='rr-takeaway'>
                        <h3 className='section-header'>TEAM MANAGERS</h3>
                        <div className='rr-text'><p>The last group on RecruitRight are team managers. Instead of being affiliated with a collegiate program, these users are responsible for organizing elite-level club teams that are developing young players for success in college or at the professional level.</p></div>
                    </div>
                </div>
            </div>

            <SubTitle title="FEATURE HIGHLIGHTS" />

            <div className="rr-features">
                <div className="rr-feature-text-wrapper">
                    <div className='rr-takeaway'>
                        <h3 className='section-header'>TOO MUCH ACCOUNT MAINTENANCE</h3>
                        <div className='rr-text'><p>Many existing applications require the players themselves to edit highlight reels, upload videos, and keep their statistic up to date. This can easily become time consuming responsibility for people who are often in school full-time and have busy athletic schedules.</p></div>
                    </div>
                </div>
                <div className="rr-feature-text-wrapper last">
                    <div className='rr-takeaway'>
                        <h3 className='section-header'>PLAYER TAGGING AS A TAPE CATALOG</h3>
                        <div className='rr-text'><p>Instead of burdening players with keeping their highlights up-to-date, we allow team managers to upload tapes of their entire team and tag players from their roster. These videos are automatically linked to the player accounts showing their most recent performances to prospective collegiate programs.</p></div>
                    </div>
                </div>
            </div>

            <div className='rr-features-image-wrapper'>
                <div className='rr-features-images one'/>
            </div>

            <div className="rr-features">
                <div className="rr-feature-text-wrapper">
                    <div className='rr-takeaway'>
                        <h3 className='section-header'>MESSAGE OVERLOAD</h3>
                        <div className='rr-text'><p>Coaches — especially those from highly-competitive or sought-after programs — often receive too many cold-messages from prospective players that it becomes impossible to manage.</p></div>
                    </div>
                </div>
                <div className="rr-feature-text-wrapper last">
                    <div className='rr-takeaway'>
                        <h3 className='section-header'>"WE'LL CONTACT YOU"</h3>
                        <div className='rr-text'><p>RecruitRight gives coaches an account-level setting that prevents players from cold messaging coaches. This allows coaches more control over the player conversations they engage in and keeps their inbox clean and manageable.</p></div>
                    </div>
                </div>
            </div>
            
            <div className='rr-features-image-wrapper'>
                <div className='rr-features-images two'/>
            </div>

            <div className="rr-features">
                <div className="rr-feature-text-wrapper">
                    <div className='rr-takeaway'>
                        <h3 className='section-header'>PROHIBITIVELY EXPENSIVE</h3>
                        <div className='rr-text'><p>Paying for accounts on recruiting platforms often falls to individual players. This can become burdensome, especially for talented, lower-income players, for those already paying fees for soccer equipment, competition fees, and travel for games and tournaments.</p></div>
                    </div>
                </div>
                <div className="rr-feature-text-wrapper last">
                    <div className='rr-takeaway'>
                        <h3 className='section-header'>PAY BY TEAM</h3>
                        <div className='rr-text'><p>Instead of following the standard payment model, RecruitRight shifts the burden of payment from the individual player to their club team. Costs can be absorbed by the club or rolled into the fees players pay to play already, and clubs can use a single platform to market their developing players across age groups and levels.</p></div>
                    </div>
                </div>
            </div>

            <div className='rr-features-image-wrapper'>
                <div className='rr-features-images three'/>
            </div>

            <div className="rr-features">
                <div className="rr-feature-text-wrapper">
                    <div className='rr-takeaway'>
                        <h3 className='section-header'>POOR SEARCH CRITERIA</h3>
                        <div className='rr-text'><p>Most of the time, coaches cannot simply find the players with the highest stats, fastest mile times, or best ball-control. Sometimes the reality of travel constraints, graduating class, and tight budgets prevent coaches from pursuing potential recruits who are out of area or not the right age.</p></div>
                    </div>
                </div>
                <div className="rr-feature-text-wrapper last">
                    <div className='rr-takeaway'>
                        <h3 className='section-header'>FIND THE *RIGHT* RECRUITS</h3>
                        <div className='rr-text'><p>When exploring recent highlights, coaches need a robust set of filters to find the right players to recruit for their team. Beyond the standard filters such as gender and position, things like graduating class and region were also important to include to help coaches maintain a budget, plan recruiting trips, and follow the recruiting rules of their conference.</p></div>
                    </div>
                </div>
            </div>

            <div className='rr-features-image-wrapper'>
                <div className='rr-features-images four'/>
            </div>

            <NextLastNav handleNewProj={this.props.handleNewProj} curr={3} last={this.props.last} next={this.props.next}/>
        </div>
        </>
    }
    
}

export default RecruitRight