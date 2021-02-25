import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TestimonialList from './../components/testimonial/testimonial-list'
import AtelierCard from "../components/atelier/atelier-card"
import Img from "gatsby-image";

const IndexPage = ({ data }) => {
  return (
    <Layout>

      <SEO
        title="Home"
        lang="fr"
        description="Page d'accueil"
      />

      {/* Header Page */}
      <div className="home__top__content">
        <h1>{data.allStrapiTitrePageDAccueil.nodes[0].titre}</h1>
        <div className="home__introduction">

          {data.allStrapiTitrePageDAccueil.nodes[0].introduction && <div className="text-format" dangerouslySetInnerHTML={{__html:data.allStrapiTitrePageDAccueil.nodes[0].introduction}} />}

          <div className="action">
            <Link to="/atelier" className="home__introduction__button">Workshop</Link>
            <Link to="/consulting" className="home__introduction__button">Consulting</Link>
          </div>

        </div>
      </div>

      {/* Banner */}
      {data.allStrapiTitrePageDAccueil.nodes[0].banner &&
        <Img
          fixed={data.allStrapiTitrePageDAccueil.nodes[0].banner.childImageSharp.fixed}
          imgStyle={{ position: "static" }}
        />
      }

      {/* Services */}
      <div className="services">
        <div className="services__consulting">
          <h3>Consulting</h3>
          {data.allStrapiTitrePageDAccueil.nodes[0].consulting && <div className="text-format" dangerouslySetInnerHTML={{__html:data.allStrapiTitrePageDAccueil.nodes[0].consulting}} />}
        </div>
        <div className="services__services">
          <h3>Services</h3>
          {data.allStrapiTitrePageDAccueil.nodes[0].service && <div className="text-format" dangerouslySetInnerHTML={{__html:data.allStrapiTitrePageDAccueil.nodes[0].service}} />}
        </div>
        <div className="services__workshop">
          <h3>Workshop</h3>
          {data.allStrapiTitrePageDAccueil.nodes[0].workshop && <div className="text-format" dangerouslySetInnerHTML={{__html:data.allStrapiTitrePageDAccueil.nodes[0].workshop}} />}
        </div>
      </div>

      {/* Atelier */}
      <div className="home__event__">
        <h4>les prochains ateliers</h4>
        <div className="atelier__cards__container">
          {
            data.atelier.edges.map((e, i) => (
              <AtelierCard key={i}
                atelier={e.node}
              />
            ))
          }
        </div>
      </div>
      <TestimonialList />
    </Layout>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query HomeQuery {
    atelier: allStrapiAtelier {
      edges {
        node {
          strapiId
          id
          titre
          type
          description
          description_courte
          Date(formatString: "DD MM YY")
        }
      }
    }
    allStrapiTitrePageDAccueil {
      nodes {
        introduction
        titre
        strapiId
        id
        consulting
        workshop
        service
        banner {
          childImageSharp {
            fixed(width: 1650){
              src
            }
          }
        }
      }
    }
  }
`
