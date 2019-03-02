import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false,
    skills:''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

    handleChange = event => {
    this.setState({ skills: event.target.value });
  }

  handleSubmit () {
    console.log('hit me')
    this.setState({skills: event.target.value, open: false })
  }
  render() {
    return (
      <div>
        <Button 
          variant="outlined" 
          color="primary" 
          onClick={this.handleClickOpen}>
          EDIT
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Skills</DialogTitle>
          <DialogContent>
            <DialogContentText>
              What are some of your skills?
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              value={this.state.skills}
              onChange={this.handleChange}
              label="skills"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}





// import React, {Component} from 'react'
// import TextField from '@material-ui/core/TextField'
// import './editprofile.css'

// export default class EditProfile extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       activeEdit: true,
//       name: ''
//     }
//     this.handleEdit = this.handleEdit.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   }
//   handleEdit () {
//     console.log('hit me')
//     this.setState({
//       activeEdit: true,
//     })
//   }
//   handleSubmit () {
//     console.log('hit me')
//     this.setState({
//       activeEdit: false,
//       name: event.target.value
//     })
//   }
//   render () {
//     return (
//       <React.Fragment>
//         <form>
//         <input value={this.state.name} onChange={this.handleChange}/>
//           <textarea value={this.state.name} onChange={this.handleChange}
//             name={name} disabled={!this.state.activeEdit}></textarea>
//         </form>
//         <button onClick={this.handleSubmit}> submit </button>
//         <button onClick={this.handleEdit}> edit </button>
//       </React.Fragment>
//     )
//   }
// }
