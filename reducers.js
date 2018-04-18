import { combineReducers } from 'redux'
import {
  ADD_STUDY,
  EDIT_STUDY,
  ADD_DEPLOYMENT,
  EDIT_DEPLOYMENT
} from './actions'

//TODO initialize state out here to make it not initialize as empty

//STATE will be as follows: [accesstoken, idtoken, viewcondition, ...studies]

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
          equipment: [],
          deployments: [],

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
            equipment: []
          })
        }
        return study
      })

    default:
      return state
  }
}

//TODO by gabby
function deployments(state = [], action) {
  switch (action.type) {
    case ADD_DEPLOYMENT:
      return [
        ...state,
        {
          studyid: action.studyid,
          id: action.id,
          goal_samplesize: action.goal_samplesize,
          current_samplesize: action.current_samplesize,
          researchStation_id: action.researchStation_id,
          status: action.status,
          dateCreated: action.dateCreated,
          dateModified: action.dateModified
        }
      ]
    case EDIT_DEPLOYMENT:
      return state.map((deployment, index) => {
        if (deployment.id === action.id) {
          return Object.assign({}, deployment, {
            current_samplesize: action.current_samplesize,
            status: action.status,
            modificationDate: action.modificationDate
          })
        }
        return deployment
      })

    default:
      return state
  }
}
//TODO add other reducers to the combineReducers function
const studyApp = combineReducers({
  studies, deployments
})
 
export default studyApp
