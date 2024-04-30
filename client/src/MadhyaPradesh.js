import React, { useState } from 'react';
import './MadhyaPradesh.css';
import MP1 from './images/mp1.jpg';
import MP2 from './images/mp2.jpg';
import MP3 from './images/mp3.jpg';
import MP4 from './images/mp4.jpg';

const space = { height: '10px' };

const MadhyaPradesh = () => {
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
        const bhopalLocation = { lat: 23.2599, lng: 77.4126 }; // Coordinates for Bhopal
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: bhopalLocation,
            zoom: 8
        });
        new window.google.maps.Marker({
            position: bhopalLocation,
            map: map,
            title: 'Bhopal'
        });
    };

    return (
        <div className="MadhyaPradesh-container">
            <h1>Madhya Pradesh</h1>
            <div className="MadhyaPradesh-info">
                <h3>
                    Madhya Pradesh, located in central India, is known for its rich history, architectural marvels, and diverse wildlife. Here's a glimpse into the culture and attractions of Madhya Pradesh:
                </h3>
                <h2><h2>Capital City: Bhopal</h2></h2>
                <img src={MP1} alt="Madhya Pradesh" onClick={() => handleImageClick(MP1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2><h2>Khajuraho Temples:</h2></h2>
                <p>
                    The Khajuraho Group of Monuments, a UNESCO World Heritage Site, is famous for its stunning temple architecture and intricate sculptures. These temples, built between the 10th and 12th centuries, depict various aspects of life and are renowned for their exquisite craftsmanship.
                </p>
                <h2><h2>Bandhavgarh National Park:</h2></h2>
                <p>
                    Bandhavgarh National Park, located in the Umaria district, is one of the most popular tiger reserves in India. The park is known for its high tiger population density, making it an ideal destination for wildlife enthusiasts and photographers.
                </p>
                <img src={MP2} alt="Bandhavgarh National Park" onClick={() => handleImageClick(MP2)} />
                <h2><h2>Gwalior Fort:</h2></h2>
                <p>
                    Gwalior Fort, situated in the city of Gwalior, is one of the largest forts in India and a prominent historical landmark. The fort complex houses several palaces, temples, and water tanks, reflecting the architectural brilliance of the past.
                </p>
                <div className="MadhyaPradesh-images">
                    <img src={MP3} alt="Gwalior Fort" onClick={() => handleImageClick(MP3)} />
                    <img src={MP4} alt="Madhya Pradesh" onClick={() => handleImageClick(MP4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Madhya Pradesh" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default MadhyaPradesh;
