import React, { Component } from 'react';
import CreateListForm from './CreateListForm';

class CreateListFormContainer extends Component {
  state = {
    title: ''
  };

  render() {
    return (
      <CreateListForm title={this.state.title} />
    );
  }
}

export default CreateListFormContainer;