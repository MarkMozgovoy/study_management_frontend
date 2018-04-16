import React from 'react'
import { connect } from 'react-redux'
import { addDeployment} from '../actions'

let AddDeployment = ({ dispath }) => {
  let input

  return (
    <div>
      <form>
// adding deployment form
        <button type="submit">
          Add Deployment
        </button>
      </form>
    </div>
  )
}
AddDeployment = connect()(AddDeployment)

export default AddDeployment
