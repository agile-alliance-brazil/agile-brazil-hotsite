/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

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
        <small>{siteConfig.dates}</small>
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
            <Button href="#quer-ser-um-patrocinador">Patrocínio</Button>
            <Button href="#">Inscrições</Button>
            <Button href="#">Programa</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

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

    const Patrocinadores = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Patrocínio</h2>
        <MarkdownBlock>### Quer ser um patrocinador?</MarkdownBlock>
        <MarkdownBlock>[patrocinio@agilebrazil.com](mailto:patrocinio@agilebrazil.com)</MarkdownBlock>
      </div>
    );

    const Detalhes = () => (
      <Container padding={['bottom', 'top']} background="dark">
        <GridBlock
          contents={[
            {
              imageAlign: 'left',
              image: `${siteConfig.baseUrl}img/bg-body.jpg`,
              title: 'Em 2019 nossa convenção será realizada em Belo Horizonte!',
              content: 'Convidamos a comunidade ágil para semear valores e princípios ágeis e juntos colher os frutos de nossa cultura.'
            },
          ]}
          layout="oneColumn"
        />
      </Container>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Detalhes />
          <Patrocinadores />
        </div>
      </div>
    );
  }
}

module.exports = Index;
