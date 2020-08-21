import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es';

// ASSETS
import Foreground from 'images/logo_fg_184x256.svg';
import Pattern from 'images/logo_v2_bg.svg';

class Logo extends Component {
  componentDidMount() {
    anime({
      targets: '.logo-pattern',
      translateX: 100,
      duration: 30000,
      loop: true,
      direction: 'alternate',
      easing: 'linear'
    });
  }

  render() {
    return (
      <div className="logo-container">
        <img src={Foreground} className="logo-foreground" alt="" />
        <img src={Pattern} className="logo-pattern" alt="" />
      </div>
    );
  }
}

export default Logo;
