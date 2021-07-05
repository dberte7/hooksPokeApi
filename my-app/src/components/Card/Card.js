import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="Card">
      <p>{props.pokemon.name}</p>
      <img src={props.pokemon.sprites.front_default} alt='pokemon' />
    </div>
  );
  }

export default Card;