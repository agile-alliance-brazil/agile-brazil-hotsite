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

class Program extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const {baseUrl, language = ''} = siteConfig;

    const Introduction = () => (
      <section className="program--introduction">
        <h1 class="program--introduction-title">Como funciona o Programa <a href="http://agilebrazil.com" target="_blank">#AgileBR</a></h1>

        <p class="program--introduction-description">Fazer o Programa da Agile Brazil é uma jornada que se inicia no dia seguinte à Agile Brazil anterior e termina cerca de um mês após o evento acontecer. É um longo caminho e muitos voluntários da comunidade estão envolvidos nele.</p>
      </section>
    );

    const WhoWeAre = () => (
      <section className="program--whoweare">
        <h2>Quem somos e o que fazemos?</h2>
        <ul className="program--whoweare-personas">
          <li class="program--whoweare-personas-persona chairs">
            <h3>Chairs de Programa</h3>
            <p>Responsáveis por coordenar e facilitar atividades e interagir com outros organizadores.</p>
          </li>
          <li class="trackLeads">
            <h3>Track Leads</h3>
            <p>Em pares, consideram as revisões das propostas e decidem o que será aprovado.</p>
          </li>
          <li class="committee">
            <h3>Membros do comitê</h3>
            <p>Definem o formato do Programa: trilhas, tipos de sessão, convidados, keynotes e regras.</p>
          </li>
          <li class="reviewers">
            <h3>Revisores de propostas</h3>
            <p>Lêem propostas de sessão submetidas e dão feedbacks pra autores e coordenadores de trilhas.</p>
          </li>
        </ul>
      </section>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer program--container">
          <Introduction />
          <WhoWeAre />
        </div>
      </div>
    );
  }
}

module.exports = Program;