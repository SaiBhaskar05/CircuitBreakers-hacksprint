import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../login.css';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const storedEmail = localStorage.getItem('userEmail') || '';
    const storedPassword = localStorage.getItem('userPassword') || '';

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!storedEmail || !storedPassword) {
      setErrorMessage('No user found. Please sign up first.');
      return;
    }

    if (trimmedEmail === storedEmail && trimmedPassword === storedPassword) {
      alert('Login Successful!');
      setIsLoggedIn(true);
      navigate('/dashboard2'); // Navigate to the dashboard
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className='container2'>
      <center><h2>Login</h2></center>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <center><button id="button" type="submit">Login</button></center>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>
        Don't have an account? <NavLink to="/signUp">Sign Up</NavLink>
      </p>
      </div>
    </div>
  );
};

export default Login;