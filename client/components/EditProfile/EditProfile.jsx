import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import './editprofile.css'

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
      activeEdit: false,
      [event.target.name]: event.target.value
    })
  }
  render () {
    return (
      <React.Fragment>
        <form>
          <textarea value={this.state.name} onChange={this.handleChange}
            name={name} disabled={!this.state.activeEdit}></textarea>
        </form>
        <button onClick={this.handleSubmit}> submit </button>
        <button onClick={this.handleEdit}> edit </button>
      </React.Fragment>
    )
  }
}
