import React, { useState } from 'react';
import './Gujarat.css';
import Gujarat1 from './images/gujarat1.jpg';
import Gujarat2 from './images/gujarat2.jpg';
import Gujarat3 from './images/gujarat3.jpg';
import Gujarat4 from './images/gujarat4.jpg';
import HistoricalEventImage1 from './images/guj.jpg';
const space = { height: '10px' };

const Gujarat = () => {
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
        const gujaratLocation = { lat: 22.2587, lng: 71.1924 }; // Coordinates for Gujarat
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: gujaratLocation,
            zoom: 12
        });
        new window.google.maps.Marker({
            position: gujaratLocation,
            map: map,
            title: 'Gujarat'
        });
    };

    return (
        <div className="Gujarat-container">
            <h1>Gujarat</h1>
            <div className="Gujarat-info">
                <h3>
                    Gujarat, located in western India, is renowned for its vibrant culture, rich history, and architectural wonders. Here's a glimpse into the beauty and culture of Gujarat:
                </h3>
                <h2><h2>Capital City: Gandhinagar</h2></h2>
                <img src={Gujarat1} alt="Gujarat" onClick={() => handleImageClick(Gujarat1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2><h2>Culture and Festivals:</h2></h2>
                <p>
                    Gujarat is known for its colorful festivals and vibrant traditions. Navratri, celebrated with fervor across the state, features lively Garba and Dandiya Raas dances. The International Kite Festival in Ahmedabad and Rann Utsav in Kutch are other popular events that showcase Gujarat's cultural heritage.
                </p>
                <h2><h2>Historical Sites:</h2></h2>
                <p>
                    Gujarat boasts a rich history dating back to ancient times. The state is home to architectural marvels like the UNESCO World Heritage Sites of Rani ki Vav in Patan and Champaner-Pavagadh Archaeological Park. The Somnath Temple, Dwarkadhish Temple, and Sabarmati Ashram are other must-visit attractions.
                </p>
                <img src={Gujarat2} alt="Historical Sites" onClick={() => handleImageClick(Gujarat2)} />
                <h2><h2>Cuisine:</h2></h2>
                <p>
                    Gujarati cuisine is famous for its vegetarian delicacies and sweet treats. Dhokla, Khandvi, and Undhiyu are popular dishes, while Gujarati thali offers a diverse spread of flavors and textures. Visitors can also indulge in mouthwatering snacks like fafda, jalebi, and the famous Gujarati street food.
                </p>
                <div className="Gujarat-images">
                    <img src={Gujarat3} alt="Gujarat" onClick={() => handleImageClick(Gujarat3)} />
                    <img src={Gujarat4} alt="Gujarat" onClick={() => handleImageClick(Gujarat4)} />
                </div>
            </div>
            <div className="historical-events">
                <h2>Historical Events</h2>
                <ul>
                    <li>
                        <h3>Mahagujarat Movement</h3>
                        <p>Mahagujarat Movement led by Indulal Yagnik demanded splitting of Bombay state on linguistic lines. On 1 May 1960, Bombay state bifurcated into Gujarat and Maharashtra. The capital of Gujarat was Ahmedabad. Kutch was hit by the earthquake in 1956 which destroyed major parts of Anjar town.</p>
                        <img src={HistoricalEventImage1} alt="Historical Event 1" />
                    </li>
                    
                </ul>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Gujarat" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gujarat;
