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
      <div className="page atelier">
        <h1 className="page-title">{pageContent.titre}</h1>
        {pageContent.description && <div className="text-format description" dangerouslySetInnerHTML={{__html:pageContent.description}} />}
        <div className="atelier__cards__container">
          {
            data.atelier.edges.map((e, i) => (
              <AtelierCard
                atelier={e.node}
              />
            ))
          }
        </div>
      </div>
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
