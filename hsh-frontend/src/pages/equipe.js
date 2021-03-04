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

      {/* Header Page */}
      <section className="section section-header">
        <div className="section-inner row">
          <div className="col col-title s12 m4 l4">
            <h1 className="title">
              {content.titre}
            </h1>
          </div>
          <div className="col col-content s12 m8 l8">
            {content.description && <div className="text-format description" dangerouslySetInnerHTML={{__html:content.description}} />}
          </div>
        </div>
      </section>

      {/* Page Team */}
      {content.collaborateur.map((e, i) => (
        <div key={i} className="team">
          <div className="team-inner row">
            <div className="col col-image s4 m4 l4">
              {e.photo &&
                <Img
                  fixed={e.photo.childImageSharp.fixed}
                  imgStyle={{ position: "static" }}
              />}
            </div>
            <div className="col col-information s4 m4 l4">
              <h4 className="title">{e.prenom + ' ' + e.nom}</h4>
              <div className="legend">{e.role}</div>
            </div>
            <div className="col col-description s4 m4 l4">
              {e.Description && <div className="text-format description" dangerouslySetInnerHTML={{__html:e.Description}} />}
            </div>
          </div>
        </div>
      ))}
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
