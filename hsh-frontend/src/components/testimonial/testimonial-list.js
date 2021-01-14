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
        <div className="testimonial__list">
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
    );
};

export default TestimonialList;
