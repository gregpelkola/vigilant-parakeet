// src/components/Details.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import './details.css'; // Import the CSS file

const Details = () => {
    const location = "The Gardens Wedding Center, Allenton, WI 53002, United States"; // Replace with actual location

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(location)}`; //need to figure out why apple maps is not working and links to google maps instead

    return (
        <div className="details-page">
            <div className="details-card">
                <h2>Wedding Details</h2>
                    <p>Location: The Gardens Wedding Center</p>
                    <p>Date: August 2nd, 2025</p>
                    <p>Time: 3:00 PM</p>
                        <div className="map-icons">
                            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGoogle} size="2x" title="Open in Google Maps" />
                            </a>
                            <a href={appleMapsUrl} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faApple} size="2x" title="Open in Apple Maps" />
                            </a>
                        </div>
            </div>
        </div>
    );
};

export default Details;