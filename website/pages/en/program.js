const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const translate = require('../../server/translate.js').translate;

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.city}, <b>{siteConfig.year}</b></small>
        <small><translate>september 11</translate></small>
      </h2>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/logo-ab.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#register"><translate>Register now!</translate></Button>
            <Button href="https://submissoes.agilebrazil.com/"><translate>Submissions opened!</translate></Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Program extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const {language = ''} = siteConfig;

    const Introduction = () => (
      <section className="program--introduction">
        <h1 className="program--introduction-title"><translate>How works the program</translate> <a href="http://agilebrazil.com" target="_blank">#AgileBR</a></h1>

        <p className="program--description"><translate>Making the Agile Brazil Program is a journey that starts the day after the previous Agile Brazil and ends about a month after the event happens. It's a long road and many community volunteers are involved in it.</translate></p>
      </section>
    );

    const WhoWeAre = () => (
      <section className="program--whoweare lightBackground">
        <h2><translate>Who are we and what do we do?</translate></h2>
        <ul className="program--whoweare-personas">
          <li className="program--whoweare-personas-persona chairs">
            <h3><translate>Program's chairs</translate></h3>
            <p><translate>Responsible for coordinating and facilitating activities and interacting with other organizers.</translate></p>
          </li>
          <li className="trackLeads">
            <h3>Track Leads</h3>
            <p><translate>In pairs, they consider the revisions of the proposals and decide what will be approved.</translate></p>
          </li>
          <li className="committee">
            <h3><translate>Committee members</translate></h3>
            <p><translate>They define the Program format: tracks, session types, guests, keynotes and rules.</translate></p>
          </li>
          <li className="reviewers">
            <h3><translate>Proposals'Reviewers</translate></h3>
            <p><translate>They read submitted session proposals and give feedback to authors and trail coordinators.</translate></p>
          </li>
        </ul>
      </section>
    );

    const TimeLineEvents = () => (
      <section className="darkBackground">
        <section className="program--timeline-events">
        <h2><translate>Before opening submissions</translate>...</h2>
        <ul>
          <li className="chairs">
            <h3><translate>Committee invitation</translate></h3>
            <div>
              <p><translate>People who made up the Program committee the previous year, reviewers who stood out and participants who showed a lot of interest in assisting in the Program of the next conference are invited to join the Program committee.</translate></p>
            </div>
          </li>
          <li className="committee">
            <h3><translate>Survey of keynote candidates</translate></h3>
            <div>
              <p><translate>Every year, we raise names of people who could be keynote speakers in the current year, considering the expected audience and the presence of the stage.</translate></p>
              <p><translate>There are 2 international keynote speakers, 1 national and 1 keynote speaker out-of-the-box - the latter to talk about non-agility related topics.</translate></p>
            </div>
          </li>
          <li className="chairs">
            <h3><translate>Invitation to keynote speakers</translate></h3>
            <div>
              <p><translate>Starting with the internationals, who need more advance given the long journey and busy schedules, and then departing for national and out-of-the-box keynote.</translate></p>
            </div>
          </li>
          <li className="committee">
            <h3><translate>Setting the tracks</translate></h3>
            <div>
              <p><translate>These are the great areas of knowledge that we hope to have in the Agile Brazil program. Get to know the</translate> <a href="https://submissoes.agilebrazil.com/2019/tracks" target="_blank"><translate>tracks of 2019</translate></a>!</p>
              <p><translate>Number and track titles are rediscutidos every year because they also serve as a way to encourage proposals of themes that the members of the committee perceive as interesting for the public.</translate></p>
            </div>
          </li>
          <li className="committee">
            <h3><translate>Setting Session Types</translate></h3>
            <div>
              <p><translate>These are the session formats we expect to see at the conference.</translate></p>
              <p><translate>Many of them are</translate> <a href="https://submissoes.agilebrazil.com/2019/session_types" target="_blank"><translate>used for submissions</translate></a>: <translate>lecture, experience report, hand in hand are examples. Others, such as keynote and open spaces, are not submitted but will be part of the conference!</translate></p>
            </div>
          </li>
          <li className="committee">
            <h3><translate>Defining audience profiles</translate></h3>
            <div>
              <p><translate>To facilitate the choice of sessions by the conference audience, authors need to rank the expected audience in levels, in addition to describing the prerequisites.</translate></p>
              <p><translate>In 2019 we are trying something new: instead of beginner, experienced and experienced,</translate> <a href="https://submissoes.agilebrazil.com/2019/audience_levels" target="_blank"><translate>we have 4 levels based on the Dreyfus scale</translate></a>.</p>
            </div>
          </li>
          <li className="committee">
            <h3><translate>Definition of rules of submission</translate></h3>
            <div>
              <p><translate>Whether for financial feasibility, or to make room for new names to emerge, we also review them every year.</translate></p>
              <p><translate>For example, we do not allow one speaker to speak in more than two sessions, nor do we allow the same set of authors to repeat themselves in two sessions. Know all the</translate> <a href="https://submissoes.agilebrazil.com/2019/guidelines" target="_blank"><translate>rules of 2019</translate></a>!</p>
            </div>
          </li>
          <li className="committee">
            <h3><translate>Setting the calendar</translate></h3>
            <div>
              <p><translate>The definition of the dates for each activity, from the opening of submission to the publication of the grid on the site.</translate></p>
              <p><translate>The dates shown in the submission system are just a few of them! There are other intermediate deadlines to ensure that everything is well underway!</translate></p>
            </div>
          </li>
          <li className="chairs">
            <h3><translate>Registration of track leads</translate></h3>
            <div>
              <p><translate>With the trails defined, we asked in the committee list who would like to lead some trail and the pairs are formed. Track leads:</translate></p>
              <p>- <translate>do not evaluate proposals of his track, so he has a vote of minerva if necessary</translate>;</p>
              <p>- <translate>can not submit to your track, to avoid conflict of interest</translate>;</p>
            </div>
          </li>
          <li className="chairs">
            <h3><translate>Adequacy of the submissions system</translate></h3>
            <div>
              <p><translate>Whether asking the development team to do it, or rolling up sleeves and coding, we ensure the system is upgraded for the current year.</translate></p>
            </div>
          </li>
          <li className="trackLeads">
            <h3><translate>Invitation to reviewers</translate></h3>
            <div>
              <p><translate>Reviewing the list of reviewers from the previous year and listing new potential reviewers from the community, we set up the mailing list and invite those people.</translate></p>
            </div>
          </li>
        </ul>
        <h2><translate>Submissions open!</translate></h2>
        <ul>
          <li className="trackLeads">
            <h3><translate>Disclosure of submissions</translate></h3>
            <div>
              <p><translate>This is an activity that begins now and does not stop until the end of the term, intensifying as the deadline approaches</translate></p>
            </div>
          </li>
          <li className="reviewers">
            <h3><translate>Comments on submissions</translate></h3>
            <div>
              <p><translate>To help those who submit before and those who seek to improve their proposals, reviewers begin their work earlier, commenting on questions and tips on most submissions.</translate></p>
            </div>
          </li>
          <li className="trackLeads">
            <h3><translate>Track submissions tracking</translate></h3>
            <div>
              <p><translate>Although tracks are designed to move a certain subject, there is a risk of having few submissions in any of them. Track leads should be aware of this and make more specific disclosures, in this case!</translate></p>
            </div>
          </li>
          <li className="chairs">
            <h3><translate>Broadcast promotion for submissions</translate></h3>
            <div>
              <p><translate>All organizers and various members of the community in general are encouraged to assist in the final effort to disseminate the submission deadline.</translate></p>
            </div>
          </li>
        </ul>
        <h2><translate>Then the submissions close.</translate></h2>
        <ul>
          <li className="reviewers">
            <h3><translate>Proposed revisions</translate></h3>
            <div>
              <p><translate>Each proposal then receives three independent reviews from the reviewers, who consider each field submitted and the authors' profile.</translate></p>
            </div>
          </li>
          <li className="trackLeads">
            <h3><translate>Session Selection</translate></h3>
            <div>
              <p><translate>With all the reviews made, track leads work with your peers to define which sessions they want to approve, leave as a reservation or disapprove.</translate></p>
            </div>
          </li>
          <li className="trackLeads">
            <h3><translate>Consolidation between tracks</translate></h3>
            <div>
              <p><translate>All track leads are online to check restrictions and repeat subjects, then choose which sessions will be chosen, which ones will be booked and which ones will not enter.</translate></p>
            </div>
          </li>
          <li className="trackLeads">
            <h3><translate>Feedbacks writing</translate></h3>
            <div>
              <p><translate>When approval decisions are made, track leads still add a brief own feedback on each proposal, and when they are all ready, confirmation emails are sent.</translate></p>
            </div>
          </li>
          <li className="chairs">
            <h3><translate>Authors' Confirmation</translate></h3>
            <div>
              <p><translate>Chairs keep an eye on the confirmation of the authors of the accepted sessions and notify the track leads when there is any drop-off, so they can appoint the substitute.</translate></p>
            </div>
          </li>
          <li className="chairs">
            <h3><translate>Assembly and publication of the grid</translate></h3>
            <div>
              <p><translate>The program chairs then collaborate to set up a grid for the event that has the most popular sessions in larger rooms and minimizing subject conflicts by time.</translate></p>
            </div>
          </li>
        </ul>
        <h2><translate>After the conference...</translate></h2>
        <ul>
          <li className="chairs">
            <h3><translate>Consolidation of session feedbacks</translate></h3>
            <div>
              <p><translate>After passing the conference, the volunteers deliver the feedbacks per session to the chairs, who organize such data and take statistics about them.</translate></p>
              <p><translate>In addition, to authors who show interest, we have sent the received green, yellow and red numbers.</translate></p>
            </div>
          </li>
          <li className="chairs">
            <h3><translate>Charge and check recorded videos</translate></h3>
            <div>
              <p><translate>The process of getting the videos recorded during the conference is long: you have to charge for the recordings, edit the uploaded videos, add a sticker and upload to</translate> <a href="https://vimeo.com/agilebrazil" target="_blank"><translate>our Vimeo</translate></a> <translate>or in</translate> <a href="http://www.agilealliance.org/pt/videos-do-agilebrazil/" target="_blank"><translate>public library of the Agile Alliance</translate></a></p>
            </div>
          </li>
          <li className="committee">
            <h3><translate>Retrospective and suggestions</translate></h3>
            <div>
              <p><translate>The entire committee then has the voice to point out what needs improvement and to suggest suggestions that will be evaluated by the next chairs and program committee at the beginning of the next Agile Brazil organization!</translate></p>
            </div>
          </li>
        </ul>
      </section>
      </section>
    );

    const Conclusion = () => (
      <section className="program--conclusion">
        <h1 className="title"><translate>It's a big job!!!</translate></h1>
        <p className="program--description"><translate>There are many steps and many fallbacks for problem cases! But we do with affection and ethics, completely voluntarily and seeking to be the most transparent process of choices of sessions we know!</translate></p>
      </section>
    );

    const TimeLineEventsListener = () => (
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const timelineEvents = document.querySelector('.program--timeline-events');
        
            timelineEvents.addEventListener('click', ({ target }) => {
              if (target.tagName === 'H3') {
                target.nextElementSibling.classList.toggle('isActive');
              }
            });
          `,
        }}
      />
    );

    return (
      <main>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer program--container">
          <Introduction />
          <WhoWeAre />
          <TimeLineEvents />
          <TimeLineEventsListener />
          <Conclusion />
        </div>
      </main>
    );
  }
}

module.exports = Program;
