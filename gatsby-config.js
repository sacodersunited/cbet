require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// And then you can use the config in gatsby-config.js
const config = require("gatsby-plugin-config").default

module.exports = {
  siteMetadata: {
    title: `Online Biomedical Technology School`,
    description: `The College Of Biomedical Equipment Technology offers Online Biomedical Training. Visit our website to get more information and apply today!`,
    author: `@gatsbyjs`,
    codeFunc: config.GATSBY_code,
    gmap: config.GOOGLE_API_KEY,
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
        icon: `src/images/logo/CBETlogoCenter.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-145785032-1",
        head: true,
      },
    },
    {
      resolve: "gatsby-source-cbet",
      options: {
        code: config.GATSBY_code,
      },
    },
    `gatsby-plugin-netlify-cache`,
  ],
}
