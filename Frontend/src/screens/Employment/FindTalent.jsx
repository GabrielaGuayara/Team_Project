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
    setSearchTerms(e.target.value);
  };

  const handleSearch = () => {
    const terms = searchTerms.toLowerCase().split(',').map(term => term.trim());
    const filtered = profiles.filter(profile =>
      terms.every(term =>
        profile.keySkills.some(skill => skill.toLowerCase().includes(term))
      )
    );
    setFilteredProfiles(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Job Seeker Profiles</h1>
      <div className="mb-6 flex">
        <input
          type="text"
          placeholder="Search by skills (comma-separated)..."
          value={searchTerms}
          onChange={handleSearchChange}
          className="flex-grow px-4 py-2 border rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.map((profile) => (
          <div key={profile.id} className="p-6 bg-white border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{profile.fullName}</h2>
            <p className="text-gray-600"><strong>Email:</strong> {profile.email}</p>
            <p className="text-gray-600"><strong>Phone Number:</strong> {profile.phoneNumber}</p>
            <p className="text-gray-600"><strong>LinkedIn:</strong> {profile.linkedInProfile}</p>
            <p className="text-gray-600"><strong>Professional Summary:</strong> {profile.professionalSummary}</p>
            <div className="mt-4">
              <strong className="text-gray-800">Key Skills:</strong>
              <ul className="list-disc list-inside text-gray-600">
                {profile.keySkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <strong className="text-gray-800">Work Experience:</strong>
              <ul className="list-disc list-inside text-gray-600">
                {profile.workExperience.map((experience, index) => (
                  <li key={index}>
                    <p><strong>Job Title:</strong> {experience.jobTitle}</p>
                    <p><strong>Company Name:</strong> {experience.companyName}</p>
                    <p><strong>Dates of Employment:</strong> {experience.datesOfEmployment}</p>
                    <p><strong>Responsibilities and Achievements:</strong> {experience.responsibilitiesAndAchievements}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <strong className="text-gray-800">Education:</strong>
              <ul className="list-disc list-inside text-gray-600">
                {profile.education.map((edu, index) => (
                  <li key={index}>
                    <p><strong>Degree:</strong> {edu.degree}</p>
                    <p><strong>Institution Name:</strong> {edu.institutionName}</p>
                    <p><strong>Graduation Year:</strong> {edu.graduationYear}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <strong className="text-gray-800">Certifications:</strong>
              <ul className="list-disc list-inside text-gray-600">
                {profile.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <strong className="text-gray-800">Projects:</strong>
              <ul className="list-disc list-inside text-gray-600">
                {profile.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <strong className="text-gray-800">Volunteer Experience:</strong>
              <ul className="list-disc list-inside text-gray-600">
                {profile.volunteerExperience.map((volunteer, index) => (
                  <li key={index}>{volunteer}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <strong className="text-gray-800">Languages Spoken:</strong>
              <ul className="list-disc list-inside text-gray-600">
                {profile.languagesSpoken.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <strong className="text-gray-800">References:</strong>
              <ul className="list-disc list-inside text-gray-600">
                {profile.references.map((reference, index) => (
                  <li key={index}>{reference}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSeekerProfileList;

