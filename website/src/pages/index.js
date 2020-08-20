import React from "react"
import { Jumbotron, Container, Image } from "react-bootstrap"

import Layout from "../templates/layout"
import logo from "../assets/images/logo-agile-brazil.png"

const IndexPage = () => {
  return (
    <Layout seoTitle="Inicial" fluid>
      <Jumbotron fluid>
        <Container>
          <Image className="align-self-center" src={logo} fluid />
          <h1>Porto Alegre, 2021</h1>
          <h2>6, 7 e 8 de Outubro</h2>
        </Container>
      </Jumbotron>
    </Layout>
  )
}

export default IndexPage
