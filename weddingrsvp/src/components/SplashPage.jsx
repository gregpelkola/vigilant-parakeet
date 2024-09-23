// src/components/SplashPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './splashpage.css'; // Import the CSS file

const SplashPage = () => {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setIsDoorOpen(true);
    setTimeout(() => {
      navigate('/details');
    }, 1000); // Wait for the animation to complete before navigating
  };

  return (
    <div className={`splash-page ${isDoorOpen ? 'open-door' : ''}`}>
      <h1>Welcome to Our Wedding</h1>
      <button onClick={handleEnter}>Enter</button>
    </div>
  );
};

export default SplashPage;