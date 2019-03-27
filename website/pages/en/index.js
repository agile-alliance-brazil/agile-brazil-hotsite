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
        <small><translate>september 11, 12 and 13</translate></small>
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
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const {baseUrl, language = ''} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Sponsors = () => (
      <div
        className="lightBackground productShowcaseSection paddingBottom"
        id="sponsorship" 
        style={{textAlign: 'center'}}>
        <h2><translate>Sponsorship</translate></h2>
        <translate>Want to be a sponsor?</translate>
        <MarkdownBlock>[patrocinio@agilebrazil.com](mailto:patrocinio@agilebrazil.com)</MarkdownBlock>
      </div>
    );

    const Details = () => (
      <Container padding={['bottom', 'top']}>
        <GridBlock
          contents={[
            {
              title: <translate>In 2019 our conference will be held in Belo Horizonte!</translate>,
              content: <translate>We invite the agile community to sow values ​​and agile principles and together reap the fruits of our culture.</translate>
            },
          ]}
          layout="oneColumn"
        />
      </Container>
    );

    const BuyTicketsButton = () => (
      <div className="linkAgileButton">
        <a href="https://inscricoes.agilebrazil.com/">
          <div className="buyTicketButton">Register now!</div>
        </a>
      </div>
    )

    const TicketCategory = () => (
      <div className="ticketTable">
        <div className="ticketCategory ticketHeader">
          <span className="ticketType"></span>
          <span className="ticketDescription"></span>
          <span className="ticketTitle">Regular</span>
          <span className="ticketTitle">Agille Aliance</span>
        </div>
    <div className="ticketCategory soldOut" title={<translate>Sold out!</translate>}>
          <span className="ticketType">Innovators</span>
          <span className="ticketDescription"><translate>100 registrations or until April 15th, whichever comes first</translate>.</span>
          <span className="ticketPrice">R$390</span>
          <span className="ticketPrice">R$351</span>
        </div>
        <div className="ticketCategory">
          <span className="ticketType">Early Adopters</span>
          <span className="ticketDescription"><translate>100 registrations or until May 15th, whichever comes first</translate>.</span>
          <span className="ticketPrice">R$470</span>
          <span className="ticketPrice">R$423</span>
        </div>
        <div className="ticketCategory">
          <span className="ticketType">Early Majority</span>
          <span className="ticketDescription"><translate>100 registrations or until June 15th, whichever comes first</translate>.</span>
          <span className="ticketPrice">R$560</span>
          <span className="ticketPrice">R$504</span>
        </div>
        <div className="ticketCategory">
          <span className="ticketType">Late Majority</span>
          <span className="ticketDescription"><translate>100 registrations or until July 15th, whichever comes first</translate>.</span>
          <span className="ticketPrice">R$660</span>
          <span className="ticketPrice">R$594</span>
        </div>
        <div className="ticketCategory">
          <span className="ticketType">Late Adopters</span>
          <span className="ticketDescription"><translate>Until August 28th</translate>.</span>
          <span className="ticketPrice">R$750</span>
          <span className="ticketPrice">R$675</span>
        </div>
        <div className="ticketCategory">
          <span className="ticketType">Laggards <translate>and commitment of payment</translate></span>
          <span className="ticketDescription"><translate>From August 29th until September 11th</translate>.</span>
          <span className="ticketPrice">R$950</span>
          <span className="ticketPrice">R$855</span>
        </div>
      </div>
    );

    const TicketSection = () => (
      <div id="register" className="ticketSection productShowcaseSection">
        <h2>
          <translate>Registrations</translate>
        </h2>
        <TicketCategory />
        <BuyTicketsButton />
      </div>
    );

    const Keynotes = () => (
      <div className="lightBackground keynotes productShowcaseSection" id="keynotes">
        <h2>
          <translate>Confirmed Keynotes</translate>
        </h2>
        <Container padding={['bottom', 'top']}>
        <GridBlock
          align="center"
          contents={[
            {
              content:<translate>
                *Paulo Caroli has more than 20 years of experience with software development,
                working at various corporations from Brazil, India, USA and other across Latino America.
                In 2000, he discovery the Extreme Programming and, since then,
                focused his experience on Agile & Lean processes and practices.
                He joined ThoughtWorks at 2006 and worked as Agile Coach, Trainer, Project and Delivery Manager.
                He has a bachelor's degree in Computing and master in Software Engineering, both at PUC-Rio.
                Caroli is passionate about innovation, entrepreneurship and digital products.
                He is software engineer, writer, speaker and an exepctional facilitator.*
              </translate>,
              image: `${siteConfig.baseUrl}img/keynotes/paulo-caroli.jpg`,
              imageAlign: 'top',
              imageAlt: 'Paulo Caroli',
              title:
                'Paulo Caroli <br/><font size="2">'+
                <translate>
                  *Principal Consultant at Thoughtworks*
                </translate>
                +'</font>',
            }
          ]}
          layout="threeColumn"
        />
      </Container>
      </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Details />
          <TicketSection />
          <Keynotes />
          <Sponsors />
        </div>
      </div>
    );
  }
}

module.exports = Index;
