import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const programTypes = [
  "All",
  "Adult Basic Education",
  "High School Equivalency Preparation",
  "English for Speakers of Other Languages"
];

const EduCenters = () => {
  //Set default NYC cordinates
  const position = [40.712776, -74.005974]; 
  const [searchAddress, setSearchAddress] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [centers, setCenters] = useState([]);
  const [filteredCenters, setFilteredCenters] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [mapCenter, setMapCenter] = useState(position);
  const [mapZoom, setMapZoom] = useState(13);

  //Fetch Center when component mounts
  useEffect(() => {
    fetchCenters();
  }, []);

  const fetchCenters = async () => {
    try {
      const response = await fetch("http://localhost:8080/auth/eduCenters/all");
      const data = await response.json();
      setCenters(data);
      setFilteredCenters(data); // Initialize filtered centers with all centers
    } catch (e) {
      console.error(e);
    }
  };

  //Handle Search and filter centers by type
  const handleSearch = async (e) => {
    e.preventDefault();
    let filtered = centers.filter(center =>
      (selectedType === "All" || center.type === selectedType)
    );

    // Geocode the address to get latitude and longitude
    if (searchAddress) {
      const geocodeResponse = await fetch(`https://nominatim.openstreetmap.org/search?q=${searchAddress}, NYC&format=json&limit=1`);
      const geocodeData = await geocodeResponse.json();
      if (geocodeData.length > 0) {
        const [lat, lon] = [parseFloat(geocodeData[0].lat), parseFloat(geocodeData[0].lon)];
        setMapCenter([lat, lon]);
        setMapZoom(15);
        filtered = filtered.map(center => ({
          ...center,
          distance: getDistance(lat, lon, center.latitude, center.longitude)
        })).sort((a, b) => a.distance - b.distance);
      }
    }

    setFilteredCenters(filtered);
    setShowResults(true);
  };

  const handleClearFilters = () => {
    setSearchAddress("");
    setSelectedType("All");
    setFilteredCenters(centers); // Reset filtered centers to all centers
    setShowResults(false);
    setMapCenter(position); // Reset map to default position
    setMapZoom(13);
  };

    // Fetch address suggestions as the user types
  const fetchAddressSuggestions = async (value) => {
    if (value) {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${value}, NYC&format=json&addressdetails=1`);
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setSuggestions([]);
    }
  };

  // Update search address state and fetch suggestions
  const handleAddressChange = (value) => {
    setSearchAddress(value);
    fetchAddressSuggestions(value);
  };

  const handleSuggestionClick = (address) => {
    setSearchAddress(address);
    setSuggestions([]);
  };

  const handleMarkerClick = (center) => {
    setSelectedCenter(center);
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const MapUpdater = () => {
    const map = useMap();
    useEffect(() => {
      map.setView(mapCenter, mapZoom);
    }, [mapCenter, mapZoom]);
    return null;
  };

  return (
    <div className="p-10 min-h-[85vh]">
      <h1 className="text-2xl font-bold mb-4">ESL Centers</h1>
      
      <form onSubmit={handleSearch} className="mb-4">
        <div className='mb-10 '>
          <input
            type="text"
            placeholder="Search by address"
            value={searchAddress}
            onChange={(e) => handleAddressChange(e.target.value)}
            className="p-2 border border-gray-300 rounded mr-2 w-1/2"
          />
          {suggestions.length > 0 && (
            <ul className="border border-gray-300 rounded bg-white absolute z-10">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.place_id}
                  onClick={() => handleSuggestionClick(suggestion.display_name)}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                >
                  {suggestion.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="p-2 border border-gray-300 rounded mr-2"
        >
          {programTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <button type="submit" className="p-2 bg-red-500 text-white bg-red rounded mr-2">
          Search
        </button>
        <button type="button" onClick={handleClearFilters} className="p-2 bg-green text-white rounded">
          Clear Filters
        </button>
      </form>
      <div className="flex min-h-[500px]">
        <div className="p-4 border rounded w-3/12 overflow-y-auto">
          <h2 className="font-bold">Instructions:</h2>
          <p>Enter an address to search for ESL centers, select a type, then click "Search" to view results.</p>
          {showResults && (
            <div className="mt-4">
              <h3 className="font-bold">Search Results:</h3>
              {filteredCenters.map((center) => (
                <div key={center.id} className="mt-2 p-2 border rounded shadow-sm shadow-yellow">
                  <h4 className="font-semibold">{center.name}</h4>
                  <p>{center.address}</p>
                  <p>Type: {center.type}</p>
                  {center.distance && <p>Distance: {center.distance.toFixed(2)} km</p>}
                  <a href={center.link} target="_blank" rel="noopener noreferrer" className="text-black bg-yellow rounded font-bold hover:underline">
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1 ml-4">
          <MapContainer center={mapCenter} zoom={mapZoom} className="w-full h-[500px] rounded border">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredCenters.map(center => (
              center.longitude && center.latitude ? (
                <Marker
                  key={center.id}
                  position={[center.latitude, center.longitude]}
                  eventHandlers={{
                    click: () => handleMarkerClick(center),
                  }}
                >
                  <Popup>
                    <div>
                      <h4 className="font-semibold">{center.name}</h4>
                      <p>{center.address}</p>
                      <p>Type: {center.type}</p>
                      {center.distance && <p>Distance: {center.distance.toFixed(2)} km</p>}
                      <a href={center.link} target="_blank" rel="noopener noreferrer" className="text-black bg-yellow rounded font-bold p-1 hover:underline">
                        Apply Now
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ) : null
            ))}
            <MapUpdater />
          </MapContainer>
        </div>
      </div>
    
    </div>
  );
};

export default EduCenters;
