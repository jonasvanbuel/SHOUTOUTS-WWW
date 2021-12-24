// DEPENDENCIES
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ASSETS
// import Logo from 'images/logo_v1.svg';

// COMPONENTS
import LogoIframe from '../../app/components/logo-iframe/logo-iframe';

// HELPERS
import scrollLogo from '../../app/helpers/_scroll_logo';
// import placeHamburger from '../helpers/_place_hamburger';

class NavbarLogin extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="navbar">
        <div className="login-container">
          <LogoIframe />
        </div>
      </div>
    );
  }
}

export default NavbarLogin;
