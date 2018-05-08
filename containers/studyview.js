import React, {Component} from 'react'
import {connect} from 'react-redux'
import ListOfDeployments from '../containers/listofdeployments'
import AddDeployment from '../containers/AddDeployment'
import { addStudy, clearState } from '../actions'


class StudyDetail extends Component {



  render() {
    let inputTitle
    let inputExperimentScript
    let inputResources
    let inputDescription
    let inputEquipment1
    let inputEquipment2



    if (!this.props.user) {
      return (<h4>Select a view</h4>);
    }

      return (
        <div>
        <div>
          <form onLoad = { e => {e.preventDefault()
            for(let i = 0; i < this.props.user.equipmentList.length; i++){
              if(this.props.user.equipmentList[i].abbreviation === "EKG"){
                document.getElementById("equipment11").checked = true;
              }
              if(this.props.user.equipmentList[i].abbreviation === "EYE"){
                document.getElementById("equipment22").checked = true;
              }
            }
          }
        }
            onSubmit = { e => {
            e.preventDefault()
            // if (!inputTitle.value.trim()) {
            //     return
            //   }
              //inputId.value = '';[

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
                  "abbreviation": "EYE"
                })
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
            <div>Title: <input type = "text" id = "title" defaultValue = {this.props.user.name} ref={node => {
              inputTitle = node
            }} /></div>
            <div>Experiment Script: <input type = "file" id = "script" ref={node => {
              inputExperimentScript = node
            }} /></div>
            <div>Resources: <input type = "file" id = "resources" ref={node => {
              inputResources = node
            }} /></div>
            <div>Description: <input type = "text" id = "protocol" defaultValue = {this.props.user.description} ref={node => {
              inputDescription = node
            }} /></div>
            <div>Equipment:
              <div><input type = "checkbox" id = "equipment11" ref={node => {inputEquipment1 = node}} />EKG</div>
              <div><input type = "checkbox" id = "equipment22" ref={node => {inputEquipment2 = node}} />EYE</div>
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

export default connect(mapStateToProps)(StudyDetail);
