// DEPENDENCIES
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ASSETS
// import Logo from 'images/logo_v1.svg';

// COMPONENTS
import Logo from './logo';

// HELPERS
import scrollLogo from '../helpers/_scroll_logo';
import placeHamburger from '../helpers/_place_hamburger';

class Navbar extends Component {
  componentDidMount() {
    scrollLogo();
    placeHamburger();
  }

  render() {
    return (
      <div className="navbar">
        <i className="fas fa-bars"></i>
        <Logo />
      </div>
    );
  }
}

export default Navbar;
