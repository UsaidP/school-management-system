// components/DashboardCard.js
import React from "react";

const DashboardCard = ({ title, count, icon }) => (
  <div className='bg-white p-6 rounded-lg shadow-md'>
    <div className='flex items-center justify-between'>
      <div>
        <h3 className='text-lg font-semibold text-gray-700'>{title}</h3>
        <p className='text-3xl font-bold text-blue-600'>{count}</p>
      </div>
      <div className='text-4xl'>{icon}</div>
    </div>
  </div>
);

export default DashboardCard;
