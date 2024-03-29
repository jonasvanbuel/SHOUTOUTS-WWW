import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es';
import Frame from 'react-frame-component';

// ASSETS
import Foreground from 'images/logo_w_shadows/logo_fg_4.png';
import Pattern from 'images/logo_v2_bg.svg';

class LogoIframe extends Component {
  componentDidMount() {
    // To make sure animation gets reloaded everytime, and not cached
    const iframeEl = document.getElementById('logo-iframe');
    iframeEl.contentWindow.location.reload(true);
  }

  renderScript() {
    return (
      `<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js" integrity="sha512-LfB+BcvR3zBt7ebVskhSWiSbEUiG3p5EcCprkieldsKhBeR6wpnLi0VpWC2GNgVGWP2n/skO8Bx2oKNjUhXCkw==" crossorigin="anonymous"></script>
      <script>
        const logoPatternAnimation = () => {
          console.log('logoPatternAnimation triggered...');
          anime({
            targets: '.logo-pattern',
            translateX: 100,
            duration: 30000,
            loop: true,
            direction: 'alternate',
            easing: 'linear'
          });
        }
        logoPatternAnimation();
      </script>`
    )
  }

  render() {
    // const script = this.renderScript();
    const initialContent = `<!DOCTYPE html><html><head>${document.head.innerHTML}<meta http-Equiv="Cache-Control" Content="no-cache" /><meta http-Equiv="Pragma" Content="no-cache" /><meta http-Equiv="Expires" Content="0" /></head><body style="background-color: white"><div></div>${this.renderScript()}</body></html>`;

    return (
      <Frame initialContent={initialContent} contentDidMount={this.renderScript} id="logo-iframe" scrolling="no" >
        <div className="logo-container-iframe">
          <img src={Foreground} className="logo-foreground" alt="" />
          <img src={Pattern} className="logo-pattern" alt="" />
        </div>
      </Frame>
    );
  }
}

export default LogoIframe;
