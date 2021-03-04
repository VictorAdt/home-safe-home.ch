import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import TestimonialItem from './testimonial-item'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const TestimonialList = () => {

    const data = useStaticQuery(graphql`
        query TestimonialQuery {
            allStrapiTestimonial {
                nodes {
                  texte
                  nom
                }
            }
        }
    `)

    const content = data.allStrapiTestimonial.nodes

    return (
        <section className="section section-testimonial" data-sal="slide-up" data-sal-delay="250" data-sal-easing="ease">
          <div className="section-inner">
            <h4 className="title">Feedback</h4>
            <div className="content">
              <Carousel>
                {content.map((e, i) => (
                  <TestimonialItem
                    key={i}
                    nom={e.nom}
                    texte={e.texte}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </section>
    );
};

export default TestimonialList;
