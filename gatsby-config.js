module.exports = {
  siteMetadata: {
    title: '{ TSL }',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /icons/,
      },
    },
  ],
}
