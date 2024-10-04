import React, { useState } from 'react';
import ApiService from "../../Services/ApiServices";
import { useNavigate, Link } from 'react-router-dom';

function AdminSignUp() {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        role: 'ADMIN'  // Default role
    });

    const handleInputChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const response = await ApiService.registerUser(userInfo);

            if (response.statusCode === 200 || response.statusCode === 201) {
                setUserInfo({
                    name: '',
                    email: '',
                    password: '',
                    role: 'ADMIN'
                });
                setTimeout(() => {
                    navigate('/adminLogin');
                }, 3000);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
               
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="block text-gray-700 font-medium mb-2">Email:</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                   
                    <div className="form-group">
                        <label className="block text-gray-700 font-medium mb-2">Password:</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="password"
                            name="password"
                            value={userInfo.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="block text-gray-700 font-medium mb-2">Role:</label>
                        <select
                            name="role"
                            value={userInfo.role}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </div>

                    <button
                        className="w-full bg-[#023e8a] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
                <p className="text-blue-800 hover:underline">
                    Already have an account? <Link to="/adminLogin">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default AdminSignUp;
