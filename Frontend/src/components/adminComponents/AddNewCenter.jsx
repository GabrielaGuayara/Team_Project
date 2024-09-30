import React, { useState, useEffect } from 'react';

const AddNewCenter = () => {

    const [centers, setCenters] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        borough: '',
        longitude: '',
        latitude: '',
        address: '',
        zipcode: '',
        phoneNumber: '',
        type: '',
        link: '',
    });

    useEffect(() => {
        fetchCenters();
    }, []);

    const fetchCenters = async () => {
        const response = await fetch('http://localhost:8080/auth/eduCenters/all',{
          headers: {
            'Content-Type': 'application/json'
        },
        }); 
        const data = await response.json();
        setCenters(data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/admin/edu-centers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            window.alert('Center successfully submitted!!!')
            fetchCenters();
            setFormData({
                name: '',
                organization: '',
                borough: '',
                longitude: '',
                latitude: '',
                address: '',
                zipcode: '',
                phoneNumber: '',
                type: '',
                link: '',
            });
        }
    };

    return (
        <div className="p-4 max-w-md m-auto">
            <h1 className="text-2xl font-bold mb-4">Add New Education Center</h1>
            <form onSubmit={handleSubmit} className="mb-6 space-y-4">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Center Name" 
                    className="input input-bordered w-full" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="text" 
                    name="organization" 
                    placeholder="Organization" 
                    className="input input-bordered w-full" 
                    value={formData.organization}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="text" 
                    name="borough" 
                    placeholder="Borough" 
                    className="input input-bordered w-full" 
                    value={formData.borough}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="number" 
                    name="longitude" 
                    placeholder="Longitude" 
                    className="input input-bordered w-full" 
                    value={formData.longitude}
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="number" 
                    name="latitude" 
                    placeholder="Latitude" 
                    className="input input-bordered w-full" 
                    value={formData.latitude}
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="address" 
                    placeholder="Address" 
                    className="input input-bordered w-full" 
                    value={formData.address}
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="zipcode" 
                    placeholder="Zip Code" 
                    className="input input-bordered w-full" 
                    value={formData.zipcode}
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="tel" 
                    name="phoneNumber" 
                    placeholder="Phone Number" 
                    className="input input-bordered w-full" 
                    value={formData.phoneNumber}
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="type" 
                    placeholder="Type" 
                    className="input input-bordered w-full" 
                    value={formData.type}
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="url" 
                    name="link" 
                    placeholder="Website Link" 
                    className="input input-bordered w-full" 
                    value={formData.link}
                    onChange={handleChange} 
                />
                <button type="submit" className="btn bg-gray-dark text-white">Add Edu Center</button>
            </form>

            <h2 className="text-xl font-semibold mb-2">All Education Centers</h2>
            <ul className="space-y-2">
                {centers.map((center) => (
                    <li key={center.id} className="card w-full bg-base-100 shadow-xl p-4">
                        <h3 className="font-bold">{center.name}</h3>
                        <p><strong>Organization:</strong> {center.organization}</p>
                        <p><strong>Borough:</strong> {center.borough}</p>
                        <p><strong>Address:</strong> {center.address}, {center.zipcode}</p>
                        <p><strong>Phone:</strong> {center.phoneNumber}</p>
                        <p><strong>Type:</strong> {center.type}</p>
                        <p><strong>Location:</strong> {`(${center.latitude}, ${center.longitude})`}</p>
                        <a href={center.link} className="link">Visit Website</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

 

export default AddNewCenter
