const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Simple Gatsby theme with scss and material-ui support`,
    author: `@luchoster`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, 'src', 'pages'),
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-luchoster-base'],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
