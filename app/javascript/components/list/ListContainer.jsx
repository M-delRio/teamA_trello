import React, { Component } from 'react';
import ExistingLists from './ExistingLists';
import ToggleableNewList from './ToggleableNewList';
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
  lists: state.lists
})


class ListContainer extends Component {

  render() {
    return (
      <div id="list-container" className="list-container">
        <ExistingLists lists={this.props.lists} />
        <ToggleableNewList />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ListContainer);