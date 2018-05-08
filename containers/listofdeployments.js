import React, {Component} from 'react'
import {connect} from 'react-redux'

class DeploymentList extends Component {

createListItems() {
  let activedply = this.props.user.id;
  let deplys = this.props.dplmts;
  let araydply = this.props.dplmts.filter(
    (dplmt) => {
      return dplmt.studyid == activedply;
    }
  )
  // console.log("list", araydply);

  return araydply.map((dplmt) => {
    return(
      <li
        key ={dplmt.id}
      >
        {dplmt.studyid},
        {dplmt.id},
        {dplmt.name},
        {dplmt.goal_samplesize},
        {dplmt.current_samplesize},
        {dplmt.researchStation_id},
        {dplmt.Status},
        {dplmt.dateCreated},
        {dplmt.dateModified}
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
    dplmts: state.activestudy.deploymentList,
    user: state.activestudy
  }
}



export default connect(mapStateToProps)(DeploymentList);
