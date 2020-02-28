import React, { Component } from 'react';
import ExistingLists from './ExistingLists';
import ToggleableCreateListTile from './ToggleableCreateListTile';
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
  lists: state.lists
})


class ListContainer extends Component {

  render() {
    return (
      <div id="list-container" className="list-container">
        <ExistingLists lists={this.props.lists} />
        <ToggleableCreateListTile />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ListContainer);