import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const ImageBodyMainLogo = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "AB-Color-Dark-BG.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
  
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  }
  
  export default ImageBodyMainLogo
  