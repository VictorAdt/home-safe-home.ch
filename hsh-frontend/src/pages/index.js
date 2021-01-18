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
      <div className="home__top__content">
        <h1>{data.allStrapiTitrePageDAccueil.edges[0].node.titre}</h1>
        <div className="home__introduction">
          <p>{data.allStrapiTitrePageDAccueil.edges[0].node.introduction}</p>
          <div>
            <Link to="/atelier" className="home__introduction__button">Workshop</Link>
            <Link to="/consulting" className="home__introduction__button">Consulting</Link>
          </div>
        </div>
      </div>
      {data.allStrapiTitrePageDAccueil.edges[0].node.banner &&
        <Img
          fixed={data.allStrapiTitrePageDAccueil.edges[0].node.banner.childImageSharp.fixed}
          imgStyle={{ position: "static" }}
        />
      }
      <div className="services">
        <div className="services__consulting">
          <h3>Consulting</h3>
          <p>{data.allStrapiTitrePageDAccueil.edges[0].node.consulting}</p>
        </div>
        <div className="services__services">
          <h3>Services</h3>
          <p>{data.allStrapiTitrePageDAccueil.edges[0].node.service}</p>
        </div>
        <div className="services__workshop">
          <h3>Workshop</h3>
          <p>{data.allStrapiTitrePageDAccueil.edges[0].node.workshop}</p>
        </div>
      </div>
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
      edges {
        node {
          introduction
          titre
          strapiId
          id
          consulting
          workshop
          service
          banner {
            childImageSharp {
              fixed(width: 800){
                src
              }
            }
          }
        }
      }
    }
  }
`