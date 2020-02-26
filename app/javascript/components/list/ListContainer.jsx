import React, { Component } from 'react';
import ExistingLists from './ExistingLists';
import ToggleableNewList from './ToggleableNewList';

class ListContainer extends Component {

  render() {
    return (
      <div id="list-container" className="list-container">
        <ExistingLists />
        <ToggleableNewList />
      </div>
    );
  }
}

export default ListContainer;