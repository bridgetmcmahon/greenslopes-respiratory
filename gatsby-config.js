/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: path.join(__dirname, `src`, `documents`),
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
