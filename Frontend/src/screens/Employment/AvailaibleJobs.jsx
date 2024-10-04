import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AvailaibleJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://webscraper-y64g.onrender.com/jobs');
        setJobs(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch jobs. Please try again later.');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-2">{job.department}</p>
              <p className="text-gray-700 mb-2">{job.salary}</p>
              <p className="text-gray-600 mb-2">{job.location}</p>
              <p className="text-sm text-gray-500 mb-2">Experience: {job.experience}</p>
              <p className="text-sm text-gray-500 mb-2">Exam: {job.exam}</p>
              <p className="text-sm text-gray-500 mb-4">Expires: {job.expire}</p>
              <a href={job.jobUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-gray-dark text-white rounded">
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailaibleJobs;