import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewEvent = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        location: '',
        url: '',
        type: '',
        date: '',
        dateTime: '',
       
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/admin/edu-centers/add',{
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
                description: '',
                location: '',
                url: '',
                type: '',
                date: '',
                dateTime: '',
               
            });
        }
    };

    return (
        <div className="p-4 max-w-md m-auto">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

            <h1 className="text-2xl font-bold mb-4">Add New Event</h1>
            <form onSubmit={handleSubmit} className="mb-6 space-y-4">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Event Name" 
                    className="input input-bordered w-full" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Description" 
                    className="input input-bordered w-full" 
                    value={formData.description}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="text" 
                    name="location" 
                    placeholder="Location" 
                    className="input input-bordered w-full" 
                    value={formData.location}
                    onChange={handleChange}
                    required 
                />
                <input 
                    type="number" 
                    name="url" 
                    placeholder="Link" 
                    className="input input-bordered w-full" 
                    value={formData.url}
                    onChange={handleChange} 
                    required 
                />
               
                <input 
                    type="text" 
                    name="type" 
                    placeholder="Program type" 
                    className="input input-bordered w-full" 
                    value={formData.type}
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="date" 
                    placeholder="Date (YYYY - MM -DD )" 
                    className="input input-bordered w-full" 
                    value={formData.date}
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="tel" 
                    name="dateTime" 
                    placeholder="dateTime" 
                    className="input input-bordered w-full" 
                    value={formData.dateTime}
                    onChange={handleChange} 
                    required 
                />
              
                <button type="submit" className="btn bg-gray-dark text-white">Add Educational Event</button>
            </form>

        
        </div>
    );
};

 

export default AddNewEvent;
