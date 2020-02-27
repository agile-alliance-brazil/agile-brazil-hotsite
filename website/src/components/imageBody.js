import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const ImageBodyMain = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "232619746.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1350, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img style={{
      zIndex: `-1`
    }} fluid={data.placeholderImage.childImageSharp.fluid} />
  }
  
  export default ImageBodyMain
  