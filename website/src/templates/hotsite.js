/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import "../assets/stylesheets/hotsite.css"
 
 import React from "react"
 import PropTypes from "prop-types"
 import {Container} from "react-bootstrap"
 
//  import Footer from "../components/footer"
//  import NavigationBar from "../components/navbar"
  import SEO from "../components/seo"
  import logoAliance from "../assets/images/logoAgileAlliance.png"
  import logoNovo from "../assets/images/ab2021-logo.png"
//  import logo from "../assets/images/logo-agile-brazil.png"
//  import logoCaravana from "../assets/images/logo-agile-brazil-caravana.png"

const Content = () => (
    <div>
        <a className="agileAlliance" href="http://agilealliance.org" target="_blank" rel="noreferrer">
            <img src={logoAliance} alt="Logo da Agile Alliance" />
        </a>

        <h1 className="conference">Agile Brazil 2021</h1>
        <img src={logoNovo} className="ab-logo" alt="Logo da Agile Brazil 2021" />

        <h2 className="dates">De 05 a 09 de outubro</h2>

        <div className="information">
            <p>Evento 100% online</p>
            <hr />
            <a href="https://submissoes.agilebrazil.com/2021"> Submeta sua sessão aqui (até 16/05) </a>
            <p>Mais informações em breve</p>
        </div>

        <div className="social">
            <p>Nos acompanhe nas redes sociais</p>
            <div>
                <a href="https://twitter.com/agilebrazil" target="_blank" rel="noreferrer">
                    <svg aria-hidden="true"
                        focusable="false" data-prefix="fab" data-icon="twitter-square"
                        className="svg-inline--fa fa-twitter-square fa-w-14 " role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z">
                        </path>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/groups/Agile-Brazil-3148432/" target="_blank" rel="noreferrer">
                    <svg aria-hidden="true"
                        focusable="false" data-prefix="fab" data-icon="linkedin"
                        className="svg-inline--fa fa-linkedin fa-w-14 " role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                        </path>
                    </svg>
                </a>
                <a href="https://www.instagram.com/agilebrazil/" target="_blank" rel="noreferrer">
                    <svg aria-hidden="true"
                        focusable="false" data-prefix="fab" data-icon="instagram"
                        className="svg-inline--fa fa-instagram fa-w-14 " role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                        </path>
                    </svg>
                </a>
                <a href="https://www.facebook.com/AgileBrazil" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 51.5">
                        <path fill="currentColor"
                            d="M 68.193359 2.1132812 C 31.704154 2.1132812 2.1132812 31.690945 2.1132812 68.193359 L 2.1132812 411.80664 C 2.1132813 448.30906 31.704154 477.88672 68.193359 477.88672 L 411.80664 477.88672 C 448.30906 477.88672 477.88672 448.30906 477.88672 411.80664 L 477.88672 68.193359 C 477.88672 31.690945 448.30906 2.1132812 411.80664 2.1132812 L 68.193359 2.1132812 z M 340.33594 94.625 L 385.375 94.625 L 385.375 147.48828 L 355.15039 147.48828 C 333.88595 147.48828 332.51172 155.41828 332.51172 170.25977 L 332.51172 200.35156 L 385.375 200.35156 L 377.02344 253.2168 L 332.51172 253.2168 L 332.51172 425.02344 L 266.43164 425.02344 L 266.43164 253.2168 L 226.7832 253.2168 L 226.7832 200.35156 L 266.43164 200.35156 L 266.43164 168.50195 C 266.45864 122.14043 285.71447 94.625 340.33594 94.625 z "
                            transform="matrix(0.1,0,0,0.1,0.15695735,0.13067934)"/>
                    </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCq45wLjEs9BRRreV02Fe8rw" target="_blank" rel="noreferrer">
                    <svg aria-hidden="true"
                        focusable="false" data-prefix="fab" data-icon="youtube-square"
                        className="svg-inline--fa fa-youtube-square fa-w-14 " role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z">
                        </path>
                    </svg>
                </a>
                <a href="https://vimeo.com/agilebrazil" target="_blank" rel="noreferrer">
                    <svg aria-hidden="true"
                        focusable="false" data-prefix="fab" data-icon="vimeo"
                        className="svg-inline--fa fa-vimeo fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3.9 49 22.5 47.1 64.7z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
)

 const Hotsite = ({ seoTitle, fluid = false }) => {

   return (
     <Container fluid className="main-container">
       <SEO title={seoTitle} />
       <Container className="content-container" fluid={fluid}>
         {/* {children} */}
         {/* <body> */}
            <Content />
         {/* </body> */}
       </Container>
     </Container>
   )
 }
 
 Hotsite.propTypes = {
   seoTitle: PropTypes.string.isRequired,
   fluid: PropTypes.bool,
 }
 
 export default Hotsite
 