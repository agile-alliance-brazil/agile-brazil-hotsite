const React = require('react');

const Footer = props => {
  const translationMap = require(`../i18n/${props.language}`);
  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <div>
          <h5>{translationMap['pages-strings']['social_networks']}</h5>
          <a href="https://www.facebook.com/AgileBrazil" target="_blank">
            Facebook
          </a>
          <a href="https://www.linkedin.com/groups/Agile-Brazil-3148432/" target="_blank">
            LinkedIn
          </a>
          <a href="https://twitter.com/agilebrazil" target="_blank">
            Twitter
          </a>
          <a href="https://vimeo.com/agilebrazil" target="_blank">
            Vimeo
          </a>
        </div>
        <div>
          <h5>{translationMap['pages-strings']['contact']}</h5>
          <a href="mailto:contato@agilebrazil.com" target="_blank">
            contato@agilebrazil.com
          </a>
        </div>
        <img
          src={`${props.config.baseUrl}img/logoAgileBrazil.png`}
          alt="Logo Agile Brazil"
          height="45"
        />
      </section>
    </footer>
  );
}

module.exports = Footer;
