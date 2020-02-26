import React, { Component } from 'react';
import Cards from './Cards';

class CardsContainer extends Component {
  state = {}
  render() {
    return (
      <div id="cards-container" data-id="list-1-cards">
        <Cards />
      </div>
    );
  }
}

export default CardsContainer;