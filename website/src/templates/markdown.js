import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
      <Layout seoTitle={frontmatter.title}>
          <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      </Layout>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`