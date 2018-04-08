import { combineReducers } from 'redux'
import {
  ADD_STUDY,
  EDIT_STUDY
} from './actions'

//TODO add/fix the reducers below, make sure the attributes of studies are correct
function studies(state = [], action) {
  switch (action.type) {
    case ADD_STUDY:
      return [
        ...state,
        {
          title: action.title,
          studyType: action.studyType,
          id: action.id,
          owner: action.owner,
          creationDate: action.creationDate,
          modificationDate: action.modificationDate,
          experimentScript: action.experimentScript,
          resourcesData: action.resourcesData,
          protocol: action.protocol,
          equipment: action.equipment
        }
      ]
    case EDIT_STUDY:
      return state.map((study, index) => {
        if (study.id === action.id) {
          return Object.assign({}, study, {
            title: action.title,
            studyType: action.studyType,
            owner: action.owner,
            modificationDate: action.modificationDate,
            experimentScript: action.experimentScript,
            resourcesData: action.resourcesData,
            protocol: action.protocol,
            equipment: action.equipment
          })
        }
        return study
      })

    default:
      return state
  }
}

//TODO add other reducers to the combineReducers function
const studyApp = combineReducers({
  studies
})
 
export default studyApp
