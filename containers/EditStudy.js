import React from 'react'
import { connect } from 'react-redux'
import { editStudy } from '../actions'
// <input
//   ref={node => {
//     input = node
//   }}
// />
let EditStudy = ({ dispatch }) => {
  let inputType
  let inputId
  let inputTitle
  let inputOwner
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
          dispatch(editStudy(inputTitle.value, inputType.value, inputId.value, inputOwner.value,
            inputLastModified.value, inputExperimentScript.value, inputResources.value, inputProtocol.value,
            inputEquipment.value))
          inputId.value = '';

          let index;
          for(let i = 0; i < window.store.getState().studies.length; i++){
            if(window.store.getState().studies[i].id === inputId.value){
                index = i;
            }
          }

          fetch('http://rest.learncode.academy/api/mmozgovoy/studies/5ae9ee0279f71d000f94fcf7', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(window.store.getState().studies[0]),
    })
    .then((response) => {
      console.log("Update success!", response.status); //returns 200 ok
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
        <button type="submit">Edit Study</button>
      </form>
    </div>
  )
}

EditStudy = connect()(EditStudy)

export default EditStudy
