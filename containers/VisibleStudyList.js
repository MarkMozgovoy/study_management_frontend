import { connect } from 'react-redux'
import StudyList from './StudyList'
import ADD_STUDY_VIEW from '../reducers'
import DASH_VIEW from '../reducers'

const getStudies = (studies) => {
      return studies;
}
 
const mapStateToProps = state => {
  return {
    studies: getStudies(state.studies)
  }
}

 
const VisibleStudyList = connect(
  mapStateToProps
)(StudyList)
 
export default VisibleStudyList
