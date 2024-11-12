// components/Students.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("/api/students");
        setStudents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching students:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className='container mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-4'>Students Management</h2>
      <div className='bg-white rounded-lg shadow-md p-6'>
        <div className='flex justify-between mb-4'>
          <input
            type='text'
            placeholder='Search students...'
            className='p-2 border rounded-md w-64'
          />
          <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'>
            Add New Student
          </button>
        </div>

        <table className='min-w-full'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='px-6 py-3 text-left'>ID</th>
              <th className='px-6 py-3 text-left'>Name</th>
              <th className='px-6 py-3 text-left'>Department</th>
              <th className='px-6 py-3 text-left'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan='4' className='text-center py-4'>
                  Loading...
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student._id} className='border-b'>
                  <td className='px-6 py-4'>{student.id}</td>
                  <td className='px-6 py-4'>{student.name}</td>
                  <td className='px-6 py-4'>{student.department}</td>
                  <td className='px-6 py-4'>
                    <button className='text-blue-600 hover:text-blue-800 mr-2'>
                      Edit
                    </button>
                    <button className='text-red-600 hover:text-red-800'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
