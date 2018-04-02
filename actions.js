export const ADD_STUDY = 'ADD_STUDY';
export const EDIT_STUDY = 'EDIT_STUDY';

//TODO add other parameters if necessary
export function addStudy(title, studyType, id, owner, creationDate, modificationDate, experimentScript, resourcesData, protocol, equipment){
  return {type:ADD_STUDY, title, studyType, id, owner, creationDate, modificationDate, experimentScript, resourcesData, protocol, equipment}
}

export function editStudy(title, studyType, owner, modificationDate, experimentScript, resourcesData, protocol, equipment){
  return {type: EDIT_STUDY, title, studyType, owner, modificationDate, experimentScript, resourcesData, protocol, equipment}
}
