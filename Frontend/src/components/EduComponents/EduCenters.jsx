import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const boroughs = ["All", "Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"];
const programTypes = ["All", "Adult Basic Education", "High School Equivalency Preparation", "English for Speakers of Other Languages"];

const EduCenters = () => {
    const position = [40.712776, -74.005974]; // New York City coordinates

    const [searchAddress, setSearchAddress] = useState("");
    const [selectedBorough, setSelectedBorough] = useState("All");
    const [selectedType, setSelectedType] = useState("All");
    const [centers, setCenters] = useState([]);
    const [filteredCenters, setFilteredCenters] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        fetchCenters();
    }, []);

    const fetchCenters = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/eslcenter");
            const data = await response.json();
            setCenters(data);
        } catch (e) {
            console.error(e);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = centers.filter(center =>
            (selectedBorough === "All" || center.borough === selectedBorough) &&
            (selectedType === "All" || center.type === selectedType) &&
            center.address && center.address.toLowerCase().includes(searchAddress.toLowerCase())
        );
        setFilteredCenters(filtered);
        setShowResults(true);
    };

    const fetchAddressSuggestions = async (value) => {
        if (value) {
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${value}&format=json&addressdetails=1`);
                const data = await response.json();
                setSuggestions(data);
            } catch (error) {
                console.error(error);
            }
        } else {
            setSuggestions([]);
        }
    };

    const handleAddressChange = (value) => {
        setSearchAddress(value);
        fetchAddressSuggestions(value);
    };

    const handleSuggestionClick = (address) => {
        setSearchAddress(address);
        setSuggestions([]);
    };

    return (
        <div className="p-10 min-h-[85vh]">
            <h1 className="text-2xl font-bold mb-4">ESL Centers</h1>
            <form onSubmit={handleSearch} className="mb-4 ">
                <input
                    type="text"
                    placeholder="Search by address"
                    value={searchAddress}
                    onChange={(e) => handleAddressChange(e.target.value)}
                    className="p-2 border border-gray-300 rounded mr-2"
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
                <select
                    value={selectedBorough}
                    onChange={(e) => setSelectedBorough(e.target.value)}
                    className="p-2 border border-gray-300 rounded mr-2"
                >
                    {boroughs.map(borough => (
                        <option key={borough} value={borough}>{borough}</option>
                    ))}
                </select>
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="p-2 border border-gray-300 rounded mr-2"
                >
                    {programTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
                <button type="submit" className="p-2 bg-red text-white rounded">
                    Search
                </button>
            </form>
            <div className="flex min-h-[500px] ">
                {!showResults ? (
                    <div className="p-4 border rounded w-3/12">
                        <h2 className="font-bold">Instructions:</h2>
                        <p>Enter an address to search for ESL centers, select a borough and type, then click "Search" to view results.</p>
                    </div>
                ) : (
                    <div className=" flex-1">
                        {filteredCenters.map(center => (
                            <div key={center.id} className="border rounded p-4">
                                <h2 className="font-bold">{center.name}</h2>
                                <p>{center.address}</p>
                                <p>Borough: {center.borough}</p>
                                <p>Type: {center.type}</p>
                                <a href={center.applyLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Apply Now
                                </a>
                            </div>
                        ))}
                    </div>
                )}
                <MapContainer center={position} zoom={13} className="w-full h-85 ml-4 rounded border"
                
        
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {filteredCenters.map(center => (
                        center.longitude && center.latitude ? (
                            <Marker key={center.id} position={[center.latitude, center.longitude]}>
                                <Popup>{center.name}</Popup>
                            </Marker>
                        ) : null
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default EduCenters;

