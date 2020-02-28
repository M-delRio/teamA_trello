import React from 'react';

const CreateListForm = (props) => {
  return (
    <form action="#">
      <input type="text" placeholder="Add a list..." />
      <div>
        <input type="submit" className="button" value="Save" />
        <i className="x-icon icon"></i>
      </div>
    </form>
  );
}

export default CreateListForm;