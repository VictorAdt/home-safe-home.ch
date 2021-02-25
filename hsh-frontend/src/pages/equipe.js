import React from 'react';
import Layout from '../components/layout';
import Img from "gatsby-image";
import SEO from './../components/seo'

const Equipe = ({ data }) => {
  const content = data.strapiPageEquipe
  return (
    <Layout>
      <SEO
        title="Equipe"
        lang="fr"
        description="Présentations d'équipe"
      />

      {/* Page Team */}
      <div className="page equipe">

        {content.titre && <h1 className="page-title">{content.titre}</h1>}

        {/* Team list */}
        <div className="equipe__collaborateur__container">
          {content.collaborateur.map((e, i) => (
            <div className="equipe__collaborateur__card" key={i}>
              {e.photo &&
                <Img
                  fixed={e.photo.childImageSharp.fixed}
                  imgStyle={{ position: "static" }}
                />
              }
              <p>{e.prenom + ' ' + e.nom}</p>
              <p>{e.role}</p>

              {e.description && <div className="text-format description" dangerouslySetInnerHTML={{__html:e.Description}} />}

            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Equipe;

export const pageQuery = graphql`
query EquipeQuery {
    strapiPageEquipe {
      titre
      collaborateur {
        nom
        prenom
        role
        id
        Description
        photo {
          childImageSharp {
            fixed(width: 800){
                src
            }
          }
        }
      }
    }
  }
`
