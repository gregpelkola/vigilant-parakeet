// src/components/Layout.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <div>
            {location.pathname !== "/" && (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/details">Details</Link></li>
                    <li><Link to="/pictures">Pictures</Link></li>
                    <li><Link to="/rsvp">RSVP</Link></li>
                </ul>
            </nav>
        )}
        {children}
        </div>
    );
};

export default Layout;