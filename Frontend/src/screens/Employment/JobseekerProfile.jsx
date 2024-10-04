import React, { useState } from 'react';
import axios from 'axios';

const JobSeekerProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    linkedInProfile: '',
    professionalSummary: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      const response = await axios.post('http://localhost:8081/jobseekerprofiles/create', formData);
      console.log(response.data);
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error:', error.message);
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700">Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">LinkedIn Profile</label>
        <input type="text" name="linkedInProfile" value={formData.linkedInProfile} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Professional Summary</label>
        <textarea name="professionalSummary" value={formData.professionalSummary} onChange={handleChange} className="w-full px-3 py-2 border rounded"></textarea>
      </div>
      <button type="submit" className="px-4 py-2 bg-gray-dark text-white rounded" disabled={submitStatus === 'loading'}>
        {submitStatus === 'loading' ? 'Submitting...' : 'Submit'}
      </button>
      {submitStatus === 'success' && (
        <p className="text-green-500 mt-2">Profile submitted successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-500 mt-2">An error occurred. Please try again.</p>
      )}
    </form>
  );
};

export default JobSeekerProfileForm;