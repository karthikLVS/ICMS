import React, { useState } from 'react';
import './Kerala.css';
import Kerala1 from './images/kerala1.jpg';
import Kerala2 from './images/kerala2.jpg';
import Kerala3 from './images/kerala3.jpg';
import Kerala4 from './images/kerala4.jpg';

const space = { height: '10px' };

const Kerala = () => {
    const [showMap, setShowMap] = useState(false);
    const [showFullImage, setShowFullImage] = useState(false);
    const [fullImageUrl, setFullImageUrl] = useState('');

    const handleViewMap = () => {
        setShowMap(true);
        loadMapScript();
    };

    const handleImageClick = (imageSrc) => {
        setShowFullImage(true);
        setFullImageUrl(imageSrc);
    };

    const handleCloseImage = () => {
        setShowFullImage(false);
        setFullImageUrl('');
    };

    const loadMapScript = () => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBA2jxZtJo79PHM87dPShu-ZX2BE6RaWzM&callback=initMap`; // Replace YOUR_API_KEY with your actual Google Maps API key
        googleMapScript.async = true;
        googleMapScript.defer = true;
        window.initMap = initMap;
        document.head.appendChild(googleMapScript);
    };

    const initMap = () => {
        const thiruvananthapuramLocation = { lat: 8.5241, lng: 76.9366 }; // Coordinates for Thiruvananthapuram
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: thiruvananthapuramLocation,
            zoom: 8
        });
        new window.google.maps.Marker({
            position: thiruvananthapuramLocation,
            map: map,
            title: 'Thiruvananthapuram'
        });
    };

    return (
        <div className="Kerala-container">
            <h1>Kerala</h1>
            <div className="Kerala-info">
                <h3>
                    Kerala, often referred to as "God's Own Country," is known for its pristine backwaters, palm-fringed beaches, and lush greenery. Here's a glimpse into the natural beauty and culture of Kerala:
                </h3>
                <h2><h2>Capital City: Thiruvananthapuram</h2></h2>
                <img src={Kerala1} alt="Kerala" onClick={() => handleImageClick(Kerala1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2><h2>Backwaters:</h2></h2>
                <p>
                    Kerala's backwaters, a network of interconnected canals, rivers, lakes, and lagoons, offer a serene and picturesque setting. Houseboat cruises through the backwaters provide a unique opportunity to experience Kerala's natural beauty and traditional lifestyle.
                </p>
                <h2><h2>Hill Stations:</h2></h2>
                <p>
                    The hill stations of Kerala, such as Munnar, Wayanad, and Thekkady, are renowned for their cool climate, tea plantations, and panoramic views. These tranquil retreats are perfect for nature lovers and adventure enthusiasts.
                </p>
                <img src={Kerala2} alt="Hill Stations" onClick={() => handleImageClick(Kerala2)} />
                <h2><h2>Culture and Cuisine:</h2></h2>
                <p>
                    Kerala's rich cultural heritage is reflected in its art, dance, music, and festivals. The state is also famous for its delectable cuisine, featuring dishes like appam, puttu, seafood delicacies, and traditional sweets like payasam.
                </p>
                <div className="Kerala-images">
                    <img src={Kerala3} alt="Cultural Festivals" onClick={() => handleImageClick(Kerala3)} />
                    <img src={Kerala4} alt="Kerala" onClick={() => handleImageClick(Kerala4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Kerala" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Kerala;
