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
    const {language = ''} = siteConfig;

    const Introduction = () => (
      <section className="program--introduction">
        <h1 class="program--introduction-title"><translate>How works the program</translate> <a href="http://agilebrazil.com" target="_blank">#AgileBR</a></h1>

        <p class="program--description"><translate>Making the Agile Brazil Program is a journey that starts the day after the previous Agile Brazil and ends about a month after the event happens. It's a long road and many community volunteers are involved in it.</translate></p>
      </section>
    );

    const WhoWeAre = () => (
      <section className="program--whoweare">
        <h2><translate>Who are we and what do we do?</translate></h2>
        <ul className="program--whoweare-personas">
          <li class="program--whoweare-personas-persona chairs">
            <h3><translate>Program's chairs</translate></h3>
            <p><translate>Responsible for coordinating and facilitating activities and interacting with other organizers.</translate></p>
          </li>
          <li class="trackLeads">
            <h3>Track Leads</h3>
            <p><translate>In pairs, they consider the revisions of the proposals and decide what will be approved.</translate></p>
          </li>
          <li class="committee">
            <h3><translate>Committee members</translate></h3>
            <p><translate>They define the Program format: tracks, session types, guests, keynotes and rules.</translate></p>
          </li>
          <li class="reviewers">
            <h3><translate>Proposals'Reviewers</translate></h3>
            <p><translate>They read submitted session proposals and give feedback to authors and trail coordinators.</translate></p>
          </li>
        </ul>
      </section>
    );

    const TimeLineEvents = () => (
      <section className="program--timeline-events">
        <h2><translate>Before opening submissions</translate>...</h2>
        <ul>
          <li class="chairs">
            <h3><translate>Committee invitation</translate></h3>
            <div>
              <p><translate>People who made up the Program committee the previous year, reviewers who stood out and participants who showed a lot of interest in assisting in the Program of the next conference are invited to join the Program committee.</translate></p>
            </div>
          </li>
          <li class="committee">
            <h3><translate>Survey of keynote candidates</translate></h3>
            <div>
              <p><translate>Every year, we raise names of people who could be keynote speakers in the current year, considering the expected audience and the presence of the stage.</translate></p>
              <p><translate>There are 2 international keynote speakers, 1 national and 1 keynote speaker out-of-the-box - the latter to talk about non-agility related topics.</translate></p>
            </div>
          </li>
          <li class="chairs">
            <h3><translate>Invitation to keynote speakers</translate></h3>
            <div>
              <p><translate>Starting with the internationals, who need more advance given the long journey and busy schedules, and then departing for national and out-of-the-box keynote.</translate></p>
            </div>
          </li>
          <li class="committee">
            <h3><translate>Setting the tracks</translate></h3>
            <div>
              <p><translate>These are the great areas of knowledge that we hope to have in the Agile Brazil program. Get to know the</translate> <a href="https://submissoes.agilebrazil.com/2019/tracks" target="_blank"><translate>tracks of 2019</translate></a>!</p>
              <p><translate>Number and track titles are rediscutidos every year because they also serve as a way to encourage proposals of themes that the members of the committee perceive as interesting for the public.</translate></p>
            </div>
          </li>
          <li class="committee">
            <h3><translate>Setting Session Types</translate></h3>
            <div>
              <p><translate>These are the session formats we expect to see at the conference.</translate></p>
              <p><translate>Many of them are</translate> <a href="https://submissoes.agilebrazil.com/2019/session_types" target="_blank"><translate>used for submissions</translate></a>: <translate>lecture, experience report, hand in hand are examples. Others, such as keynote and open spaces, are not submitted but will be part of the conference!</translate></p>
            </div>
          </li>
          <li class="committee">
            <h3><translate>Defining audience profiles</translate></h3>
            <div>
              <p><translate>To facilitate the choice of sessions by the conference audience, authors need to rank the expected audience in levels, in addition to describing the prerequisites.</translate></p>
              <p><translate>In 2019 we are trying something new: instead of beginner, experienced and experienced,</translate> <a href="https://submissoes.agilebrazil.com/2019/audience_levels" target="_blank"><translate>we have 4 levels based on the Dreyfus scale</translate></a>.</p>
            </div>
          </li>
          <li class="committee">
            <h3>Definição de regras de submissão</h3>
            <div>
              <p>Seja por questões de viabilidade financeira, ou para dar espaço para novos nomes surgirem, também as revisamos todo ano.</p>

              <p>Por exemplo, não permitimos que um mesmo palestrante fale em mais do que duas sessões, nem que um mesmo conjunto de autores se repita em duas sessões. Conheça todas as <a href="https://submissoes.agilebrazil.com/2015/guidelines" target="_blank">regras de 2015</a>!</p>
            </div>
          </li>
          <li class="committee">
            <h3>Definição do calendário</h3>
            <div>
              <p>A definição das datas para cada atividade, desde a abertura de submissão até a publicação da grade no site.</p>

              <p>As datas mostradas no sistema de submissão são apenas algumas delas! Há outros prazos intermediários para garantir que tudo está bem encaminhado!</p>
            </div>
          </li>
          <li class="chairs">
            <h3>Inscrições de track leads</h3>
            <div>
              <p>Com as trilhas definidas, perguntamos na lista do comitê quem gostaria de liderar alguma trilha e os pares são formados. Track 	leads:</p>
              <p>- não avaliam propostas da sua trilha, assim ele tem voto de minerva se necessário;</p>
              <p>- não pode submeter para sua trilha, para evitar conflito de interesse;</p>
            </div>
          </li>
          <li class="chairs">
            <h3>Adequação do sistema de submissões</h3>
            <div class="">
              <p>Seja pedindo para o time de desenvolvimento fazer, ou arregaçando as mangas e codando, garantimos que o sistema seja atualizado para o ano corrente.</p>
            </div>
          </li>
          <li class="trackLeads">
            <h3>Convite aos revisores</h3>
            <div>
              <p>Revisando a lista de revisores do ano anterior e elencando novos potenciais revisores da comunidade, montamos a lista de discussão e convidamos essas pessoas.</p>
            </div>
          </li>
        </ul>
        <h2>Submissões abrem!</h2>
        <ul>
          <li class="trackLeads">
            <h3>Divulgação das submissões</h3>
            <div>
              <p>Essa é uma atividade que começa agora e não pára até o final do prazo, se intensificando conforme a data limite se aproxima</p>
            </div>
          </li>
          <li class="reviewers">
            <h3>Comentários nas submissões</h3>
            <div>
              <p>Para ajudar os que submetem antes e os que buscam melhorar suas propostas, os revisores começam seus trabalhos mais cedo, comentando com dúvidas e dicas na maior parte das submissões.</p>
            </div>
          </li>
          <li class="trackLeads">
            <h3>Acompanhamento de submissões por trilha</h3>
            <div>
              <p>Embora trilhas sejam projetadas para movimentar um certo assunto, corre-se o risco de termos poucas submissões em alguma delas. Os track leads devem ficar atentos a isso e fazer divulgações mais específicas, nesse caso!</p>
            </div>
          </li>
          <li class="chairs">
            <h3>Reforço de divulgação para submissões</h3>
            <div>
              <p>Todos os organizadores e diversos membros da comunidade em geral são acionados para ajudarem no esforço final de divulgação do prazo de submissões.</p>
            </div>
          </li>
        </ul>
        <h2>Aí as submissões fecham.</h2>
        <ul>
          <li class="reviewers">
            <h3>Revisões das propostas</h3>
            <div>
              <p>Cada proposta, então, recebe três revisões independentes dos revisores, que consideram cada campo submetido e o perfil dos autores.</p>
            </div>
          </li>
          <li class="trackLeads">
            <h3>Seleção das sessões</h3>
            <div>
              <p>Com todas as revisões feitas, track leads trabalham com seus pares para definir quais sessões querem aprovar, deixar como reserva ou reprovar.</p>
            </div>
          </li>
          <li class="trackLeads">
            <h3>Consolidação entre trilhas</h3>
            <div>
              <p>Todos os track leads se encontram online para verificar restrições e assuntos repetidos, então escolher quais sessões serão escolhidas, quais ficarão como reserva e quais não entrarão.</p>
            </div>
          </li>
          <li class="trackLeads">
            <h3>Escrita dos feedbacks</h3>
            <div>
              <p>Quando decisões de aprovação estão tomadas, os track leads ainda adicionam um breve feedback próprio em cada proposta e, quando estão todos prontos, os e-mails de confirmação são enviados.</p>
            </div>
          </li>
          <li class="chairs">
            <h3>Confirmação dos autores</h3>
            <div>
              <p>Chairs ficam de olho na confirmação dos autores das sessões aceitas e avisam os track leads quando há alguma desistência, para que eles elenquem o substituto.</p>
            </div>
          </li>
          <li class="chairs">
            <h3>Montagem e publicação da grade</h3>
            <div>
              <p>Os chairs de programa, então, colaboram para montar uma grade para o evento que tenha as sessões mais populares em salas maiores e minimizando conflitos de assunto por horário.</p>
            </div>
          </li>
        </ul>
        <h2>Depois da conferência...</h2>
        <ul>
          <li class="chairs">
            <h3>Consolidação dos feedbacks de sessão</h3>
            <div>
              <p>Depois de passar a conferência, os voluntários entregam os feedbacks por sessão para os chairs, que organizam tais dados e tiram estatísticas sobre eles.</p>

              <p>Além disso, aos autores que demonstrarem interesse, enviamos os números de verdes, amarelos e vermelhos recebidos.</p>
            </div>
          </li>
          <li class="chairs">
            <h3>Cobrar e conferir vídeos gravados</h3>
            <div>
              <p>O processo de conseguir os videos gravados durante a conferência é longo: é preciso cobrar pelas gravações, editar os vídeos enviados, adicionar vinheta e subir para <a href="https://vimeo.com/agilebrazil" target="_blank">nosso Vimeo</a> ou na <a href="http://www.agilealliance.org/pt/videos-do-agilebrazil/" target="_blank">biblioteca pública da Agile Alliance</a></p>
            </div>
          </li>
          <li class="committee">
            <h3>Retrospectiva e sugestões</h3>
            <div>
              <p>O comitê todo, então, tem a voz para apontar o que precisa melhorar e propor sugestões, que serão avaliadas pelos próximos chairs e comitê de programa, no início da organização da Agile Brazil seguinte!</p>
            </div>
          </li>
        </ul>
      </section>
    );

    const Conclusion = () => (
      <section className="program--conclusion">
        <h1 class="title">É um trabalho e tanto!!!</h1>
        <p className="program--description">São muitos os passos e muitos os fallbacks para casos problemáticos! Mas a gente faz com carinho e ética, de forma completamente voluntária e buscando ser o processo mais transparente de escolhas de sessões que conhecemos!</p>
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
