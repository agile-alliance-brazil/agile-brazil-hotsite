import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageBodyMain from "../components/imageBody"
import ImageBodyMainLogo from "../components/imageBodyLogo"
import styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <ImageBodyMain></ImageBodyMain>
      <div className={styles.floatingLogo}>
        <ImageBodyMainLogo>
          
        </ImageBodyMainLogo>
        <br />
        <h1>Porto Alegre, 2020</h1>
        <div className={styles.grayBox}>
          <h2>7, 8 e 9 de Outubro</h2>
        </div>
      </div>
        <p>
          <br />
          Em 2020 nossa conferência será realizada em Porto Alegre!
        </p>
        <p>
          Convidamos a comunidade ágil para semear os valores e principios ágeis e juntos <br />
          colher os frutos de nossa cultura.
        </p>    
  </Layout>
)

export default IndexPage