module.exports = {
  pathPrefix: `/2021`,
  siteMetadata: {
    title: `Agile Brazil 2021`,
    description: `A Agile Brazil é a mais relevante conferência brasileira sobre cultura ágil. O evento não possui fins lucrativos e é organizado pela Agile Alliance Brazil.`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-134176117-1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/pages-markdown`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `agile-brazil`,
        short_name: `ab`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/agilebrazil-favicon.png`,
        icon_options: {
          purpose: `any`,
        },
      },
    }
  ],
}
