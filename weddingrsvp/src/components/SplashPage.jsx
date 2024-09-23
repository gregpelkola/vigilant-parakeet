// src/components/SplashPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate('/details');
    };

    return (
        <div className="splash-page">
            <h1>Welcome to Our Wedding</h1>
            <button onClick={handleEnter}>Enter</button>
        </div>
    );
};

export default SplashPage;