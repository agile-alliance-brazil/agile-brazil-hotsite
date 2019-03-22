const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const translate = require('../../server/translate.js').translate;

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

// TODO: Create a core component for this template
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

class Program extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const {baseUrl, language = ''} = siteConfig;

    const Introduction = () => (
      <section>
        <h1 class="title">Como funciona o Programa <a href="http://agilebrazil.com" target="_blank">#AgileBR</a></h1>

        <p>Fazer o Programa da Agile Brazil é uma jornada que se inicia no dia seguinte à Agile Brazil anterior e termina cerca de um mês após o evento acontecer. É um longo caminho e muitos voluntários da comunidade estão envolvidos nele.</p>
      </section>
    );

    const WhoWeAre = () => (
      <section id="whoAreWe">
        <h2>Quem somos e o que fazemos?</h2>
      </section>
    );

    const TimeLineEvents = () => (
      <h2>Antes de abrir submissões...</h2>
    );

    const Conclusion = () => (
      <h1 class="title">É um trabalho e tanto!!!</h1>
    );

    const Content = () => (
      <Container padding={['bottom', 'top']} background="dark">
        <Introduction />
        <WhoWeAre />
        <TimeLineEvents />
        <Conclusion />
      </Container>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Content />
        </div>
      </div>
    );
  }
}

module.exports = Program;
