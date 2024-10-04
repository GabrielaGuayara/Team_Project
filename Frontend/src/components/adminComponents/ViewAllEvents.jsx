import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewAllEvents = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    const fetchEvents = async () => {
        try {
            const response = await fetch("http://localhost:8080/auth/events/all");
            const data = await response.json();
            setEvents(data);
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleDelete = async (eventId) => {
        try {
            const response = await fetch(`http://localhost:8080/admin/events/${eventId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (!response.ok) {
                toast.error("Something went wrong!");
            }

                toast.success('Event deleted successfully');
                fetchEvents();
      
        } catch (e) {
            console.error(e);
        }
    };


    const handleUpdate = (eventId) =>{  
      navigate(`/admin/dashboard/update/events/${eventId}`);
    }

    return (
        <div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

            <div className="overflow-hidden shadow-md">
                <table className="max-w-md bg-white">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">DateTime</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800">{item.name}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800">{item.location}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800">{item.date}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800">{item.dateTime}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800">{item.type}</td>
                                <td className="px-6 py-4 text-right text-sm font-medium">
                                    <button 
                                    onClick={() =>navigate(`/admin/dashboard/update/events/${item.id}`)}
                                    className="inline-flex items-center gap-x-2 text-sm font-semibold text-blue hover:text-blue transition duration-300 ease-in-out">
                                      Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="inline-flex items-center gap-x-2 text-sm font-semibold text-red hover:text-red transition duration-300 ease-in-out">
                                        Delete                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewAllEvents;


