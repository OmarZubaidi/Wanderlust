import React from 'react';
import { DashboardComponent } from '../../src/components/dashboard/DashboardComponent';
import { NoTrip } from '../../src/components/dashboard/NoTrip';

const Dashboard = () => {
  return (
    <DashboardComponent>
      <NoTrip />
    </DashboardComponent>
  );
};

export default Dashboard;
