module.exports = {
  siteMetadata: {
    title: 'Better Gatsby',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'onc04x4udj78',
        accessToken:
          '9b34a0e7bb95972ba9b0c2848e336caf753ed831b8921fdb96d097b79d2b99c3',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
  ],
}
