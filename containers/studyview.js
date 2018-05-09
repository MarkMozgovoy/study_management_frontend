import React, {Component} from 'react'
import {connect} from 'react-redux'
import ListOfDeployments from '../containers/listofdeployments'
import AddDeployment from '../containers/AddDeployment'
import { addStudy, clearState } from '../actions'


class StudyDetail extends Component {

  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render() {
    let inputTitle
    let inputExperimentScript
    let inputResources
    let inputDescription
    let inputEquipment11
    let inputEquipment22
    let inputOwner

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

              fetch('http://localhost:5000/studies', {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({name: inputTitle.value, description: inputDescription.value, equipmentList: listOfEquipment}),
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
                    dispatch(clearState());
                    for (let i = 0; i < studyArr.length; i++){
                      dispatch(addStudy(studyArr[i].name, studyArr[i].studyId, studyArr[i].dateCreated, studyArr[i].status,
                        studyArr[i].dateModified, studyArr[i].description, studyArr[i].equipmentList, studyArr[i].deploymentList,
                         studyArr[i].archived))
                    }
                  })
          }}>
            <div>Title: <input type = "text" id = "title" value = {this.props.user.name} onChange = {this.handleChange} ref={node => {
              inputTitle = node
            }} /></div>
            <div>Add Owner: <input type = "text" id = "newowner" ref={node => {
              inputOwner = node
            }} /></div>
            <div>Experiment Script: <input type = "file" id = "script" ref={node => {
              inputExperimentScript = node
            }} /></div>
            <div>Resources: <input type = "file" id = "resources" ref={node => {
              inputResources = node
            }} /></div>
            <div>Description: <input type = "text" id = "protocol" value = {this.props.user.description} onChange = {this.handleChange} ref={node => {
              inputDescription = node
            }} /></div>
            <div>Equipment:
              <div><input type = "checkbox" id = "equipment11" onChange = {this.handleChange} checked = {((this.props.user.equipmentList.length > 0 && this.props.user.equipmentList[0].abbreviation === "EKG") || (this.props.user.equipmentList.length > 1 && this.props.user.equipmentList[1].abbreviation === "EKG")) ? true : false} ref={node => {inputEquipment11 = node}} />EKG</div>
              <div><input type = "checkbox" id = "equipment22" onChange = {this.handleChange} checked = {((this.props.user.equipmentList.length > 0 && this.props.user.equipmentList[0].abbreviation === "ET") || (this.props.user.equipmentList.length > 1 && this.props.user.equipmentList[1].abbreviation === "ET")) ? true : false} ref={node => {inputEquipment22 = node}} />ET</div>
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
