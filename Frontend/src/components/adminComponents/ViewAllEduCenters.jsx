import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewAllEduCenters = () => {
    const [centers, setCenter] = useState([]);
    const navigate = useNavigate();

    const fetchCenters = async () => {
        try {
            const response = await fetch("http://localhost:8080/auth/eduCenters/all");
            const data = await response.json();
            setCenter(data);
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchCenters();
    }, []);

    const handleDelete = async (centerId) => {
        try {
            const response = await fetch(`http://localhost:8080/admin/events/${centerId}`, {
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




    return (
        <div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
            {!centers ?
              <p>No Education Centers Foun</p>  
              :
            <div className="overflow-hidden shadow-md">
                <table className="max-w-md bg-white">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {centers.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800">{item.name}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800">{item.borough}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800">{item.type}</td>
                                <td className="px-6 py-4 text-right text-sm font-medium">
                                    <button 
                                   
                                    onClick={() => navigate(`/admin/dashboard/update/edu-center/${item.id}`)}
                                    className="inline-flex items-center gap-x-2 text-sm font-semibold text-blue hover:text-blue transition duration-300 ease-in-out">
                                      Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="inline-flex items-center gap-x-2 text-sm font-semibold text-red hover:text-red transition duration-300 ease-in-out">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
}
        </div>
    );
};

export default ViewAllEduCenters;


