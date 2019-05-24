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
      <div className="lightBackground productShowcaseSection paddingBottom" 
      id="sponsorship" style={{textAlign: 'center'}}> 
        <h2><translate>Sponsorship</translate></h2>
        <div className="showcase">
          <a className="link" href="http://dtidigital.com.br/">
            <img src={`${siteConfig.baseUrl}img/sponsors/dti.png`}
            alt="DTI">
            </img>
          </a>
          <a className="link" href="https://www.knowledge21.com.br/">
            <img src={`${siteConfig.baseUrl}img/sponsors/knowledge21.png`}
            alt="K21">
            </img>
          </a>
        </div>
        <div>
         <h2><translate>Want to be a sponsor?</translate></h2>
          <MarkdownBlock>[patrocinio@agilebrazil.com](mailto:patrocinio@agilebrazil.com)</MarkdownBlock>
        </div>
      </div>
    );

    const Supporters = () => (
      <div className="lightBackground productShowcaseSection paddingBottom" 
      id="supporters" style={{textAlign: 'center'}}> 
        <h2><translate>Supporters</translate></h2>
        <div className="showcase">
          <a className="link" href="http://www.caipiraagil.com/">
            <img src={`${siteConfig.baseUrl}img/supporters/caipiraagil.png`}
            alt="Caipira Ágil">
            </img>
          </a>
          <a className="link" href="https://scrumrio.com/">
            <img src={`${siteConfig.baseUrl}img/supporters/scrumrio.png`}
            alt="Scrum Gathering Rio">
            </img>
          </a>
          <a className="link" href="http://agilidade.org/">
            <img src={`${siteConfig.baseUrl}img/supporters/agilidade.png`}
            alt="Agilidade">
            </img>
          </a>
          <a className="link" href="http://www.agilefloripa.com.br/">
            <img src={`${siteConfig.baseUrl}img/supporters/agilefloripa.png`}
            alt="Agile Floripa">
            </img>
          </a>
          <a className="link" href="http://agiletrendsbr.com/">
            <img src={`${siteConfig.baseUrl}img/supporters/agiletrendsbr.png`}
            alt="Agile Trends">
            </img>
          </a>
          <a className="link" href="https://tasafo.org/">
            <img src={`${siteConfig.baseUrl}img/supporters/tasafo.png`}
            alt="Tá Safo">
            </img>
          </a>
          <a className="link" href="https://www.scrumday.com.br/">
            <img src={`${siteConfig.baseUrl}img/supporters/scrumday.png`}
            alt="Scrum Day">
            </img>
          </a>
        </div>
      </div>
    );

    const Details = () => (
      <Container padding={['bottom', 'top']}>
        <GridBlock
          contents={[
            {
              imageAlign: 'left',
              image: `${siteConfig.baseUrl}img/dayrell.jpg`,
              imageLink: "https://www.dayrell.com.br/localizacao",
              title: <translate>In 2019 our conference will be held in Belo Horizonte!</translate>,
              content:
                <translate>
                We invite the agile community to sow values ​​and agile principles and together reap the fruits of our culture.
                </translate>+
                '</br></br>'+
                'Local: Dayrell Hotel & Centro de Convenções</br>'+
                'R. Espírito Santo, 901 - Centro, Belo Horizonte'
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
          <span className="ticketTitle">Agile Alliance</span>
        </div>
    <div className="ticketCategory soldOut" title={<translate>Sold out!</translate>}>
          <span className="ticketType">Innovators</span>
          <span className="ticketDescription"><translate>100 registrations or until April 15th, whichever comes first</translate>.</span>
          <span className="ticketPrice">R$390</span>
          <span className="ticketPrice">R$351</span>
        </div>
        <div className="ticketCategory soldOut">
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
            },
            {
              content:<translate>
                *Holding a master’s degree in Strategic Design, Carla believes in the collaborative potential of
                people to turn cities into better and more sustainable places. For 6 years, she has developed
                social innovation projects based on design, working on strategies, platforms and services to
                improve urban systems and quality of life in cities. As an example, in one of her projects, she 
                traveled around 9 cities in the Brazilian semi-arid region, co-creating new futures for and with the
                local youths. Her company, Talking City, focuses on improving public services based on
                collaboration with citizens, with one of the main initiatives being the Safe City Movement - a
                safety innovation laboratory for the City of Porto Alegre. She is a member of the Ocupe &
                Abrace(Occupy and Hug) Collective (who works in the cultural and environmental occupation of
                “Praça da Nascente” city park in São Paulo) and she is a Professor in undergraduate and
                graduate programs at IED-SP and in the MBA Branding Innovation of Faculdades Rio Branco.*
              </translate>,
              image: `${siteConfig.baseUrl}img/keynotes/carla-link.jpg`,
              imageAlign: 'top',
              imageAlt: 'Carla Link',
              title:
                'Carla Link <br/><font size="2">'+
                <translate>
                  *Founder & Service Designer at Talking City*
                </translate>
                +'</font>',
            }
          ]}
          layout="threeColumn"
        />
      </Container>
      </div>
    );

    const Latam = () => (
      <div className="lightBackground productShowcaseSection paddingBottom">
        <h2>
          <translate>Official Air Carrier</translate>
        </h2>
        <Container padding={['bottom', 'top']}>
        <GridBlock
          contents={[
            {
              imageAlign: 'left',
              image: `${siteConfig.baseUrl}img/latam.jpg`,
              imageLink: "https://www.latam.com/pt_br/",
              content:
<translate>
**Obtenha descontos de até 20% na compra de passagens para a AGILE BRAZIL com a LATAM AIRLINES.**
</translate>+
'</br></br>'+
<translate>
Acesse o site www.latam.com e insira o **Código Promocional** `E0EPR`.
</translate>+
'</br></br>'+
<translate>
* Condição válida e exclusiva aos participantes do evento;
</translate>+
'</br>'+
<translate>
* Valores sujeitos à disponibilidade de assentos e regras/restrições específicas de cada tarifa;
</translate>+
'</br>'+
<translate>
* Válidos para embarque de  09/09 a 16/09/19 no trecho Brasil/Confins/Brasil;
</translate>+
'</br>'+
<translate>
* Sem descontos sobre tarifas promocionais específicas;
</translate>+
'</br>'+
<translate>
* Em casos de ida ou retorno fora do período negociado, o desconto não se aplica;
</translate>+
'</br>'+
<translate>
* Desconto não válido para tarifas de Mega Promo;
</translate>+
'</br>'+
<translate>
* Desconto não válido para menores de 12 anos;
</translate>+
'</br>'+
<translate>
* Desconto válido para rotas operadas pela LATAM.
</translate>+
'</br></br>'+
<translate>
**Deseja alugar um carro?**
</translate>+
'</br>'+
<translate>
Acesse o hotsite http://parceiros.unidas.com.br/ppu_unidas/servlet/hhome?WEB+EVENTOS,P,0 e obtenha 60% de desconto com a Unidas para a locação de veículos.
</translate>+
'</br>'+
<translate>
O desconto é aplicado sobre os valores de tarifa balcão disponíveis.
</translate>
            },
          ]}
          layout="oneColumn"
        />
        </Container>
        <div className="linkAgileButton">
          <a href="https://www.latam.com/pt_br/">
            <div className="buyFlightPassButton"><translate>Buy your flight pass now!</translate></div>
          </a>
        </div>
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
          <Supporters />
          <Latam />
        </div>
      </div>
    );
  }
}

module.exports = Index;
