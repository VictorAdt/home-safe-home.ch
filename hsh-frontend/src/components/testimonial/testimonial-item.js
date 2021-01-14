import React from 'react';

const TestimonialItem = props => {
    return (
        <div className="testimonial__item">
            <p className="testimonial__item__texte">{props.texte}</p>
            <p className="testimonial__item__name" >{props.nom}</p>
        </div>
    );
};

export default TestimonialItem;