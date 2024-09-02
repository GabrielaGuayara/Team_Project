import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import InfoBox from '../EduComponents/Infobox';


const center = { lat: 40.712776, lng: -74.005974 };

const ESLMap = () => {
  const [eslCenters, setEslCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Fetch ESL centers from the Spring Boot API
    fetch("http://localhost:8080/api/education")
      .then((res) => res.json())
      .then((data) => setEslCenters(data)) 
      .catch((error) => console.error('Error fetching ESL centers:', error));
  }, []);


  const handleMapLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  //Function that filters ESL centers by borogh
  const filteredCenters = eslCenters.filter(center => 
    (filter === 'All' || center.borough === filter) &&
    center.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="sidebar flex flex-col p-4">
        <input type="text" placeholder="Search ESL Centers..." value={search} onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Boroughs</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="The Bronx">The Bronx</option>
          <option value="Staten Island">Staten Island</option>
        </select>
        {selectedCenter && <InfoBox center={selectedCenter} map={map} />}
      </div>
      <LoadScript googleMapsApiKey="AIzaSyBEVBKOPuV5w8d2G578WIHpAoOKPHkOcKc">
        <GoogleMap
         mapContainerStyle={{ height: "400px", width: "600px" }}
          center={center}
          zoom={5}
          onLoad={handleMapLoad}
        >
          {filteredCenters.map(center => (
            <Marker
              key={center.id}
              position={{ lat: parseFloat(center.latitude), lng: parseFloat(center.longitude) }}
              onClick={() => setSelectedCenter(center)}
            />
          ))}
          {selectedCenter && (
            <InfoWindow
              position={{ lat: parseFloat(selectedCenter.latitude), lng: parseFloat(selectedCenter.longitude) }}
              onCloseClick={() => setSelectedCenter(null)}
            >
              <div>
                <h2>{selectedCenter.name}</h2>
                <p>{selectedCenter.info}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default ESLMap;
