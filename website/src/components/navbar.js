import React from "react"
import { Container, Navbar, Nav, Image } from "react-bootstrap"
import AgileAlianceLogo from "../assets/images/logo-agilealliance-brazil.jpg"

const NavigationBar = () => (
  <Container className="fixed-top nav-container" fluid>
    <Navbar expand="lg" style={styles.Navbar}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto centered-text">
            <Nav.Link href="faq">FAQ</Nav.Link>
            <Nav.Link href="volunteers">Voluntários</Nav.Link>
            <Nav.Link href="conduct">Código de Conduta</Nav.Link>
            <Nav.Link href="#wbma">WBMA</Nav.Link>
            <Nav.Link href="#agilealliance">Agile Alliance</Nav.Link>
            <Nav.Link href="#membresia">Membresia</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Image className="aliance-logo" src={AgileAlianceLogo} />
      </Container>
    </Navbar>
  </Container>
)

const styles = {
  Navbar: {
    backgroundColor: '#5c95b6'
  }
}

export default NavigationBar
