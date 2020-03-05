import React from "react";

const CardDetails = ({ card }) => {
  return (
    <li className="details-section">
      <ul className="modal-details-list">
        <li className="labels-section">
          <h3>Labels</h3>
          {card.labels.map(label => {
            return (
              <div className="member-container">
                <div className={`${label} label colorblindable`}></div>
              </div>
            );
          })}
        </li>
        <li className="due-date-section">
          <h3>Due Date</h3>
          <div id="dueDateDisplay" className="overdue completed">
            <input
              id="dueDateCheckbox"
              type="checkbox"
              className="checkbox"
              checked=""
            />
            Aug 4 at 10:42 AM <span>(past due)</span>
          </div>
        </li>
      </ul>
      <form className="description">
        <p>Description</p>
        <span id="description-edit" className="link">
          Edit
        </span>
        <p className="textarea-overlay">
          Cards have a symbol to indicate if they contain a description.
        </p>
        <p id="description-edit-options" className="hidden">
          You have unsaved edits on this field.{" "}
          <span className="link">View edits</span> -{" "}
          <span className="link">Discard</span>
        </p>
      </form>
    </li>
  );
};

export default CardDetails;
