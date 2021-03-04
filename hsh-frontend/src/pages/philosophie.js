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
