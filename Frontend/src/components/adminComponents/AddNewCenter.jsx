import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewCenter = () => {

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


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/admin/edu-centers/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
           toast.success('Center successfully submitted!!!')
           
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
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

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

        
        </div>
    );
};

 

export default AddNewCenter
