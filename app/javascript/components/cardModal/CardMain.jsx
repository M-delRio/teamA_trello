import React from 'react';
import CardDetails from './CardDetails';
import CardCommentsForm from './CardCommentsForm';
import CardActivity from './CardActivity';

const CardMain = () => {
  return (
    <section className="modal-main">
      <ul className="modal-outer-list">
        <CardDetails />
        <CardCommentsForm />
        <CardActivity />
      </ul>
    </section>
  );
}

export default CardMain;