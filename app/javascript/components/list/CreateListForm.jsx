import React from 'react';

const CreateListForm = (props) => {
  return (
    <div id="new-list" className="new-list">

      <input type="text" placeholder="Add a list..." value={props.title} />
      <div>
        <input type="submit" className="button" value="Save" />
        <i className="x-icon icon"></i>
      </div>
    </div>
  );
}

export default CreateListForm;