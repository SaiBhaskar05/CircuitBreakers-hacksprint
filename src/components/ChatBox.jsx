import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../ChatBox.css';

const ChatBox = ({ user, groups }) => {
  const { groupName } = useParams(); // Get the group name from URL params
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  // Load the group's chat messages from localStorage
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem(groupName)) || [];
    setMessages(storedMessages);
  }, [groupName]);

  // Handle message sending
  const handleSendMessage = () => {
    if (message || file) {
      // Create a new message object
      const newMessage = {
        sender: user,
        text: message,
        file: file ? URL.createObjectURL(file) : null,
        timestamp: new Date().toISOString(),
      };

      // Store the new message in localStorage
      const updatedMessages = [...messages, newMessage];
      localStorage.setItem(groupName, JSON.stringify(updatedMessages));

      // Update the state
      setMessages(updatedMessages);
      setMessage("");
      setFile(null);
    } else {
      alert("Please enter a message or upload a file.");
    }
  };

  // Handle file input
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="chatbox-container">
      <h2>Chat for {groupName}</h2>

      <div className="messages-container">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className="message">
              <span><strong>{msg.sender}</strong>: </span>
              <span>{msg.text}</span>
              {msg.file && (
                <div className="file-message">
                  <a href={msg.file} target="_blank" rel="noopener noreferrer">
                    {msg.file.includes("image") ? (
                      <img src={msg.file} alt="uploaded" className="file-img" />
                    ) : (
                      <span>Click to view file</span>
                    )}
                  </a>
                </div>
              )}
              <br />
              <small>{new Date(msg.timestamp).toLocaleString()}</small>
            </div>
          ))
        ) : (
          <p>No messages yet. Be the first to send a message!</p>
        )}
      </div>

      {/* Message input */}
      <div className="message-input">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
        />
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
