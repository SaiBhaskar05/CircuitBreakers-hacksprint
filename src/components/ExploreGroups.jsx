import React from "react";
import { useNavigate } from "react-router-dom";
import "../ExploreGroups.css";

const ExploreGroups = () => {
  const navigate = useNavigate();

  // Function to add a member to a group (mock action)
  const addMember = (groupName) => {
    alert(`You have been added to the ${groupName} group!`);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navigation2">
        <h1>HobbyHub</h1>
        <ul id="ul3">
          <li>
            <button className="nav-button" onClick={() => navigate("/dashboard2")}>
              Home
            </button>
          </li>
        </ul>
      </nav>
      <center><h2>Explore Hobby Groups</h2></center>
      {/* Groups Section */}
      <section id="explore-groups" className="groups-container">
        
        <div className="group-card">
          <h3>Photography Enthusiasts</h3>
          <p>Share your best shots and learn from others!</p>
          <button
            className="add-member-button"
            onClick={() => addMember("Photography Enthusiasts")}
          >
            Join
          </button>
        </div>
        <div className="group-card">
          <h3>Cooking Club</h3>
          <p>Exchange recipes and culinary tips.</p>
          <button
            className="add-member-button"
            onClick={() => addMember("Cooking Club")}
          >
            Join
          </button>
        </div>
        <div className="group-card">
          <h3>Travel Buddies</h3>
          <p>Plan trips and share travel stories.</p>
          <button
            className="add-member-button"
            onClick={() => addMember("Travel Buddies")}
          >
            Join
          </button>
        </div>
        <div className="group-card">
          <h3>Book Lovers</h3>
          <p>Discuss your favorite books and authors.</p>
          <button
            className="add-member-button"
            onClick={() => addMember("Book Lovers")}
          >
            Join
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer4">© 2025 HobbyHub. All rights reserved.</footer>
    </div>
  );
};

export default ExploreGroups;
