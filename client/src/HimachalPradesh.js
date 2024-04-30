import React, { useState } from 'react';
import './HimachalPradesh.css';
import HimachalPradesh1 from './images/himachalpradesh1.jpg';
import HimachalPradesh2 from './images/himachalpradesh2.jpg';
import HimachalPradesh3 from './images/himachalpradesh3.jpg';
import HimachalPradesh4 from './images/himachalpradesh4.jpg';
import HistoricalEventImage1 from './images/hp.jpg';
const space = { height: '10px' };

const HimachalPradesh = () => {
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
        const himachalPradeshLocation = { lat: 31.1048, lng: 77.1734 }; // Coordinates for Himachal Pradesh
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: himachalPradeshLocation,
            zoom: 10
        });
        new window.google.maps.Marker({
            position: himachalPradeshLocation,
            map: map,
            title: 'Himachal Pradesh'
        });
    };

    return (
        <div className="HimachalPradesh-container">
            <h1>Himachal Pradesh</h1>
            <div className="HimachalPradesh-info">
                <h3>
                    Himachal Pradesh, nestled in the Himalayas, is known for its stunning landscapes, pristine lakes, and vibrant culture. Here's a glimpse into the beauty and culture of Himachal Pradesh:
                </h3>
                <h2><h2>Capital City: Shimla</h2></h2>
                <img src={HimachalPradesh1} alt="Himachal Pradesh" onClick={() => handleImageClick(HimachalPradesh1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2><h2>Trekking and Adventure:</h2></h2>
                <p>
                    Himachal Pradesh is a paradise for adventure enthusiasts. From trekking in the Himalayas to paragliding in Bir Billing and river rafting in the Beas River, the state offers a plethora of thrilling activities for adventure seekers.
                </p>
                <h2><h2>Hill Stations:</h2></h2>
                <p>
                    Himachal Pradesh is home to some of India's most famous hill stations, including Shimla, Manali, and Dharamshala. These picturesque towns offer breathtaking views, pleasant weather, and opportunities for relaxation and rejuvenation.
                </p>
                <img src={HimachalPradesh2} alt="Hill Stations" onClick={() => handleImageClick(HimachalPradesh2)} />
                <h2><h2>Temples and Monasteries:</h2></h2>
                <p>
                    Himachal Pradesh is dotted with ancient temples and monasteries, reflecting its rich spiritual heritage. The Hadimba Temple in Manali, Jwala Ji Temple in Kangra, and Key Monastery in Spiti are among the must-visit religious sites in the state.
                </p>
                <div className="HimachalPradesh-images">
                    <img src={HimachalPradesh3} alt="Himachal Pradesh" onClick={() => handleImageClick(HimachalPradesh3)} />
                    <img src={HimachalPradesh4} alt="Himachal Pradesh" onClick={() => handleImageClick(HimachalPradesh4)} />
                </div>
            </div>
            <div className="historical-events">
                <h2>Historical Events</h2>
                <ul>
                    <li>
                        <h3>Kangra fort during the fourth expedition</h3>
                        <p>1009 A.D. - Mehmood Ghaznavi plundered the Kangra fort during the fourth expedition. 1100 A.D. - Ajay Chand founded Hindur (Nalagarh Dominion), which is an offshoot of Bilaspur. 1139 A.D. - Raja Rasalu founded Sirmaur state. 1154 A.D. - Abhoj Deo founded Kunihar dominion with capital at Hatkoti.</p>
                        <img src={HistoricalEventImage1} alt="Historical Event 1" />
                    </li>
                    
                </ul>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Himachal Pradesh" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default HimachalPradesh;
