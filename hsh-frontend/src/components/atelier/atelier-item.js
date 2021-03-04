import React from 'react';
import { Link } from 'gatsby'
import Layout from '../layout';
import AtelierCard from './atelier-card';
import Img from "gatsby-image";

const AtelierItem = ({ data }) => {
    const atelier = data.strapiAtelier
    return (
        <Layout>
        <section className="section section-events" data-sal="slide-up" data-sal-delay="300" data-sal-easing="linear">
          <div className="card-atelier">
            <div className="content row">
              <div className="col col-date s1 m1 l1">
                {atelier.Date && atelier.Date.split(' ').map((e, i) => (
                  <span className={`date date${i}`} >{e}</span>
                ))}
              </div>
              <div className="col col-title s9 m9 l9">
                <div className="type">{atelier.type}</div>
                <h4 className="title">{atelier.titre}</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-text" data-sal="slide-up" data-sal-delay="300" data-sal-easing="linear">
          <div className="section-inner row">
            <div className="col col-action s12 m2 l2">
              <Link to="/inscription" state={{ atelier: atelier }} className="button">S'inscrire</Link>
            </div>
            <div className="col col-content s12 m8 l8">
              {atelier.image && <Img fixed={atelier.image.childImageSharp.fixed} imgStyle={{ position: "static" }} />}
              <div className="text-format" dangerouslySetInnerHTML={{__html:atelier.description}} />
            </div>
            <div className="col col-aside s12 m2 l2">
              <div className="text-format" dangerouslySetInnerHTML={{__html:atelier.infos}} />
            </div>
          </div>
        </section>

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
