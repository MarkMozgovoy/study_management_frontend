import React from 'react'
import { connect } from 'react-redux'
import { addStudy } from '../actions'
// <input
//   ref={node => {
//     input = node
//   }}
// />
let AddStudy = ({ dispatch }) => {
  let inputType
  let inputId
  let inputTitle
  let inputOwner
  let inputDOC
  let inputLastModified
  let inputExperimentScript
  let inputResources
  let inputProtocol
  let inputEquipment

//TODO fix trim
  return (
    <div>
      <form onSubmit = { e => {
        e.preventDefault()
        if (!inputTitle.value.trim()) {
            return
          }
          dispatch(addStudy(inputTitle.value, inputType.value, inputId.value, inputOwner.value, inputDOC.value,
            inputLastModified.value, inputExperimentScript.value, inputResources.value, inputProtocol.value,
            inputEquipment.value))
          inputId.value = '';
          fetch('http://rest.learncode.academy/api/mmozgovoy/studies', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(window.store.getState().studies[window.store.getState().studies.length-1]),
    })
    .then(response => response.json()) // response.json() returns a promise
    .then((response) => {
      console.log("You saved this item", response); //returns the new item along with its ID
    })
      }}>
        <div>Type: <input type = "text" id = "type" ref={node => {
          inputType = node
        }} /></div>
        <div>Id: <input type = "text" id = "id" ref={node => {
          inputId = node
        }} /></div>
        <div>Title: <input type = "text" id = "title" ref={node => {
          inputTitle = node
        }} /></div>
        <div>Owner: <input type = "text" id = "owner" ref={node => {
          inputOwner = node
        }} /></div>
        <div>Date of Creation: <input type = "text" id = "doc" ref={node => {
          inputDOC = node
        }} /></div>
        <div>Last Modified: <input type = "text" id = "lastmod" ref={node => {
          inputLastModified = node
        }} /></div>
        <div>Experiment Script: <input type = "text" id = "script" ref={node => {
          inputExperimentScript = node
        }} /></div>
        <div>Resources: <input type = "text" id = "resources" ref={node => {
          inputResources = node
        }} /></div>
        <div>Protocol: <input type = "text" id = "protocol" ref={node => {
          inputProtocol = node
        }} /></div>
        <div>Equipment: <input type = "text" id = "equipment" ref={node => {
          inputEquipment = node
        }} /></div>
        <button type="submit">Add Study</button>
      </form>
    </div>
  )
}

AddStudy = connect()(AddStudy)

export default AddStudy
