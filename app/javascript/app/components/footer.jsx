import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ASSETS
import Fire from 'images/fire.svg';
// import SunsetGradient from 'images/sunset-gradient.svg';
import Wave from 'images/footer-wave.svg';

class Footer extends Component {
  renderSignout = () => {
    const { pageContext } = this.props;
    if (pageContext === "dashboard") {
      return (
        <a
          href="/signout"
          data-method="delete"
          rel="nofollow"
        >
          Sign out
        </a>
      );
    }
  }

  render() {
    return (
      <footer>
        <div className="pink-glow"></div>
        <div className="footer-content">
          <img src={Wave} className="wave" alt="" />
          <div className="dark-glow"></div>
          <div className="container custom-body-container custom-footer-container">
            <div className="footer-content-menu">
              <a href="mailto:jonas.vanbuel@gmail.com">Contact us</a>
              {this.renderSignout()}
            </div>
          </div>
        </div>
        <div className="footer-message">
          <div className="container custom-body-container custom-footer-container">
            <span>Made with</span>
            <img src={Fire} className="fire" alt="" />
            <span>
              in
              <a
                href="https://earth.google.com/web/search/London,+UK/@51.51266173,0.16408392,409.20483379a,16146347.40786552d,35y,-0h,0t,0r/data=CnUaSxJFCiUweDQ3ZDhhMDBiYWYyMWRlNzU6MHg1Mjk2M2E1YWRkZDUyYTk5GU-M0d_wwElAIYByJUxiWsC_KgpMb25kb24sIFVLGAIgASImCiQJgimtn8FaRUARC_hGOqVyKEAZD0OZ_cRLVkAhHQenUPsdVMA"
                target="_blank"
                rel="noopener noreferrer"
              >
                London
              </a>
              and
              <a
                href="https://earth.google.com/web/search/Antwerpen,+Belgium/@51.26037733,4.35771715,659.62876022a,18142826.18710041d,35y,0h,0t,0r/data=Cn0aUxJNCiUweDQ3YzNmNjhlYmZjMzg4N2Q6MHgzZWFmNDQ4NDgyYTg4YWI4GTDYDdsWnElAIeo6-ZkfnBFAKhJBbnR3ZXJwZW4sIEJlbGdpdW0YAiABIiYKJAlClR6r6-I1QBE_lR6r6-I1wBnICslf2NBlQCGl-FTBnFZUwA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Antwerp
              </a>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
