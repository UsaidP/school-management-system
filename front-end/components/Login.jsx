// components/Login.js
import  { useState } from "react";

const Login = ({ login }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-700'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Email</label>
            <input
              type='email'
              className='w-full p-2 border rounded-md'
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 mb-2'>Password</label>
            <input
              type='password'
              className='w-full p-2 border rounded-md'
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
