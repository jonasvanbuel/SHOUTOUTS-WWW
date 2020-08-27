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
// import placeHamburger from '../helpers/_place_hamburger';

class Navbar extends Component {
  componentDidMount() {
    const { type } = this.props;
    if (type === "navbar-dashboard") {
      scrollLogo();
    }
  }

  render() {
    return (
      <div className="navbar">
        <Logo />
      </div>
    );
  }
}

export default Navbar;
