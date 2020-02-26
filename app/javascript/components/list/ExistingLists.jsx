import React, { Component } from 'react';
import List from './List';

const ExistingLists = ({ lists }) => {
  return (
    <div id="existing-lists" className="existing-lists">
      {lists.map(list => <List key={list.id} list={list} />)}
    </div>
  );
}

export default ExistingLists;