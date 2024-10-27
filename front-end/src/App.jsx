import { useState } from "react";
import Navigation from "../components/Navigation";
import Dashboard from "../components/Dashboard";
import Students from "../components/Students";
import Login from "../components/Login";
import axios from "axios";

const App = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await axios.post("/api/auth/login", credentials);
      setUser(response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className='min-h-screen bg-gray-700'>
      {user ? (
        <>
          <Navigation setCurrentPage={setCurrentPage} />
          {currentPage === "dashboard" && <Dashboard />}
          {currentPage === "students" && <Students />}
        </>
      ) : (
        <Login login={login} />
      )}
    </div>
  );
};

export default App;
