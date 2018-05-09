export const ADD_STUDY = 'ADD_STUDY';
export const EDIT_STUDY = 'EDIT_STUDY';
export const ADD_DEPLOYMENT = 'ADD_DEPLOYMENT';
export const EDIT_DEPLOYMENT = 'EDIT_DEPLOYMENT';
export const CLEAR_STATE = 'CLEAR_STATE';

//TODO add other parameters if necessary
export function addStudy(name, studyId, dateCreated, status, dateModified, description, equipmentList, deploymentList, archived){
  return {type: ADD_STUDY, name, studyId, dateCreated, status, dateModified, description, equipmentList, deploymentList, archived}
}

export function editStudy(title, studyType, owner, modificationDate, experimentScript, resourcesData, protocol, equipment){
  return {type: EDIT_STUDY, title, studyType, id, owner, modificationDate, experimentScript, resourcesData, protocol, equipment}
}

export function addDeployment(studyid, id, name, goal_samplesize, current_samplesize, researchStation_id, status, dateCreated, dateModified){
  return {type:ADD_DEPLOYMENT, studyid, id, name, goal_samplesize, current_samplesize, researchStation_id, status, dateCreated, dateModified}
}

export function editDeployment(current_samplesize, status, modificationDate){
  return {type: EDIT_DEPLOYMENT, current_samplesize, status, modificationDate}
}

export function clearState(){
  return {type: CLEAR_STATE}
}

//TODO add other actions as necessary

export const selectStudy = (study) => {
  console.log("you clicked on study:", study.studyId);
  return {
    type: "STUDY_SELECTED",
    payload: study
  }
}
export const selectDeployment = (dplymnt) => {
  console.log("you clicked on deployment:", dplymnt.id);
  return {
    type: "DEPLOYMENT_SELECTED",
    payload: dplymnt
  }
}
