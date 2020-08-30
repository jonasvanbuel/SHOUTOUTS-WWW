import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es';
import Frame from 'react-frame-component';

// ASSETS
import Foreground from 'images/logo_w_shadows/logo_fg_4.png';
import Pattern from 'images/logo_v2_bg.svg';

class LogoIframe extends Component {
  renderScript() {
    return (
      `<script>
        const findMeDiv = document.getElementById("find-me-div");
        findMeDiv.innerText = "NEW STRING!";
      </script>`
    )
  }

  componentDidMount() {
    // anime({
    //   targets: '.logo-pattern',
    //   translateX: 100,
    //   duration: 30000,
    //   loop: true,
    //   direction: 'alternate',
    //   easing: 'linear'
    // });
  }

  render() {
    // const script = this.renderScript();
    const initialContent = `<!DOCTYPE html><html><head>${document.head.innerHTML}</head><body><div></div>${this.renderScript()}</body></html>`;

    return (
      <Frame initialContent={initialContent} contentDidMount={this.renderScript} scrolling="no" >
        <div className="logo-container-iframe">
          <img src={Foreground} className="logo-foreground" alt="" />
          <img src={Pattern} className="logo-pattern" alt="" />
        </div>
      </Frame>
    );
  }
}

export default LogoIframe;
