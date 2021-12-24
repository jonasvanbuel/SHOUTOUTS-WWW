import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import Navbar from './components/navbar_login';
import Footer from '../app/components/footer';

ReactDOM.render(<Navbar />, document.getElementById('navbar-react-mount'));
ReactDOM.render(<Footer pageContext="footer" />, document.getElementById('footer-react-mount'));
