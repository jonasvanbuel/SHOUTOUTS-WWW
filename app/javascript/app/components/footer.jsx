import React, { Component } from 'react';

// HELPERS
// import getWidth from '../helpers/_get_width';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-menu">
            <ul>
              <li>Contact us</li>
              <li>Instagram</li>
              <li>Github</li>
              <li>Sign out</li>
            </ul>
          </div>
          <div className="footer-message">
            Made with <span>love</span> in London
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

