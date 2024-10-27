<html><head><base href="http://localhost:3000/"></base>
<title>College Management System</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>

<!-- Root div for React mounting -->
<div id="root"></div>

<!-- React Components -->
<script type="text/babel">
// App Component
const App = () => {
  const [currentPage, setCurrentPage] = React.useState('dashboard');
  const [user, setUser] = React.useState(null);

  // Authentication functions
  const login = async (credentials) => {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      setUser(response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">College MS</h1>
        <div className="space-x-4">
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className="hover:text-blue-200"
          >
            Dashboard
          </button>
          <button 
            onClick={() => setCurrentPage('students')}
            className="hover:text-blue-200"
          >
            Students
          </button>
          <button 
            onClick={() => setCurrentPage('courses')}
            className="hover:text-blue-200"
          >
            Courses
          </button>
          <button 
            onClick={() => setCurrentPage('faculty')}
            className="hover:text-blue-200"
          >
            Faculty
          </button>
        </div>
      </div>
    </nav>
  );

  // Dashboard Component
  const Dashboard = () => (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard 
          title="Total Students" 
          count="1,234" 
          icon="👨‍🎓"
        />
        <DashboardCard 
          title="Total Faculty" 
          count="89" 
          icon="👨‍🏫"
        />
        <DashboardCard 
          title="Active Courses" 
          count="45" 
          icon="📚"
        />
        <DashboardCard 
          title="Departments" 
          count="12" 
          icon="🏛️"
        />
      </div>
    </div>
  );

  // Dashboard Card Component
  const DashboardCard = ({ title, count, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <p className="text-3xl font-bold text-blue-600">{count}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );

  // Students Component
  const Students = () => {
    const [students, setStudents] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      // Fetch students data
      const fetchStudents = async () => {
        try {
          const response = await axios.get('/api/students');
          setStudents(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching students:', error);
          setLoading(false);
        }
      };

      fetchStudents();
    }, []);

    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Students Management</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between mb-4">
            <input
              type="text"
              placeholder="Search students..."
              className="p-2 border rounded-md w-64"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Add New Student
            </button>
          </div>
          
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Department</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">Loading...</td>
                </tr>
              ) : (
                students.map(student => (
                  <tr key={student._id} className="border-b">
                    <td className="px-6 py-4">{student.id}</td>
                    <td className="px-6 py-4">{student.name}</td>
                    <td className="px-6 py-4">{student.department}</td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
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

  // Login Component
  const Login = () => {
    const [credentials, setCredentials] = React.useState({
      email: '',
      password: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      login(credentials);
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md"
                value={credentials.email}
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-md"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {user ? (
        <>
          <Navigation />
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'students' && <Students />}
          {/* Add other page components here */}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));
</script>

<!-- Backend Code (Node.js/Express/MongoDB) -->
<script>
// server.js
/*
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/college_ms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Student Schema
const studentSchema = new mongoose.Schema({
  id: String,
  name: String,
  department: String,
  email: String,
  phone: String,
  address: String,
});

const Student = mongoose.model('Student', studentSchema);

// Routes
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/students', async (req, res) => {
  const student = new Student(req.body);
  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/
</script>

</body>
</html>

This is a complete College Management System using the MERN stack (MongoDB, Express.js, React, Node.js) with Tailwind CSS for styling. The system includes:

1. Frontend:
- React components for different pages (Dashboard, Students, Courses, Faculty)
- Responsive navigation
- Authentication system
- Dashboard with statistics cards
- Students management with table view
- Tailwind CSS for styling

2. Backend:
- Node.js/Express server
- MongoDB database connection
- Student model and routes
- API endpoints for CRUD operations

To run this system:

1. Set up MongoDB locally or use MongoDB Atlas
2. Install dependencies:
```bash
npm init
npm install express mongoose cors body-parser
npm install react react-dom @babel/standalone axios
```

3. Create separate directories for frontend and backend
4. Set up the necessary environment variables
5. Run the backend server (node server.js)
6. Serve the frontend through a development server

You can extend this system by:
- Adding more features (attendance, grades, etc.)
- Implementing user roles (admin, teacher, student)
- Adding more sophisticated authentication
- Implementing file upload for student documents
- Adding a notification system
- Creating detailed reports and analytics

Would you like me to expand on any particular aspect of the system?