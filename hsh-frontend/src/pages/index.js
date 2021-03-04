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
      <section className="section section-header" data-sal="slide-up" data-sal-delay="250" data-sal-easing="ease">
        <div className="section-inner row">
          <div className="col col-title s12 m5 l5">
            <h1 className="title">
              {data.allStrapiTitrePageDAccueil.nodes[0].titre}
            </h1>
          </div>
          <div className="col col-content s12 m5 l5">
            {data.allStrapiTitrePageDAccueil.nodes[0].introduction && <div className="text-format" dangerouslySetInnerHTML={{__html:data.allStrapiTitrePageDAccueil.nodes[0].introduction}} />}
          </div>
          <div className="col col-action s12 m2 l2">
            <ul className="action">
              <li><Link to="/atelier" className="button">Workshop</Link></li>
              <li><Link to="/consulting" className="button">Consulting</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Banner Page */}
      <section className="section section-banner">
        <div className="section-inner row">
          {data.allStrapiTitrePageDAccueil.nodes[0].banner &&
            <Img fixed={data.allStrapiTitrePageDAccueil.nodes[0].banner.childImageSharp.fixed} imgStyle={{position:"static" }}
            />
          }
        </div>
      </section>


      {/* Services */}
      <section className="section section-services">
        <div className="section-inner row">
          <div className="col col-content s12 m4 l4">
            <div className="inner" data-sal="slide-up" data-sal-delay="250" data-sal-easing="linear">
              <h3 className="title">Consulting</h3>
              {data.allStrapiTitrePageDAccueil.nodes[0].consulting && <div className="text-format" dangerouslySetInnerHTML={{__html:data.allStrapiTitrePageDAccueil.nodes[0].consulting}} />}
            </div>
          </div>
          <div className="col col-content s12 m4 l4">
            <div className="inner" data-sal="slide-up" data-sal-delay="300" data-sal-easing="linear">
              <h3 className="title">Services</h3>
              {data.allStrapiTitrePageDAccueil.nodes[0].service && <div className="text-format" dangerouslySetInnerHTML={{__html:data.allStrapiTitrePageDAccueil.nodes[0].service}} />}
            </div>
          </div>
          <div className="col col-content s12 m4 l4">
            <div className="inner" data-sal="slide-up" data-sal-delay="350" data-sal-easing="linear">
              <h3 className="title">Workshop</h3>
              {data.allStrapiTitrePageDAccueil.nodes[0].workshop && <div className="text-format" dangerouslySetInnerHTML={{__html:data.allStrapiTitrePageDAccueil.nodes[0].workshop}} />}
            </div>
          </div>
        </div>
      </section>

      {/* Title */}
      <section className="section section-title" data-sal="zoom-in" data-sal-delay="300" data-sal-easing="linear">
        <div className="section-inner">
          <h3 className="title">les prochains ateliers</h3>
        </div>
      </section>

      {/* Atelier */}
      <section className="section section-events">
        {data.atelier.edges.map((e, i) => (
          <AtelierCard key={i}
            atelier={e.node}
          />
        ))}
      </section>

      {/* Testimonial */}
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
