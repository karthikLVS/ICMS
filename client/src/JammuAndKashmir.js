import React, { useState } from 'react';
import './JammuAndKashmir.css';
import JammuAndKashmir1 from './images/jammu_kashmir1.jpg';
import JammuAndKashmir2 from './images/jammu_kashmir2.jpg';
import JammuAndKashmir3 from './images/jammu_kashmir3.jpg';
import JammuAndKashmir4 from './images/jammu_kashmir4.jpg';
import HistoricalEventImage1 from './images/jk.jpg';
const space = { height: '10px' };

const JammuAndKashmir = () => {
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
        const jammuAndKashmirLocation = { lat: 33.7782, lng: 76.5762 }; // Coordinates for Jammu and Kashmir
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: jammuAndKashmirLocation,
            zoom: 8
        });
        new window.google.maps.Marker({
            position: jammuAndKashmirLocation,
            map: map,
            title: 'Jammu and Kashmir'
        });
    };

    return (
        <div className="JammuAndKashmir-container">
            <h1>Jammu and Kashmir</h1>
            <div className="JammuAndKashmir-info">
                <h3>
                    Jammu and Kashmir, often referred to as the "Paradise on Earth," is known for its stunning natural beauty, diverse culture, and rich heritage. Here's a glimpse into the enchanting land of Jammu and Kashmir:
                </h3>
                <h2><h2>Capital Cities: Srinagar (Summer), Jammu (Winter)</h2></h2>
                <img src={JammuAndKashmir1} alt="Jammu and Kashmir" onClick={() => handleImageClick(JammuAndKashmir1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2><h2>Dal Lake:</h2></h2>
                <p>
                    Dal Lake, located in Srinagar, is one of the most iconic attractions of Jammu and Kashmir. Visitors can enjoy a shikara ride on the serene waters of the lake, surrounded by picturesque Mughal gardens and snow-capped mountains.
                </p>
                <h2><h2>Gulmarg:</h2></h2>
                <p>
                    Gulmarg, known as the "Meadow of Flowers," is a popular hill station renowned for its skiing slopes, scenic beauty, and adventure activities. The Gulmarg Gondola offers panoramic views of the surrounding mountains and valleys.
                </p>
                <img src={JammuAndKashmir2} alt="Gulmarg" onClick={() => handleImageClick(JammuAndKashmir2)} />
                <h2><h2>Shalimar Bagh:</h2></h2>
                <p>
                    Shalimar Bagh, built by Emperor Jahangir in the 17th century, is a stunning Mughal garden located in Srinagar. The garden features terraced lawns, vibrant flower beds, and cascading fountains, making it a favorite spot for picnics and leisurely strolls.
                </p>
                <div className="JammuAndKashmir-images">
                    <img src={JammuAndKashmir3} alt="Shalimar Bagh" onClick={() => handleImageClick(JammuAndKashmir3)} />
                    <img src={JammuAndKashmir4} alt="Jammu and Kashmir" onClick={() => handleImageClick(JammuAndKashmir4)} />
                </div>
            </div>
            <div className="historical-events">
                <h2>Historical Events</h2>
                <ul>
                    <li>
                        <h3>Partition</h3>
                        <p>18 August 1947: In one of the worst train massacres of the Partition, Lohars and 'Kashmiris' of Nizamabad killed all the Hindu and Sikh passengers of a Wazirabad–Jammu train. 20 August 1947: Pakistan Army formulated Operation Gulmarg to organise a tribal invasion of Kashmir.</p>
                        <img src={HistoricalEventImage1} alt="Historical Event 1" />
                    </li>
                    
                </ul>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Jammu and Kashmir" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default JammuAndKashmir;
