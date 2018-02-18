module.exports = {
  siteMetadata: {
    title: 'silverdreamcampers'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`, {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`peralta`, `source sans`]
      }
    }, {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `35awjasihr5i`,
        accessToken: `f91aa591823fe6bc25d0b7abbd57fb53b84ce133b0bfd7150d5c4dffb53cf430`
      }
    }
  ]
};
