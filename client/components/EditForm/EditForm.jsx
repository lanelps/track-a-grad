import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './editform.css'

export default class EditForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    cohort: '',
    cv_link: '',
    github: '',
    skills: '',
    peerReview: '',
    workExperience: '',
    education: '',
    portfolio: '',
        
  };
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit () {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <React.Fragment>
          <div className="container">
            <img className="logo" src='../../images/trackergrad-logo.png' alt="tracker"/>
              <div className="titleWrapper">
                <span className='Title'><h1>Graduate Profile Page</h1> </span>
                <span className="subtitle">Edit Mode</span>

        <form>
          <h2>ABOUT YOU</h2>
            <TextField id="standard-dense" margin="dense" className="input" name='firstName' value={this.state.firstName} onChange={this.handleChange} type='text' placeholder='First Name'/> 
            <TextField id="standard-dense" margin="dense" className="input"  name='lastName' value={this.state.lastName} onChange={this.handleChange} type='text' placeholder='Last Name'/> <br/>
            <TextField id="standard-dense" margin="dense" className="input"  name='cohort' value={this.state.cohort} onChange={this.handleChange} type='text' placeholder='In which cohort did you attend Dev Academy'/><br/>
            <Button variant="outlined" color="primary" onClick={this.handleSubmit}>Drop Picture </Button>

            <h2>CONTACT INFORMATION</h2>
            <TextField id="standard-dense" margin="dense" className="input"  name='email' value={this.state.email} onChange={this.handleChange} type='text' placeholder='Email'/><br/>
              <TextField id="standard-dense" margin="dense" className="input"  name='cv_link' value={this.state.cv_link} onChange={this.handleChange} type='text' placeholder='Insert link to CV or LinkedIn Profile'/><br/>
            <TextField id="standard-dense" margin="dense" className="input"  name='github' value={this.state.github} onChange={this.handleChange} type='text' placeholder='Insert link to Github Profile'/> <br/>

          <h2>EDUCATION AND SKILLS</h2>
            <TextField id="standard-dense" margin="dense" className="input"  name='education' value={this.state.education} onChange={this.handleChange} type='text' placeholder='Education'/>    
            <TextField id="standard-dense" margin="dense" className="input"  name='skills' value={this.state.skills} onChange={this.handleChange} type='text' placeholder='Insert Specific Programming Languages, Libraries or Competencies'/>

          <h2>WORK</h2>
            <TextField id="standard-dense" margin="dense" className="input"  name='peerReview' value={this.state.peerReview} onChange={this.handleChange} type='text' placeholder='Insert Peer Review'/>
            <TextField id="standard-dense" margin="dense" className="input"  name='workExperience' value={this.state.workExperience} onChange={this.handleChange} type='text' placeholder='Insert Work Experience'/>
            <TextField id="standard-dense" margin="dense" className="input"  name='accomplishments' value={this.state.accomplishments} onChange={this.handleChange} type='text' placeholder='Accomplishments'/>   
            <TextField id="standard-dense" margin="dense" className="input"  name='portfolio' value={this.state.portfolio} onChange={this.handleChange} type='text' placeholder='Portfolio'/>  <br/>
          <Button variant="outlined" color="primary" onClick={this.handleSubmit}>Update Profile </Button>
        </form>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

// Need to link the update button to dispatch an action to the store to do a PUT request to the database on any fields that have been changed.
// We will need to bring in the data that is in the database as the existing state otherwise the submit button may delete the existing state information.