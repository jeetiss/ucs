module.exports = {
  siteMetadata: {
    title: "useControlledState",
    language: "en"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true
      }
    }
  ]
};
