import React, { useState } from 'react';
import './Chhattisgarh.css';
import Chhattisgarh1 from './images/cg1.jpg';
import Chhattisgarh2 from './images/cg2.jpg';
import Chhattisgarh3 from './images/cg3.jpg';
import Chhattisgarh4 from './images/cg4.jpg';
import HistoricalEventImage1 from './images/chhatt.jpg';
const space = { height: '10px' };

const Chhattisgarh = () => {
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
        const chhattisgarhLocation = { lat: 21.2787, lng: 81.8661 }; // Coordinates for Chhattisgarh
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: chhattisgarhLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: chhattisgarhLocation,
            map: map,
            title: 'Chhattisgarh'
        });
    };

    return (
        <div className="Chhattisgarh-container">
            <h1>Chhattisgarh</h1>
            <div className="Chhattisgarh-info">
                <h3>
                    Chhattisgarh, located in central India, is known for its rich cultural heritage and natural beauty. Here's a glimpse into the beauty and culture of Chhattisgarh:
                </h3>
                <h2><h2>Capital City: Raipur</h2></h2>
                <img src={Chhattisgarh1} alt="Chhattisgarh" onClick={() => handleImageClick(Chhattisgarh1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2><h2>Language and Culture:</h2></h2>
                <p>
                    Chhattisgarhi is the most widely spoken language in the state, but Hindi is also commonly used. The region boasts a vibrant cultural scene, with traditional music, dance, and festivals like Bastar Dussehra showcasing the rich heritage of the tribal communities.
                </p>
                <h2><h2>Bastar:</h2></h2>
                <p>
                    Bastar, located in southern Chhattisgarh, is renowned for its tribal culture and ancient traditions. The region is home to unique art forms like Dhokra metal craft and terracotta pottery. Visitors can explore tribal villages, lush forests, and scenic waterfalls in Bastar.
                </p>
                <img src={Chhattisgarh2} alt="Bastar" onClick={() => handleImageClick(Chhattisgarh2)} />
                <h2><h2>National Parks:</h2></h2>
                <p>
                    Chhattisgarh is blessed with abundant biodiversity, with several national parks and wildlife sanctuaries spread across the state. Indravati National Park, Kanger Ghati National Park, and Udanti-Sitanadi Wildlife Sanctuary are popular destinations for nature lovers and wildlife enthusiasts.
                </p>
                <div className="Chhattisgarh-images">
                    <img src={Chhattisgarh3} alt="Chhattisgarh" onClick={() => handleImageClick(Chhattisgarh3)} />
                    <img src={Chhattisgarh4} alt="Chhattisgarh" onClick={() => handleImageClick(Chhattisgarh4)} />
                </div>
            </div>
            <div className="historical-events">
                <h2>Historical Events</h2>
                <ul>
                    <li>
                        <h3>Haihaiyavanshis </h3>
                        <p>The Haihaiyavanshis continued to rule the region for 700 years until they were invaded by the Marathas in 1740 and came under their authority. Chhattisgarh was directly annexed to the Maratha Nagpur Kingdom in 1758 on the death of Mohan Singh, the last independent ruler of Chhattisgarh.</p>
                        <img src={HistoricalEventImage1} alt="Historical Event 1" />
                    </li>
                    
                </ul>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Chhattisgarh" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chhattisgarh;
