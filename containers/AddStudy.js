import React from 'react'
import { connect } from 'react-redux'
import { addStudy, clearState } from '../actions'
// <input
//   ref={node => {
//     input = node
//   }}
// />
let AddStudy = ({ dispatch }) => {
  let inputTitle
  let inputExperimentScript
  let inputResources
  let inputDescription
  let inputEquipment1
  let inputEquipment2
  let inputExperimentSkip
  let experiment

//TODO fix trim
  return (
    <div>
      <form onSubmit = { e => {
        e.preventDefault()
        // if (!inputTitle.value.trim()) {
        //     return
        //   }
          //inputId.value = '';

          let listOfEquipment = [];
          if(document.getElementById("equipment1").checked){
            listOfEquipment.push({
              "equipmentId": "EQUIPMENT:1ce35761-867d-4d02-9706-ce516c5df4ae",
              "name": "Electrocardiogram",
              "abbreviation": "EKG"
            })
          }
          if(document.getElementById("equipment2").checked){
            listOfEquipment.push({
              "equipmentId": "EQUIPMENT:149a2e8b-7774-47ad-97c3-6c9ea3aa5f9c",
              "name": "Eye Tracking",
              "abbreviation": "ET"
            })
          }

          //logic for submitting a file
          if(inputExperimentScript != null){
            experiment = inputExperimentScript;
          } else if(inputExperimentSkip === ''){
            var sampleFile = new XMLHttpRequest();
            var data;
            sampleFile.open("GET", "../experiment.osexp", false);
            sampleFile.onreadystatechange = function ()
            {
                if(sampleFile.readyState === 4)
                {
                    if(sampleFile.status === 200 || sampleFile.status == 0)
                    {
                        data = sampleFile.responseText;
                        //alert(allText);
                    }
                }
            }
            sampleFile.send(null);
            var file = new Blob([data], {type : ".osexp"});
            experiment = file;
          } else {
            var sampleFile = new XMLHttpRequest();
            var data;
            sampleFile.open("GET", "../experiment.osexp", false);
            sampleFile.onreadystatechange = function ()
            {
                if(sampleFile.readyState === 4)
                {
                    if(sampleFile.status === 200 || sampleFile.status === 0)
                    {
                        data = sampleFile.responseText;
                        //alert(allText);
                    }
                }
            }
            sampleFile.send(null);
            var file = new Blob(["set skip " + inputExperimentSkip.value, data], {type : ".osexp"});
            experiment = file;
          }

          fetch('http://localhost:5000/studies', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name: inputTitle.value, description: inputDescription.value, equipmentList: listOfEquipment}),
          })
          .then(response => response.json()) // response.json() returns a promise
          .then((response) => {
            console.log("You saved this item", response); //returns the new item along with its ID
          })

          let studyArr = [];
          fetch('http://localhost:5000/studies')
              .then(response => response.json()) // response.json() returns a promise
              .then((response) => {
                console.log("Returned Studies", response); //returns all of johnbob's friends
                studyArr = response;
                dispatch(clearState());
                for (let i = 0; i < studyArr.length; i++){
                  dispatch(addStudy(studyArr[i].name, studyArr[i].studyId, studyArr[i].dateCreated, studyArr[i].status,
                    studyArr[i].dateModified, studyArr[i].description, studyArr[i].equipmentList, studyArr[i].deploymentList,
                     studyArr[i].archived))
                }
              })
      }}>
        <div>Title: <input type = "text" id = "title" ref={node => {
          inputTitle = node
        }} /></div>
        <div>Experiment Script: <input type = "file" id = "script" ref={node => {
          inputExperimentScript = node
        }} /></div>
        <div>Experiment Variable (Skip): <input type = "text" id = "scriptVariable" ref={node => {
          inputExperimentSkip = node
        }} /></div>
        <div>Resources: <input type = "file" id = "resources" ref={node => {
          inputResources = node
        }} /></div>
        <div>Description: <input type = "text" id = "protocol" ref={node => {
          inputDescription = node
        }} /></div>
        <div>Equipment:
          <div><input type = "checkbox" id = "equipment1" ref={node => {inputEquipment1 = node}} />EKG</div>
          <div><input type = "checkbox" id = "equipment2" ref={node => {inputEquipment2 = node}} />ET</div>
        </div>
        <button type="submit">Add Study</button>
      </form>
    </div>
  )
}

AddStudy = connect()(AddStudy)

export default AddStudy
