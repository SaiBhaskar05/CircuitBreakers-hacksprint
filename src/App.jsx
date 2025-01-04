import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import Signup from './components/signUp';
import Login from './components/login';
import Dashboard2 from './components/Dashboard2';
import ExploreGroups from './components/ExploreGroups'; // Ensure it's imported

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Protected route */}
        <Route
          path="/dashboard2"
          element={isLoggedIn ? <Dashboard2 setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />}
        />
        <Route path="/explore-groups" element={<ExploreGroups />} />
      </Routes>
    </Router>
  );
};

export default App;
