import React, { useEffect, useState } from 'react';

const JobSeekerProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerms, setSearchTerms] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('http://localhost:8081/jobseekerprofiles/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProfiles(data);
        setFilteredProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerms(value);
    handleSearch(value);
  };

  const handleSearch = (searchValue) => {
    const terms = searchValue.toLowerCase().split(' ').filter(term => term.length > 0);
    if (terms.length === 0) {
      setFilteredProfiles(profiles);
    } else {
      const filtered = profiles.filter(profile =>
        terms.some(term =>
          profile.professionalSummary.toLowerCase().includes(term)
        )
      );
      setFilteredProfiles(filtered);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Find Talent</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by skills or keywords in professional summary..."
          value={searchTerms}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.map((profile) => (
          <div key={profile.id} className="p-6 bg-white border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{profile.fullName}</h2>
            <p className="text-gray-600"><strong>Email:</strong> {profile.email}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {profile.phoneNumber}</p>
            <p className="text-gray-600"><strong>LinkedIn:</strong> {profile.linkedInProfile}</p>
            <div className="mt-4">
              <strong className="text-gray-800">Professional Summary:</strong>
              <p className="text-gray-600">{profile.professionalSummary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSeekerProfileList;

