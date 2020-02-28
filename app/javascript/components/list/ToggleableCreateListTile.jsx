import React, { Component } from 'react';
import CreateListFormContainer from './CreateListFormContainer';
import CreateListTile from './CreateListTile';

class ToggleableCreateListTile extends Component {
  state = {
    showForm: false,
  }

  handleTileClick = (e) => {
    e.preventDefault();

    this.setState({
      showForm: true
    });
  }

  handleFormCloseClick = (e) => {
    e.preventDefault();

    this.setState({
      showForm: false
    });
  }

  handleSave = () => {
    this.setState({
      showForm: false
    });
  };

  render() {
    if (this.state.showForm) {
      return (
        <div id="new-list" className="new-list">
          <CreateListFormContainer
            onCloseClick={this.handleFormCloseClick}
            onSave={this.handleSave}
          />
        </div>
      )
    } else {
      return (
        <div id="new-list" className="new-list">
          <CreateListTile
            onClick={this.handleTileClick} />
        </div>
      )
    }
  }
}

export default ToggleableCreateListTile;