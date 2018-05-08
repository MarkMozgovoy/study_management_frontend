import React from 'react'
import { connect } from 'react-redux'
import { addDeployment} from '../actions'
// <input
//   ref={node => {
//     input = node
//   }}
// />

// var test;
// fetch('http://localhost:5000/studies')
//     .then(response => response.json()) // response.json() returns a promise
//     .then((response) => {
//       console.log("I have friends!", response); //returns all of johnbob's friends
//       test = response;
//       alert(JSON.stringify(test[0]));
//     })


let AddDeployment = ({ dispatch }) => {
  let inputStudyid
  let inputId
  let inputName
  let inputGoal_samplesize
  let inputCurrent_samplesize
  let inputResearchStation_id
  let inputStatus
  let inputDateCreated
  let inputDateModified


//TODO fix trim
  return (
    <div>
      <form onSubmit = { e => {
        e.preventDefault()
        if (!inputStudyid.value.trim()) {
            return
          }
          dispatch(addDeployment(inputStudyid.value, inputId.value, inputName.value, inputGoal_samplesize.value, inputCurrent_samplesize.value,
            inputResearchStation_id.value, inputStatus.value, inputDateCreated.value, inputDateModified.value))
          inputId.value = '';
          fetch('http://rest.learncode.academy/api/mmozgovoy/deployments', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(window.store.getState().activestudy[window.store.getState().activestudy.deployments.length-1]),
    })
    .then(response => response.json()) // response.json() returns a promise
    .then((response) => {
      console.log("You saved this item", response); //returns the new item along with its ID
    })
      }}>
        <div>Study ID: <input type = "text" id = "studyid" ref={node => {
          inputStudyid = node
        }} /></div>
        <div>Id: <input type = "text" id = "id" ref={node => {
          inputId = node
        }} /></div>
        <div>Name: <input type = "text" id = "name" ref={node => {
          inputName = node
        }} /></div>
        <div>Goal Sample Size: <input type = "text" id = "goal_samplesize" ref={node => {
          inputGoal_samplesize = node
        }} /></div>
        <div>Current Sample Size: <input type = "text" id = "current_samplesize" ref={node => {
          inputCurrent_samplesize = node
        }} /></div>
        <div>Research Station Id: <input type = "text" id = "researchStation_id" ref={node => {
          inputResearchStation_id = node
        }} /></div>
        <div>Status: <input type = "text" id = "Status" ref={node => {
          inputStatus = node
        }} /></div>
        <div>Date_created: <input type = "text" id = "dateCreated" ref={node => {
          inputDateCreated = node
        }} /></div>
        <div>Date_mod: <input type = "text" id = "dateModified" ref={node => {
          inputDateModified = node
        }} /></div>
        <button type="submit">Add Deployment</button>
      </form>
    </div>
  )
}

AddDeployment = connect()(AddDeployment)

export default AddDeployment
