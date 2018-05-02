import React from 'react'
import PropTypes from 'prop-types'
import StudyListItem from './StudyListItem'


const StudyList = ({ studies }) => (
  <div>
    <ul>
      {studies.slice(0).map((study, index) => (
        <StudyListItem key={index} {...study} />
      ))}
    </ul>
  </div>
)
 

 
export default StudyList
