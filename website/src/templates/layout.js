/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/stylesheets/layout.css"

import React from "react"
import PropTypes from "prop-types"
import { Jumbotron, Container, Image, Button } from "react-bootstrap"

import Footer from "../components/footer"
import NavigationBar from "../components/navbar"
import SEO from "../components/seo"
import logo from "../assets/images/logo-agile-brazil.png"
import logoCaravana from "../assets/images/logo-agile-brazil-caravana.png"

const Layout = ({ children, seoTitle, fluid = false }) => {
  return (
    <Container fluid className="main-container">
      <SEO title={seoTitle} />
      <NavigationBar />
      <Container className="content-container" fluid={fluid}>
        <Jumbotron className="jumbotron-caravana" fluid>
          <Container>
            <Image className="align-self-center" src={logoCaravana} fluid />
            <h2>Slow Conference Online</h2>
            <h3>08/09 a 07/10</h3>
            <Button variant="outline-light" size="lg" href="https://www.even3.com.br/abraca2020/">
              Saiba mais ...
            </Button>
          </Container>
        </Jumbotron>
      </Container>
      <Container className="content-container" fluid={fluid}>
        {children}
      </Container>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seoTitle: PropTypes.string.isRequired,
  fluid: PropTypes.bool,
}

export default Layout
