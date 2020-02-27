import React from 'react';
import Card from './Card';

const Cards = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} card={card} />)}
    </div>
  );
}

export default Cards;