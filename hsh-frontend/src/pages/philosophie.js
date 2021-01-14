import React from 'react';
import Layout from "../components/layout"
import Img from "gatsby-image";
import SEO from './../components/seo'

const Philosophie = ({ data }) => {
  const content = data.allStrapiPagePhilosophie.nodes[0]
  return (
    <Layout>
      <SEO
        title="Philosophie"
        lang="fr"
        description="Présentations de notre philosophie de travail"
      />
      <div className="philosophie page">
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
  );
};

export default Philosophie;

export const pageQuery = graphql`
  query PhilosophiePageQuery {
    allStrapiPagePhilosophie {
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