import React from 'react'
import {connect} from 'react-redux'

function Viewinfo (props) {
  return (
    <div>
      <h1>{props.skills}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills
  }
}

export default connect(mapStateToProps)(Viewinfo)
