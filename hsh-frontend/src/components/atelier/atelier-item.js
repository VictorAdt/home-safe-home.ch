import React from 'react';
import { Link } from 'gatsby'
import Layout from '../layout';
import AtelierCard from './atelier-card';
import Img from "gatsby-image";

const AtelierItem = ({ data }) => {
    const atelier = data.strapiAtelier
    return (
        <Layout>
            <div className="atelier__item page">
                <div className="atelier__item__header">
                    <div className="atelier__card__content">
                        <div>
                            {atelier.Date.split(' ').map((e, i) => (
                                <p className={`atelier__date date date${i}`} >{e}</p>
                            ))}
                        </div>
                        <div className="atelier__card__mainContent">
                            <p className="atelier__type type"> {atelier.type}</p>
                            <h1 className="atelier__title title"> {atelier.titre}</h1>
                        </div>
                    </div>
                    <div className="atelier__margin" >
                        <Link to="/inscription" state={{ atelier: atelier }} className="home__introduction__button">S'inscrire</Link>
                    </div>
                </div>
                <div className="atelier__item__content">
                    <p className="atelier__item__description" >{atelier.description}</p>
                    <p className="atelier__item__description__margin">{atelier.description_courte}</p>
                </div>
                <div className="atelier__item__infos">
                    <p className="atelier__item__infos" >{atelier.infos}</p>
                </div>
                <div className="atelier__item__galerie">
                    {
                    atelier.galerie.map((e, i) => (
                        e.image &&
                        <Img
                            fixed={e.image.childImageSharp.fixed}
                            imgStyle={{ position: "static" }}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default AtelierItem;

export const query = graphql`
  query AtelierItem($slug: String!) {
    strapiAtelier(id: {eq: $slug}) {
        Date(formatString: "DD MM YY")
        type
        titre
        description
        description_courte
        infos
        strapiId
        id
        galerie {
            image {
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