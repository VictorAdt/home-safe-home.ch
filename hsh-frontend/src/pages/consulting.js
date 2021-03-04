import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";

const Consulting = ({ data }) => {
  const content = data.allStrapiPageConsulting.nodes[0]
  return (
    <Layout>
      <SEO
        title="Consulting"
        lang="fr"
        description="Page de nos services consulting"
      />

      {/* Header Page */}
      <section className="section section-header">
        <div className="section-inner row">
          <div className="col col-title s12 m4 l4">
            <h1 className="title">
              {content.titre}
            </h1>
          </div>
          <div className="col col-content s12 m6 l6">
            {content.description && <div className="text-format description" dangerouslySetInnerHTML={{__html:content.description}} />}
          </div>
          <div className="col col-aside s12 m2 l2">
            {content.information && <div className="text-format" dangerouslySetInnerHTML={{__html:content.information}} />}
          </div>
        </div>
      </section>

      {content.section &&
        content.section.map((e, i) => (
          <section key={i} className="section section-text" data-sal="flip-up" data-sal-delay="300" data-sal-easing="linear">
            <div className="section-inner row">
              <div className="col col-title s12 m4 l4">
                <h3 className="title">{e.titre}</h3>
              </div>
              <div className="col col-content s12 m8 l8">
                {e.image && <Img fixed={e.image.childImageSharp.fixed} imgStyle={{ position: "static" }} />}
                <div className="text-format" dangerouslySetInnerHTML={{__html:e.contenu}} />
              </div>
            </div>
          </section>
        ))
      }

    </Layout>
  )

}

export default Consulting

export const pageQuery = graphql`
  query ConsultingPageQuery {
    allStrapiPageConsulting {
        nodes {
          information
          description
          titre
          section {
            contenu
            titre
            image {
              childImageSharp{
                fixed(width: 1200){
                  src
                }
              }
            }
          }
        }
    }
  }
`
