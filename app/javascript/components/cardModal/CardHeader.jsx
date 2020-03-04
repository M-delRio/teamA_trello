import React from 'react';
import Card from '../cards/Card';

const CardHeader = ({ card }) => {

  return (
    <header>
      <i className="card-icon icon .close-modal"></i>
      <textarea
        className="list-title"
        value={card.title}
        style={{ height: '45px' }}></textarea>
      <p>in list <a className="link">Stuff to try (this is a list)</a><i className="sub-icon sm-icon"></i>
      </p>
    </header>
  );
}

export default CardHeader;