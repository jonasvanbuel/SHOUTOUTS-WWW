import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ASSETS
import Logo from 'images/logo_v1.svg';

class Navbar extends Component {
  componentDidMount() {
    // Align logo to right of menu
    const menu = document.getElementsByClassName('menu')[0];
    const navbarLogo = document.getElementsByClassName('navbar-logo')[0];
    navbarLogo.style.marginLeft = `${menu.offsetWidth - navbarLogo.offsetWidth}px`;
  }

  render() {
    return (
      <div className="navbar">
        <div className="container">
          <img src={Logo} className="navbar-logo" alt="" />
        </div>
      </div>
    );
  }
}

export default Navbar;
