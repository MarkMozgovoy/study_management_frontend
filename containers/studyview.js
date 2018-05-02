import React, {Component} from 'react'
import {connect} from 'react-redux'
import ListOfDeployments from '../containers/listofdeployments'
import AddDeployment from '../containers/AddDeployment'

class StudyDetail extends Component {
  render() {
    if (!this.props.user) {
      return (<h4>Select a view</h4>);
    }
      return (
        <div>
        <h2>{this.props.user.id}</h2>
        <h2>{this.props.user.studyType}</h2>
        <h2>{this.props.user.title}</h2>
        <h2>{this.props.user.owner}</h2>
        <ListOfDeployments />
        <AddDeployment />
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activestudy
  };
}

export default connect(mapStateToProps)(StudyDetail);
