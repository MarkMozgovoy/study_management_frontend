import React, {Component} from 'react'
import {connect} from 'react-redux'
import ListOfDeployments from '../containers/listofdeployments'
import AddDeployment from '../containers/AddDeployment'
import { addStudy, clearState } from '../actions'

import {bindActionCreators} from 'redux'


class StudyDetail extends Component {


  render() {
    let inputTitle
    let inputExperimentScript
    let inputResources
    let inputDescription
    let inputEquipment11
    let inputEquipment22
    let inputOwner
    let inputStatus
    let experiment

    if (!this.props.user) {
      return (<h4>Select a view</h4>);
    }

      return (
        <div>
        <div>
          <form onSubmit = { e => {
            e.preventDefault()
            // if (!inputTitle.value.trim()) {
            //     return
            //   }
              //inputId.value = '';[

              let listOfEquipment = [];
              if(document.getElementById("equipment11").checked){
                listOfEquipment.push({
                  "equipmentId": "EQUIPMENT:1ce35761-867d-4d02-9706-ce516c5df4ae",
                  "name": "Electrocardiogram",
                  "abbreviation": "EKG"
                })
              }
              if(document.getElementById("equipment22").checked){
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

              fetch('http://localhost:5000/studies/' + this.props.user.studyId + '/permissions', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({userId: inputOwner.value, studyId: this.props.user.studyId}),
              })
              .then(response => response.json()) // response.json() returns a promise
              .then((response) => {
                console.log("Owner added", response); //returns the new item along with its ID
              })

              fetch('http://localhost:5000/studies/' + this.props.user.studyId + '', {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({studyId: this.props.user.studyId, name: inputTitle.value, description: inputDescription.value, equipmentList: listOfEquipment, dateCreated: this.props.user.dateCreated, dateModified: this.props.user.dateModified, status: inputStatus.value}),
              })
              .then((response) => {
                console.log("Update success!", response.status); //returns 200 ok
              })

              let studyArr = [];
              fetch('http://localhost:5000/studies')
                  .then(response => response.json()) // response.json() returns a promise
                  .then((response) => {
                    console.log("Returned Studies", response); //returns all of johnbob's friends
                    studyArr = response;
                    dispatch(this.props.actions.clearState());
                    for (let i = 0; i < studyArr.length; i++){
                      dispatch(this.props.actions.addStudy(studyArr[i].name, studyArr[i].studyId, studyArr[i].dateCreated, studyArr[i].status,
                        studyArr[i].dateModified, studyArr[i].description, studyArr[i].equipmentList, studyArr[i].deploymentList,
                         studyArr[i].archived))
                    }
                  })
          }}>
            <div>Study ID: {this.props.user.studyId}</div>
            <div>Title: <input type = "text" name = "title" ref={node => {
              inputTitle = node
            }} />{this.props.user.name}</div>
            <div>Add Owner: <input type = "text" id = "newowner" ref={node => {
              inputOwner = node
            }} /></div>
            <div>Status: <input type = "text" id = "stats" ref={node => {
              inputStatus = node
            }} />{this.props.user.status}</div>
            <div>Experiment Script: <input type = "file" id = "script" ref={node => {
              inputExperimentScript = node
            }} /></div>
            <div>Resources: <input type = "file" id = "resources" ref={node => {
              inputResources = node
            }} /></div>
            <div>Description: <input type = "text" id = "protocol" ref={node => {
              inputDescription = node
            }} />{this.props.user.description}</div>
            <div>Date Created: {this.props.user.dateCreated} </div>
            <div>Date Modified: {this.props.user.dateModified} </div>
            <div>Equipment:
              <div><input type = "checkbox" id = "equipment11" ref={node => {inputEquipment11 = node}} />EKG, {((this.props.user.equipmentList.length > 0 && this.props.user.equipmentList[0].abbreviation === "EKG")) ? "has EKG" : ""}</div>
              <div><input type = "checkbox" id = "equipment22" ref={node => {inputEquipment22 = node}} />ET, {((this.props.user.equipmentList.length > 0 && this.props.user.equipmentList[0].abbreviation === "ET") || (this.props.user.equipmentList.length > 1 && this.props.user.equipmentList[1].abbreviation === "ET")) ? "has ET" : ""}</div>
            </div>
            <button type="submit">Edit Study</button>
          </form>
        </div>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({clearState: clearState, addStudy: addStudy}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudyDetail);
