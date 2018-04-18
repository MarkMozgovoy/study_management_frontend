import React from 'react'
import AddDeployment from '../containers/AddDeployment'
import AddStudy from '../containers/AddStudy'
//import ViewDeployments from '../containers/ViewDeployments'

//TODO use conditional rendering to make sure only one of the following is displayed
const App = () => (
  <div>
    <AddStudy />
    <AddDeployment />
    <h1>HELLO!</h1>
  </div>
)

export default App
