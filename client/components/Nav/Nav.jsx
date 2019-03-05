import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HamburgerMenu from 'react-hamburger-menu'
import './nav.css'



export default class Nav extends Component {
  state = {
    anchorEl: null,
    open: false
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleHamburgerMenu() {
    this.setState({
        open: !this.state.open
    });
}

  render() {
    const { anchorEl } = this.state;
    return (
      <React.Fragment>
      <div className="navWrapper">
        <div className="navlogo">
          <img src='../../images/trackergrad-logo.png' alt="tracker"/>
        </div>
        <div className="menu">
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
      <HamburgerMenu
    open={this.state.open}
    onClick={this.handleHamburgerMenu.bind(this)}
    width={30}
    height={15}
    strokeWidth={1}
    color='white'
    animationDuration={0.5}
/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}><Link to="/login">Sign In</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to="/registration">Register</Link></MenuItem>
          <MenuItem onClick={this.handleClose}> <Link to="/">Graduate Feed</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to="/graduateprofile">Profile</Link></MenuItem>
          
        </Menu>
        </div>
      </div>
    </React.Fragment>
    )
  }
}
