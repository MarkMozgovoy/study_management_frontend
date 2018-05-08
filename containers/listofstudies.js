import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectUser} from '../actions'

class UserList extends React.Component {

createListItems() {

  return this.props.users.map((user) => {
    return(
      <li
        key ={user.studyId}
        onClick={() => this.props.selectUser(user)}
      >
        {user.studyId},
        {user.name},
        {user.dateCreated}
      </li>
          );
  });
}

  render() {
    // -- this is for fetching(GET) all studies using the rest api -- //
    // fetch('http://rest.learncode.academy/api/mmozgovoy/studies')
    //   .then(response => response.json()) // response.json() returns a promise
    //   .then((response) => {
    //     console.log("I have friends!", response); //returns all of johnbob's friends
    //   })
    //
    // -- Will only show in console, to work only uncomment in between -- //

          return (
            <ul>
            {this.createListItems()}
            </ul>
          );
      };
  }

function mapStateToProps(state) {
  return {
    users: state.studies,
    booll: state.isViewingstudy
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectUser: selectUser}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
