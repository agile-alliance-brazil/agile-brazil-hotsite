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
  
    return (
      <div style={{
        backgroundImage: `linear-gradient(0deg, rgb(0, 56, 88) 1%, transparent 60%)`,
        zIndex: `10`
      }}>
        <Img style={{
          zIndex: `-1`,
          maxHeight: `500px`
        }} fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    )
  }
  
  export default ImageBodyMain
  