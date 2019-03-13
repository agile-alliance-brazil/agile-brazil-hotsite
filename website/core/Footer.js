import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faVimeo, faYoutubeSquare, faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
const React = require('react');

const socialMediaItem = {
  display: 'inline-block',
  width: '36px'
};

const BrandItem = props => 
  <div>
    <div className="brand-item" style={socialMediaItem}>
      <a href={props.link} target="_blank">
        <div className="icon-item" style={socialMediaItem}>
          <FontAwesomeIcon icon={props.icon} color='#ffffff'/>
        </div>
      </a> 
    </div>
  </div>;


const Footer = props => {
  const translationMap = require(`../i18n/${props.language}`);
  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <div className="social-media-container">
          <h5>{translationMap['pages-strings']['social_networks']}</h5>
          <div className="social-media-items">
            <BrandItem link={"https://www.facebook.com/AgileBrazil"} icon={faFacebook}/>
            <BrandItem link={"https://www.linkedin.com/groups/Agile-Brazil-3148432/"} icon={faLinkedin}/>
            <BrandItem link={"https://twitter.com/agilebrazil"} icon={faTwitterSquare}/>
            <BrandItem link={"https://vimeo.com/agilebrazil"} icon={faVimeo}/>
            <BrandItem link={"https://www.youtube.com/channel/UCq45wLjEs9BRRreV02Fe8rw"} icon={faYoutubeSquare}/>
            <BrandItem link={"https://www.instagram.com/agilebrazil/"} icon={faInstagram}/>
          </div>
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
