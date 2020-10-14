import React, { Component } from 'react';

// COMPONENTS
import Navbar from './navbar';
import Menu from './menu';
import PostListContainer from './post_list_container';
import Footer from './footer';

// HELPERS
// import getWidth from '../helpers/_get_width';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Navbar type="navbar-dashboard" />
        <div className="dashboard-body">
          <div className="container custom-body-container">
            <Menu />
            <PostListContainer />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;

