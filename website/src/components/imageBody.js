import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const ImageBodyMain = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg-poa.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
  
    return <Img style={{
      zIndex: `-1`,
      maxHeight: `500px`
    }} fluid={data.placeholderImage.childImageSharp.fluid} />
  }
  
  export default ImageBodyMain
  