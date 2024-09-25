import React, { useState, useEffect } from 'react';

const InfoBox = ({ center, map }) => {
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (map) {
      const userLocation = { lat: 40.712776, lng: -74.005974 };
      const mapDistance = calculateDistance(userLocation, {
        lat: parseFloat(center.latitude),
        lng: parseFloat(center.longitude)
      });
      setDistance(mapDistance);
    }
  }, [map, center]);

  //Function to calculates distance from the user
  const calculateDistance = (loc1, loc2) => {
    const R = 6371;
    const dLat = (loc2.lat - loc1.lat) * (Math.PI / 180);
    const dLng = (loc2.lng - loc1.lng) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(loc1.lat * (Math.PI / 180)) *
        Math.cos(loc2.lat * (Math.PI / 180)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(2); 
  };

  return (
    <div className="info-box bg-white p-4 m-2">
      <h2>{center.name}</h2>
      <p>Borough: {center.borough}</p>
      <p>Contact: {center.info}</p>
      <p>Distance from you: {distance ? `${distance} km` : 'Calculating distance...'}</p>
    </div>
  );
};

export default InfoBox;
