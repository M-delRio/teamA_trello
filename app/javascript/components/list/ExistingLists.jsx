import React, { Component } from 'react';
import List from './List';
import ToggleableCreateListTile from './ToggleableCreateListTile';

const ExistingLists = ({ lists }) => {
  let allLists = lists.map(list => <List key={list.id} list={list} />)
  return (
    <div id="existing-lists" className="existing-lists">
      {allLists}
    </div>
  );
}

export default ExistingLists;