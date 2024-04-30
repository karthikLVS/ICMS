import React, { useState } from 'react';
import './Goa.css';
import Goa1 from './images/goa1.jpg';
import Goa2 from './images/goa2.jpg';
import Goa3 from './images/goa3.jpg';
import Goa4 from './images/goa4.jpg';
import HistoricalEventImage1 from './images/guva.jpg';
const space = { height: '10px' };

const Goa = () => {
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
        const goaLocation = { lat: 15.2993, lng: 74.124 }; // Coordinates for Goa
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: goaLocation,
            zoom: 12
        });
        new window.google.maps.Marker({
            position: goaLocation,
            map: map,
            title: 'Goa'
        });
    };

    return (
        <div className="Goa-container">
            <h1>Goa</h1>
            <div className="Goa-info">
                <h3>
                    Goa, located on the western coast of India, is renowned for its stunning beaches, vibrant nightlife, and Portuguese heritage. Here's a glimpse into the beauty and culture of Goa:
                </h3>
                <h2><h2>Capital City: Panaji</h2></h2>
                <img src={Goa1} alt="Goa" onClick={() => handleImageClick(Goa1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2><h2>Beaches:</h2></h2>
                <p>
                    Goa is famous for its pristine beaches, offering opportunities for sunbathing, swimming, and water sports. From popular tourist spots like Baga Beach and Calangute Beach to secluded coves like Butterfly Beach and Palolem Beach, there's a beach for every traveler in Goa.
                </p>
                <h2><h2>Churches and Forts:</h2></h2>
                <p>
                    Goa's colonial past is reflected in its majestic churches and forts. The Basilica of Bom Jesus, Se Cathedral, and Church of St. Francis of Assisi are UNESCO World Heritage Sites, showcasing exquisite Portuguese architecture. Fort Aguada and Chapora Fort offer panoramic views of the coastline.
                </p>
                <img src={Goa2} alt="Churches and Forts" onClick={() => handleImageClick(Goa2)} />
                <h2><h2>Cuisine:</h2></h2>
                <p>
                    Goan cuisine is a delightful blend of Indian and Portuguese flavors, featuring dishes like vindaloo, xacuti, and bebinca. Seafood is a highlight, with fresh fish, prawns, and crabs cooked in aromatic spices. Feni, a locally distilled spirit, is a must-try beverage.
                </p>vindaloo
                <div className="Goa-images">
                    <img src={Goa3} alt="Goa" onClick={() => handleImageClick(Goa3)} />
                    <img src={Goa4} alt="Goa" onClick={() => handleImageClick(Goa4)} />
                </div>
            </div>
            <div className="historical-events">
                <h2>Historical Events</h2>
                <ul>
                    <li>
                        <h3>Portuguese Colonial Rule</h3>
                        <p>Goa was liberated on 19th December 1961 along with overland pockets of Daman & Diu from 451 years Portuguese Colonial Rule, marking the culmination of the efforts of scores of Freedom Fighters, both Hindus and Christians, some of whom even laid down their lives in the struggle for freedom</p>
                        <img src={HistoricalEventImage1} alt="Historical Event 1" />
                    </li>
                    
                </ul>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Goa" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Goa;
