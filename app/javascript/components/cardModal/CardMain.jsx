import React from "react";
import CardDetails from "./CardDetails";
import CardCommentsForm from "./CardCommentsForm";
import CardActivity from "./CardActivity";

const CardMain = ({ card }) => {
  return (
    <section className="modal-main">
      <ul className="modal-outer-list">
        <CardDetails card={card} />
        <CardCommentsForm />
        <CardActivity />
      </ul>
    </section>
  );
};

export default CardMain;
