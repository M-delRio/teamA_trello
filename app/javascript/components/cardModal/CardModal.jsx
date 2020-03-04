import React from 'react';
import CardHeader from './CardHeader';
import CardMain from './CardMain';
import CardAside from './CardAside';

const CardModal = () => {
  return (
    <div id="modal-container">
      <div className="screen"></div>
      <div id="modal">
        <i className="x-icon icon close-modal"></i>
        <CardHeader />
        <CardMain />
        <CardAside />
      </div>
    </div>
  );
}

export default CardModal;