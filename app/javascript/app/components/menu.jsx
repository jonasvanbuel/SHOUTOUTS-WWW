import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Menu extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="menu">
        <div className="submenu-top">
          <a href="/live" target="_blank" className="start-livestream">
            start livestream
          </a>
          <div className="connected-accounts-title">
            connected accounts:
          </div>
          <a href="https://www.instagram.com/mariotestino" target="_blank" className="connected-accounts">
            @mariotestino
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
