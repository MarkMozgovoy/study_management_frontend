export const ADD_STUDY = 'ADD_STUDY';
export const EDIT_STUDY = 'EDIT_STUDY';
export const ADD_DEPLOYMENT = 'ADD_DEPLOYMENT';
export const EDIT_DEPLOYMENT = 'EDIT_DEPLOYMENT';

//TODO add other parameters if necessary
export function addStudy(title, studyType, id, owner, creationDate, modificationDate, experimentScript, resourcesData, protocol, equipment){
  return {type: ADD_STUDY, title, studyType, id, owner, creationDate, modificationDate, experimentScript, resourcesData, protocol, equipment}
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

//TODO add other actions as necessary
