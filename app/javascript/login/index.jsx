/* eslint no-alert:off */

import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import Navbar from '../app/components/navbar';
import Footer from '../app/components/footer';

ReactDOM.render(<Navbar />, document.getElementById('navbar-react'));
ReactDOM.render(<Footer />, document.getElementById('footer-react'));
