import React, { Component } from 'react';

// COMPONENTS
import Navbar from './navbar';
import Menu from './menu';
import PostListContainer from './post_list_container';

// HELPERS
// import getWidth from '../helpers/_get_width';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Navbar />
        <div className="container">
          <div className="dashboard-body">
            <Menu />
            <PostListContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

