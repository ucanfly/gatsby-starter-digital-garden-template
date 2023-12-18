module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/src/sites/notes`,
        rootNote: `/Usage`,
      },
    },
  ],
  siteMetadata: {
    title: `Site title`,
  },
}
