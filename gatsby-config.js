module.exports = {
  siteMetadata: {
    title: 'silverdreamcampers',
  },
  plugins: ['gatsby-plugin-react-helmet', `gatsby-plugin-styled-components`,
  {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [`peralta`, `source sans`]
        }
      }
    ],
};
