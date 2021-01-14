require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Home Safe Home",
    description: "Gatsby blog with Strapi",
    author: "Strapi team",
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://45.66.223.134",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "atelier",
          "testimonial",
        ],
        singleTypes: [
          "footer",
          "titre-page-d-accueil",
          "page-philosophie",
          "page-equipe",
          "page-consulting",
          "page-atelier",
          "ruban",
        ],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
      },
    },
    "gatsby-plugin-offline",
  ],
}