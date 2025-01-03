import { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; 
import { useNavigate, NavLink } from 'react-router-dom';
import '../Dashboard2.css';

export const Dashboard2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userLogo, setUserLogo] = useState(''); // State for user logo
  const navigate = useNavigate();

  // On initial load, check if the user is logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
      setUserEmail(localStorage.getItem('userEmail')); // Get the stored user email
      setUserLogo(localStorage.getItem('userLogo')); // Get the stored user logo
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    setUserLogo('');
    localStorage.removeItem('isLoggedIn'); // Remove login status from localStorage
    localStorage.removeItem('userEmail'); // Remove stored user email
    localStorage.removeItem('userLogo'); // Remove stored user logo
    navigate('/login'); // Navigate to login page
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navigation">
        <h1>HobbyHub</h1>
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
        <ul id="ul1" className={menuOpen ? 'open' : ''}>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/explore" activeClassName="active">Explore Groups</NavLink></li>
          <li><NavLink to="#about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
        </ul>
        <ul id="ul2" className={menuOpen ? 'open' : ''}>
          {isLoggedIn ? (
            <li className="user-info">
              <img src={userLogo || 'https://cdn-icons-png.freepik.com/256/17740/17740838.png?ga=GA1.1.1414198285.1727840973&semt=ais_hybrid'} alt="User Logo" className="user-logo" />
              <span>{userEmail}</span>
              <button id="button2" onClick={handleLogout}>Logout</button>
            </li>
          ) : null}
        </ul>
      </nav>

      {/* Cards Section */}
      <div className="cards-container">
        <div className="card" data-aos="fade-up">
          <h3>Join Groups</h3>
          <p>Find and join groups of people who share your interests.</p>
          <button>Explore Groups</button>
        </div>
        <div className="card" data-aos="fade-up">
          <h3>Create Groups</h3>
          <p>Start a new group and invite others to join and collaborate.</p>
          <button>Create a Group</button>
        </div>
        <div className="card" data-aos="fade-up">
          <h3>Blogs</h3>
          <p>Share your experiences and learn from others through blogs.</p>
          <button>View Blogs</button>
        </div>
      </div>

      {/* About Section */}
      <div id="about" data-aos="fade-up">
        <h2>About</h2>
        <p>
          HobbyHub is a platform to connect people with shared interests, helping you explore and grow in your hobbies.
          Join groups, share ideas, and discover new passions!
        </p>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <h6>All rights reserved</h6>
      </div>
    </div>
  );
};

export default Dashboard2;
