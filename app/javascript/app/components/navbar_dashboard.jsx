// DEPENDENCIES
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ASSETS
// import Logo from 'images/logo_v1.svg';

// COMPONENTS
import LogoIframe from './logo-iframe/logo-iframe';

// HELPERS
import scrollLogo from '../helpers/_scroll_logo';
// import placeHamburger from '../helpers/_place_hamburger';

class NavbarDashboard extends Component {
  componentDidMount() {
    // Add scroll behaviour when on dashboard
    const { type } = this.props;
    if (type === "navbar-dashboard") {
      scrollLogo();
    }
  }

  render() {
    return (
      <div className="navbar">
        <div className="container custom-body-container">
          <div className="menu">
            <LogoIframe />
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarDashboard;
