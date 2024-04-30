import React, { useState } from 'react';
import './Karnataka.css';
import Karnataka1 from './images/karnataka1.jpg';
import Karnataka2 from './images/karnataka2.jpg';
import Karnataka3 from './images/karnataka3.jpg';
import Karnataka4 from './images/karnataka4.jpg';

const space = { height: '10px' };

const Karnataka = () => {
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
        const bangaloreLocation = { lat: 12.9716, lng: 77.5946 }; // Coordinates for Bangalore
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: bangaloreLocation,
            zoom: 8
        });
        new window.google.maps.Marker({
            position: bangaloreLocation,
            map: map,
            title: 'Bangalore'
        });
    };

    return (
        <div className="Karnataka-container">
            <h1>Karnataka</h1>
            <div className="Karnataka-info">
                <h3>
                    Karnataka, located in southwestern India, is known for its rich history, vibrant culture, and diverse landscapes. Here's a glimpse into the beauty and culture of Karnataka:
                </h3>
                <h2><h2>Capital City: Bangalore</h2></h2>
                <img src={Karnataka1} alt="Karnataka" onClick={() => handleImageClick(Karnataka1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2><h2>Hampi:</h2></h2>
                <p>
                    Hampi, a UNESCO World Heritage Site, is a treasure trove of ancient ruins, temples, and monuments. Located in the Bellary district, Hampi was the capital of the Vijayanagara Empire and is renowned for its architectural splendor and historical significance.
                </p>
                <h2><h2>Western Ghats:</h2></h2>
                <p>
                    The Western Ghats, a UNESCO World Heritage Site, traverse through Karnataka, offering breathtaking views, lush forests, and diverse flora and fauna. The region is a paradise for nature lovers and trekkers, with popular destinations like Coorg, Chikmagalur, and Jog Falls.
                </p>
                <img src={Karnataka2} alt="Western Ghats" onClick={() => handleImageClick(Karnataka2)} />
                <h2><h2>Culture and Festivals:</h2></h2>
                <p>
                    Karnataka's rich cultural heritage is reflected in its festivals, music, dance, and cuisine. The state celebrates numerous festivals, including the famous Mysuru Dasara, Hampi Utsav, and Pattadakal Dance Festival, showcasing its vibrant traditions and art forms.
                </p>
                <div className="Karnataka-images">
                    <img src={Karnataka3} alt="Cultural Festivals" onClick={() => handleImageClick(Karnataka3)} />
                    <img src={Karnataka4} alt="Karnataka" onClick={() => handleImageClick(Karnataka4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Karnataka" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Karnataka;
