import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import AtelierCard from './../components/atelier/atelier-card'

const Atelier = ({ data }) => {
  const pageContent = data.allStrapiPageAtelier.edges[0].node
  return (
    <Layout>
      <SEO
        title="Ateliers"
        lang="fr"
        description="Présentations des prochains ateliers"
      />

      {/* Header Page */}
      <section className="section section-header" data-sal="slide-up" data-sal-delay="250" data-sal-easing="ease">
        <div className="section-inner row">
          <div className="col col-title s12 m5 l5">
            <h1 className="title">
              {pageContent.titre}
            </h1>
          </div>
          <div className="col col-content s12 m7 l7">
            {pageContent.description && <div className="text-format description" dangerouslySetInnerHTML={{__html:pageContent.description}} />}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section section-events">
        {data.atelier.edges.map((e, i) => (
          <AtelierCard  atelier={e.node}/>
        ))}
      </section>

    </Layout>
  );
};

export default Atelier;

export const pageQuery = graphql`
  query AtelierPageQuery {
    allStrapiPageAtelier {
      edges {
        node {
          titre
          strapiId
          id
          description
        }
      }
    }
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
  }
`
