import React, { useState } from 'react';
import { Link } from 'gatsby'
import { window } from 'browser-monads';

const AtelierCard = props => {
    const date = new Date(props.atelier.Date)
    if (props) {
        return (
          <div className="card-atelier" data-sal="flip-up" data-sal-delay="300" data-sal-easing="linear">
            <div className="content row">
              <div className="col col-date s1 m1 l1">
                {props.atelier.Date && props.atelier.Date.split(' ').map((e, i) => (
                  <span className={`date date${i}`} >{e}</span>
                ))}
              </div>
              <div className="col col-title s9 m9 l9">
                <div className="type">{props.atelier.type}</div>
                <h4 className="title">{props.atelier.titre}</h4>
                <div className="description">{props.atelier.description_courte}</div>
              </div>
              <div className="col col-action s2 m2 l2">
                {window.location.pathname !== '/inscription' &&
                  <div className="atelier__card__buttons">
                      <Link className="button" to={`/atelier/${props.atelier.id}`}>Détails</Link>
                      <Link className="button" to={`/inscription`} state={{ atelier: props.atelier }}>S'inscrire</Link>
                  </div>
                }
              </div>
            </div>
          </div>
        )
    } else return null

}

export default AtelierCard;
