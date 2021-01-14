import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";

const Consulting = ({ data }) => {
  console.log(data);
  const content = data.allStrapiPageConsulting.nodes[0]
  return (
    <Layout>
      <div className="page consulting">
        <SEO
          title="Consulting"
          lang="fr"
          description="Page de nos services consulting"
        />
        <h1>{content.titre}</h1>
        <div className="page__content">
          <div className="page__content__main">
            <p className="page__content__main__description">{content.description}</p>
            {content.section &&
              content.section.map((e, i) => (
                <div className={`page__content__section ${i}`}>
                  <h5>{e.titre}</h5>
                  <Img
                    fixed={e.image.childImageSharp.fixed}
                    imgStyle={{ position: "static" }}
                  />
                  <p>{e.contenu}</p>
                </div>
              ))}
          </div>
          <div className="page__content__margin">
            <p className="page__content__margin__information">{content.information}</p>
          </div>
        </div>
      </div>
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