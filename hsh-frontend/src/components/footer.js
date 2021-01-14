import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query FooterQuery {
            allStrapiFooter {
                nodes {
                acces
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
        <footer>
            <div className="footer__contact">
                <p className="title">contact</p>
                <p>{content.contact}</p>
            </div>
            <div className="footer__acces">
                <p className="title">acces</p>
                {content.acces}
            </div>
            <div className="footer__social">
                <p className="title">social</p>
                {content.Social.map((e, i) => (
                    <a key={i} target="_blank" href={e.lien}> {e.nom}</a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;