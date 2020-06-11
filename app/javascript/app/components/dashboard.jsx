import React from 'react';

import DashboardPostList from '../containers/dashboard_post_list';

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <DashboardPostList />
    </div>
  );
};

export default Dashboard;