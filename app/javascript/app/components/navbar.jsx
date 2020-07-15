import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ASSETS
import Logo from 'images/logo_v1.svg';

// HELPERS
import scrollLogo from '../helpers/_scroll_logo';

class Navbar extends Component {
  componentDidMount() {
    scrollLogo();
  }

  render() {
    return (
      <div className="navbar">
        <img src={Logo} className="navbar-logo" alt="" />
      </div>
    );
  }
}

export default Navbar;
