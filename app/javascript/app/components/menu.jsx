import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Menu extends Component {
  componentDidMount() {
    const filterBar = document.getElementsByClassName('filter-bar')[0];
    const startLivestreamBtn = document.getElementsByClassName('start-livestream')[0];
    const connectedAccountsTitle = document.getElementsByClassName('connected-accounts-title')[0];

    const margin = filterBar.offsetHeight - startLivestreamBtn.offsetHeight;
    connectedAccountsTitle.style.marginTop = `${margin}px`;
  }

  render() {
    return (
      <div className="menu">
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
    );
  }
}

export default Menu;
