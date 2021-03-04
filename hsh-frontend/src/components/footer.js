import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query FooterQuery {
            allStrapiFooter {
                nodes {
                contact
                Social {
                    lien
                    nom
                    }
                }
            }
        }
    `)
    const content = data.allStrapiFooter.nodes[0]
    return (
        <footer id="footer">
          <div className="footer-inner row">
            <div className="col col-contact s12 m6 l6">
              <h5 className="title">contact</h5>
              <div className="text-format" dangerouslySetInnerHTML={{__html:content.contact}} />
            </div>
            <div className="col col-social s12 m6 l6">
              <h5 className="title">social</h5>
              <ul className="social">
                {content.Social.map((e, i) => (
                  <li><a key={i} target="_blank" href={e.lien}> {e.nom}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
    );
};

export default Footer;
