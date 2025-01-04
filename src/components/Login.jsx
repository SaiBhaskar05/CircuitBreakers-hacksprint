import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../login.css';

const Login = ({ setIsLoggedIn }) => {
  const [inputValue, setInputValue] = useState(''); // Single state for input
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const storedUserName = localStorage.getItem('userName') || '';
    const storedEmail = localStorage.getItem('userEmail') || '';
    const storedPassword = localStorage.getItem('userPassword') || '';

    const trimmedInput = inputValue.trim();
    const trimmedPassword = password.trim();

    if (!storedUserName || !storedEmail || !storedPassword) {
      setErrorMessage('No user found. Please sign up first.');
      return;
    }

    const isEmail = trimmedInput.includes('@');
    const isValid =
      (isEmail && trimmedInput === storedEmail) ||
      (!isEmail && trimmedInput === storedUserName);

    if (isValid && trimmedPassword === storedPassword) {
      alert('Login Successful!');
      setIsLoggedIn(true);
      navigate('/dashboard2');
    } else {
      setErrorMessage('Invalid email/username or password. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="container2">
        <center><h2>Login</h2></center>
        <form onSubmit={handleLogin} autoComplete="off">
          <input
            type="text"
            placeholder="Enter your username or email"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
            autoComplete="off"
            id="username-email"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            id="password"
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
