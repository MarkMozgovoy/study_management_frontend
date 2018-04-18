import React from 'react'
import { connect } from 'react-redux'
import { addStudy } from '../actions'

let AddStudy = ({ dispath }) => {
  let input

  return (
    <div>
      <form>
        <div>Type: <input type = "text" id = "type" /></div>
        <div>Id: <input type = "text" id = "id" /></div>
        <div>Owner: <input type = "text" id = "owner" /></div>
        <div>Date of Creation: <input type = "text" id = "doc" /></div>
        <div>Last Modified: <input type = "text" id = "lastmod" /></div>
        <div>Experiment Script: <input type = "text" id = "script" /></div>
        <div>Resources: <input type = "text" id = "resources" /></div>
        <div>Protocol: <input type = "text" id = "protocol" /></div>
        <div>Equipment: <input type = "text" id = "equipment" /></div>
        <button type="submit">Add Study</button>
      </form>
    </div>
  )
}

AddStudy = connect()(AddStudy)

export default AddStudy
