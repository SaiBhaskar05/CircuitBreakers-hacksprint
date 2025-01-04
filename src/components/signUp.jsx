import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Signup = () => {
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Email validation
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid Email Format");
      return;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    // Store user data in localStorage
    localStorage.setItem("userName", UserName);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    // Clear the form fields
    setUserName("");
    setEmail("");
    setPassword("");

    alert("SignUp Successful! You can login now.");
    navigate("/login"); // Navigate to login page
  };

  return (
    <div className="auth-container">
      <div className="container2">
        <center><h2>Sign Up</h2></center>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter your name"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            required
            autoComplete="off"  // Disable autofill
            name="signup-username"  // Add a unique name
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"  // Disable autofill
            name="signup-email"  // Add a unique name
          />
          <div>
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"  // Disable autofill
              name="signup-password"  // Add a unique name
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
              style={{ marginLeft: '10px', cursor: 'pointer' }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <center><button id="button" type="submit">Sign Up</button></center>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
