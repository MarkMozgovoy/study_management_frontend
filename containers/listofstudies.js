import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectStudy} from '../actions'

class StudyList extends React.Component {

createListItems() {
  return this.props.studies.map((study) => {
    return(
      <tr key={study.studyId} onClick={()=>this.props.selectStudy(study)}>
        <td><div> {study.name} </div></td>
        <td><div> {study.dateCreated.slice(0,10)} </div></td>
      </tr>
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
            <table class="study-table">
              <thead>
                <tr>
                  <th> Name </th>
                  <th> Date Created </th>
                </tr>
              </thead>
              <tbody> {this.createListItems()} </tbody>
            </table>
          );
      };
  }

function mapStateToProps(state) {
  return {
    studies: state.studies,
    booll: state.isViewingstudy
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectStudy: selectStudy}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(StudyList);
