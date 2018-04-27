import React from 'react'
import AddDeployment from '../containers/AddDeployment'
import AddStudy from '../containers/AddStudy'
//import ViewDeployments from '../containers/ViewDeployments'

//TODO use conditional rendering to make sure only one of the following is displayed
// -- applied conditional rendering -- //
class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddStudyClick = this.handleAddStudyClick.bind(this);
    this.handleAddDeploymentClick = this.handleAddDeploymentClick.bind(this);
    this.state = { isAddingstudy: true };
  }

  handleAddStudyClick() {
    this.setState({ isAddingstudy: true });
  }

  handleAddDeploymentClick() {
    this.setState({ isAddingstudy: false });
  }

  render() {
    const isAddingstudy = this.state.isAddingstudy;

    let button = null;
    if (isAddingstudy) {
      button = <AddDeploymentButton onClick={this.handleAddDeploymentClick} />;
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

function AddDeploymentContainer(props) {
  return <AddDeployment />;
}

function Greeting(props) {
  const isAddingstudy = props.isAddingstudy;
  if (isAddingstudy) {
    return <AddStudyContainer />;
  }
  return <AddDeploymentContainer />;
}

function AddStudyButton(props) {
  return (
    <button onClick={props.onClick}>
      Switch to add Study
    </button>
  );
}

function AddDeploymentButton(props) {
  return (
    <button onClick={props.onClick}>
    Switch to add Deployment
    </button>
  );
}
// -- applied conditional rendering -- //


const App = () => (
  <div>

    <DashBoard />
  </div>
)

export default App
