/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from './footer'
import Header from "./header/header"
import '../styles/styles.scss'
import Ruban from "./ruban"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allStrapiRuban {
        edges {
          node {
            texte
            strapiId
            id
          }
        }
      }
    }
  `)

  return (
    <>
      {/** Import fonts **/}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;600&display=swap" rel="stylesheet" />

      {/** Import Ruban **/}
      {data.allStrapiRuban.edges[0].node.texte && <Ruban/>}

      {/** Import Header **/}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      {/** Display Main **/}
      <main>{children}</main>

      {/** Import Footer **/}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
