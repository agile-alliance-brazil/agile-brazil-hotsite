import React from "react"
import { Link } from "gatsby"
import { Container, Navbar, Nav, NavDropdown, Image, Row, Col } from "react-bootstrap"
import AgileAlianceLogo from "../assets/images/logo-agilealliance-brazil.jpg"
import "../assets/stylesheets/navbar.css"

const hideMenu = false // Hack to publish teaser site

const NavigationBar = () => (
  <Container className="fixed-top nav-container" fluid>
    <Row className="nav-agilealliance">
      <Col>
        <Container>
          <a href="https://www.agilealliance.org/agilealliancebrazil/" target="_blank" rel="noopener noreferrer">Agile Alliance</a>
          <a href="https://www.agilealliance.org/agilealliancebrazil/membresia/" target="_blank" rel="noopener noreferrer">Membresia</a>
        </Container>
      </Col>
    </Row>
    <Row>
      <Col>
        <Navbar expand="lg">
          <Image className="aliance-logo" src={AgileAlianceLogo} />
          <Container style={{ visibility: hideMenu ? 'hidden' : 'visible' }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto centered-text">
                <Link className="nav-link" to="/">Inicial</Link>
                <Link className="nav-link" to="volunteers">Voluntários</Link>
                <Link className="nav-link" to="conduct">Código de Conduta</Link>
                <Link className="nav-link" to="virada">Virada Agil</Link>
                <Link className="nav-link" to="faq">FAQ</Link>
                <NavDropdown title="WBMA" id="basic-nav-dropdown">
                  <Link className="dropdown-item" to="wbma">WBMA 2020</Link>
                  <Link className="dropdown-item" to="wbma-topics">Tópicos de Interesse</Link>
                  <Link className="dropdown-item" to="wbma-submission">Submissão de Papers</Link>
                  <Link className="dropdown-item" to="wbma-committee">Comitê</Link>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  </Container>
)

export default NavigationBar
