import React from 'react'
import AddDeployment from '../containers/AddDeployment'
import AddStudy from '../containers/AddStudy'
import ListOfStudies from '../containers/listofstudies'
import ListOfDeployments from '../containers/listofdeployments'
import Studyview from '../containers/studyview'
// import ViewDeployments from '../containers/ViewDeployments'

//TODO use conditional rendering to make sure only one of the following is displayed
// -- applied conditional rendering -- //
class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddStudyClick = this.handleAddStudyClick.bind(this);
    this.handleListOfStudiesClick = this.handleListOfStudiesClick.bind(this);
    // this.handleViewStudyClick = this.handleViewStudyClick.bind(this);
    this.state = { isAddingstudy: false };
    // this.state = { isViewingstudy: false };
    // console.log("state:", this.state.isViewingstudy);
  }

  handleAddStudyClick() {
    this.setState({ isAddingstudy: true });
    console.log("state:", this.state.isAddingstudy);
  }
  // handleViewStudyClick() {
  //   this.setState({ isViewingstudy: false });
  // }
  handleListOfStudiesClick() {
    this.setState({ isAddingstudy: false });
    console.log("state:", this.state.isAddingstudy);
  }

  render() {
    const isAddingstudy = this.state.isAddingstudy;

    let button = null;
    if (isAddingstudy) {
      button = <ListOfStudiesButton onClick={this.handleListOfStudiesClick} />;
    } else {
      button = <AddStudyButton onClick={this.handleAddStudyClick} />;
    }
    return (

      <div>
        <Greeting isAddingstudy={isAddingstudy} />
        {button}
      </div>
    );
  }
}

function AddStudyContainer(props) {
  return <AddStudy />;
}
// function ViewStudyContainer(props) {
//   return <Studyview />;
// }
function ListOfStudiesContainer(props) {
  return <ListOfStudies />;
}

function Greeting(props) {
  const isAddingstudy = props.isAddingstudy;
  // const isViewingstudy = props.isViewingstudy;
  if (isAddingstudy) {
    return <AddStudyContainer />;
  }
  return <ListOfStudiesContainer />;
}

function AddStudyButton(props) {
  return (
    <button onClick={props.onClick}>
      Create Study
    </button>
  );
}
// function ViewStudyButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Switch to View Study
//     </button>
//   );
// }

function ListOfStudiesButton(props) {
  return (
    <button onClick={props.onClick}>
    Back
    </button>
  );
}
// -- applied conditional rendering -- //
function mapStateToProps(state) {
  return {
    user: state.activestudy
  };
}

const App = () => (
  <div>
    <DashBoard />
    <Studyview />
  </div>
)

export default App
