import React, { useState } from 'react';
import './Maharashtra.css';
import Maharashtra1 from './images/maharashtra1.jpg';
import Maharashtra2 from './images/maharashtra2.jpg';
import Maharashtra3 from './images/maharashtra3.jpg';
import Maharashtra4 from './images/maharashtra4.jpg';

const space = { height: '10px' };

const Maharashtra = () => {
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
        const mumbaiLocation = { lat: 19.076, lng: 72.8777 }; // Coordinates for Mumbai
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: mumbaiLocation,
            zoom: 10
        });
        new window.google.maps.Marker({
            position: mumbaiLocation,
            map: map,
            title: 'Mumbai'
        });
    };

    return (
        <div className="Maharashtra-container">
            <h1>Maharashtra</h1>
            <div className="Maharashtra-info">
                <h3>
                    Maharashtra, located in western India, is renowned for its vibrant culture, historic landmarks, and bustling cities. Here's a glimpse into the attractions and culture of Maharashtra:
                </h3>
                <h2><h2>Capital City: Mumbai</h2></h2>
                <img src={Maharashtra1} alt="Maharashtra" onClick={() => handleImageClick(Maharashtra1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2><h2>Gateway of India:</h2></h2>
                <p>
                    The Gateway of India, located in Mumbai, is an iconic monument and a popular tourist attraction. Built to commemorate the visit of King George V and Queen Mary to India, the arch monument stands as a symbol of India's rich history and heritage.
                </p>
                <h2><h2>Ajanta and Ellora Caves:</h2></h2>
                <p>
                    The Ajanta and Ellora Caves, designated UNESCO World Heritage Sites, are ancient rock-cut cave complexes showcasing exquisite Buddhist, Hindu, and Jain artworks and sculptures. These magnificent caves are a testament to India's architectural and artistic prowess.
                </p>
                <img src={Maharashtra2} alt="Ajanta and Ellora Caves" onClick={() => handleImageClick(Maharashtra2)} />
                <h2><h2>Marine Drive:</h2></h2>
                <p>
                    Marine Drive, also known as the Queen's Necklace, is a picturesque promenade in Mumbai overlooking the Arabian Sea. This iconic waterfront stretch offers stunning views, especially during sunset, and is a popular spot for leisurely walks and gatherings.
                </p>
                <div className="Maharashtra-images">
                    <img src={Maharashtra3} alt="Marine Drive" onClick={() => handleImageClick(Maharashtra3)} />
                    <img src={Maharashtra4} alt="Maharashtra" onClick={() => handleImageClick(Maharashtra4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Maharashtra" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Maharashtra;
