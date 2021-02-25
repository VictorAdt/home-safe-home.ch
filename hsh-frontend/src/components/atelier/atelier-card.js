import React, { useState } from 'react';
import { Link } from 'gatsby'
import { window } from 'browser-monads';

const AtelierCard = props => {
    const date = new Date(props.atelier.Date)
    if (props) {
        return (
            <div className="atelier__card atelier">
                <div className="atelier__card__content">
                    <div>
                        {props.atelier.Date &&
                        props.atelier.Date.split(' ').map((e, i) => (
                            <p className={`atelier__date date date${i}`} >{e}</p>
                        ))}
                    </div>
                    <div className="atelier__card__mainContent">
                        <p className="atelier__type type"> {props.atelier.type}</p>
                        <p className="atelier__title title"> {props.atelier.titre}</p>
                        <p className="atelier__description" >{props.atelier.description_courte}</p>
                    </div>
                </div>

                {window.location.pathname !== '/inscription' &&
                  <div className="atelier__card__buttons">
                      <Link to={`/atelier/${props.atelier.id}`}> Détails
                      </Link>
                      <Link to={`/inscription`} state={{ atelier: props.atelier }}> S'inscrire
                  </Link>
                </div>
                }
            </div>
        )
    } else return null

}

export default AtelierCard;
