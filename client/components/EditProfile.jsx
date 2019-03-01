import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'

export default class EditProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeEdit: false
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEdit () {
    console.log('hit me')
    this.setState({
      activeEdit: true
    })
  }
  handleSubmit () {
    console.log('hit me')
    this.setState({
      activeEdit: false
    })
  }
  render () {
    return (
      <React.Fragment>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline = {!this.state.activeEdit}
          disabled = {this.state.activeEdit}
          rowsMax="4"
          margin="normal"
        />
        <button onClick={this.handleSubmit}> submit </button>
        <button onClick={this.handleEdit}> edit </button>
      </React.Fragment>
    )
  }
}
