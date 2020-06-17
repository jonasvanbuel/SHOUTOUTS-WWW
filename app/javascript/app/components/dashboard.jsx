import React from 'react';

// Import components
import Navbar from './navbar';
import Menu from './menu';
import PostListContainer from '../containers/post_list_container';

const Dashboard = () => {
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
};

export default Dashboard;
