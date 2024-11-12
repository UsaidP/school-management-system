// components/Navigation.js
import React from "react";

const Navigation = ({ setCurrentPage }) => (
  <nav className='bg-blue-800 text-white p-4'>
    <div className='container mx-auto flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>College MS</h1>
      <div className='space-x-4'>
        <button
          onClick={() => setCurrentPage("dashboard")}
          className='hover:text-blue-200'
        >
          Dashboard
        </button>
        <button
          onClick={() => setCurrentPage("students")}
          className='hover:text-blue-200'
        >
          Students
        </button>
        <button
          onClick={() => setCurrentPage("courses")}
          className='hover:text-blue-200'
        >
          Courses
        </button>
        <button
          onClick={() => setCurrentPage("faculty")}
          className='hover:text-blue-200'
        >
          Faculty
        </button>
      </div>
    </div>
  </nav>
);

export default Navigation;
