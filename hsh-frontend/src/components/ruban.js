import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Marquee from "react-marquee-slider";

const Ruban = () => {

  const data = useStaticQuery(graphql`
    query RubanQuery {
        allStrapiRuban {
          edges {
            node {
              texte
              strapiId
              id
            }
          }
        }
   }
  `)

  return (
    <div className="marquee">
      <Marquee> {data.allStrapiRuban.edges[0].node.texte} </Marquee>
    </div>
  );
};

export default Ruban;

