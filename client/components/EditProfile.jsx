import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'

export default class EditProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeEdit: true,
      name: ''
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
          multiline = {this.state.activeEdit}
          disabled = {!this.state.activeEdit}
          rowsMax="5"
          margin="normal"
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}> submit </button>
        <button onClick={this.handleEdit}> edit </button>
      </React.Fragment>
    )
  }
}
