// components/Dashboard.js
import React from "react";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  return (
    <div className='container mx-auto p-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <DashboardCard title='Total Students' count='1,234' icon='👨‍🎓' />
        <DashboardCard title='Total Faculty' count='89' icon='👨‍🏫' />
        <DashboardCard title='Active Courses' count='45' icon='📚' />
        <DashboardCard title='Departments' count='12' icon='🏛️' />
      </div>
    </div>
  );
};
export default Dashboard;
