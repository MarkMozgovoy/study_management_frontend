import { combineReducers } from 'redux'
import {
  ADD_STUDY,
  ADD_DEPLOYMENT,
  EDIT_DEPLOYMENT,
  CLEAR_STATE
} from './actions'

//TODO initialize state out here to make it not initialize as empty

//STATE will be as follows: [accesstoken, idtoken, ...studies]

//TODO add/fix the reducers below, make sure the attributes of studies are correct

function studies(state = [], action) {
  switch (action.type) {
    case ADD_STUDY:
      return [
        ...state,
        {
          name: action.name,
          studyId: action.studyId,
          dateCreated: action.dateCreated,
          dateModified: action.dateModified,
          description: action.description,
          equipmentList: action.equipmentList,//will be array
          deploymentList: action.deploymentList,
          status: action.status,
          archived: action.archived
        }
      ]

      case CLEAR_STATE:
        return [];

      case ADD_DEPLOYMENT:
      return state.map((study, index) => {
        if (study.id === action.studyid) {
          return Object.assign({}, study, {
              deployments: [...study.deployments, {studyid: action.studyid,
              id: action.id,
              name: action.name,
              goal_samplesize: action.goal_samplesize,
              current_samplesize: action.current_samplesize,
              researchStation_id: action.researchStation_id,
              status: action.status,
              dateCreated: action.dateCreated,
              dateModified: action.dateModified,}]
          })
        }
        return study
      })

      //Just moved this here for now, it still needs to be changed
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

// -- comment -- //
function activestudy(state=null, action) {
  switch (action.type) {
      case "USER_SELECTED":
        return action.payload;
        break;
  }
  return state;
}



//TODO add other reducers to the combineReducers function
const studyApp = combineReducers({
  studies,
  activestudy
})
 
export default studyApp
