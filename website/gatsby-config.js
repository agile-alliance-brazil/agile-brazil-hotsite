module.exports = {
  pathPrefix: `/2020`,
  siteMetadata: {
    title: `Agile Brazil 2020 - Porto Alegre`,
    description: `Convidamos a comunidade ágil para semear os valores e principios ágeis e juntos colher os frutos de nossa cultura.`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`400`, `700`]
          },
          {
            family: `Noto Sans`,
            variants: [`400`]
          },
        ],
      }
    }
  ],
}
