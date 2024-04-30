import React, { useState } from 'react';
import './Jharkhand.css';
import Jharkhand1 from './images/jharkhand1.jpg';
import Jharkhand2 from './images/jharkhand2.jpg';
import Jharkhand3 from './images/jharkhand3.jpg';
import Jharkhand4 from './images/jharkhand4.jpg';

const space = { height: '10px' };

const Jharkhand = () => {
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
        const jharkhandLocation = { lat: 23.6102, lng: 85.2799 }; // Coordinates for Jharkhand
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: jharkhandLocation,
            zoom: 8
        });
        new window.google.maps.Marker({
            position: jharkhandLocation,
            map: map,
            title: 'Jharkhand'
        });
    };

    return (
        <div className="Jharkhand-container">
            <h1>Jharkhand</h1>
            <div className="Jharkhand-info">
                <h3>
                    Jharkhand, located in eastern India, is known for its rich mineral resources, vibrant tribal culture, and scenic landscapes. Here's a glimpse into the beauty and culture of Jharkhand:
                </h3>
                <h2><h2>Capital City: Ranchi</h2></h2>
                <img src={Jharkhand1} alt="Jharkhand" onClick={() => handleImageClick(Jharkhand1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2><h2>Damodar Valley:</h2></h2>
                <p>
                    The Damodar Valley, also known as the "Ruhr of India," is a major industrial and mining region in Jharkhand. The Damodar River, often referred to as the "Sorrow of Bengal," flows through the valley, providing water for irrigation and hydropower generation.
                </p>
                <h2><h2>Netarhat:</h2></h2>
                <p>
                    Netarhat, located in the Chota Nagpur Plateau, is a popular hill station known for its scenic beauty and pleasant climate. It offers breathtaking views of the surrounding forests, waterfalls, and valleys, making it a perfect retreat for nature lovers.
                </p>
                <img src={Jharkhand2} alt="Netarhat" onClick={() => handleImageClick(Jharkhand2)} />
                <h2><h2>Tribal Culture:</h2></h2>
                <p>
                    Jharkhand is home to a diverse array of indigenous tribes, each with its own unique culture, traditions, and folklore. The state celebrates various tribal festivals, showcasing traditional music, dance, and handicrafts.
                </p>
                <div className="Jharkhand-images">
                    <img src={Jharkhand3} alt="Tribal Culture" onClick={() => handleImageClick(Jharkhand3)} />
                    <img src={Jharkhand4} alt="Jharkhand" onClick={() => handleImageClick(Jharkhand4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Jharkhand" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Jharkhand;
