import React, { useState } from 'react';

const JobSeekerProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    linkedInProfile: '',
    professionalSummary: '',
    keySkills: [''],
    workExperience: [{ jobTitle: '', companyName: '', datesOfEmployment: '', responsibilitiesAndAchievements: '' }],
    education: [{ degree: '', institutionName: '', graduationYear: '' }],
    certifications: [''],
    projects: [''],
    volunteerExperience: [''],
    languagesSpoken: [''],
    references: ['']
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, index, field) => {
    const { value } = e.target;
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const handleNestedArrayChange = (e, index, field, nestedField) => {
    const { value } = e.target;
    const updatedArray = [...formData[field]];
    updatedArray[index][nestedField] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const addArrayField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const addNestedArrayField = (field, nestedObject) => {
    setFormData({ ...formData, [field]: [...formData[field], nestedObject] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      const response = await fetch('http://localhost:8081/jobseekerprofiles/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
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
      <div className="mb-4">
        <label className="block text-gray-700">Key Skills</label>
        {formData.keySkills.map((skill, index) => (
          <input key={index} type="text" value={skill} onChange={(e) => handleArrayChange(e, index, 'keySkills')} className="w-full px-3 py-2 border rounded mb-2" />
        ))}
        <button type="button" onClick={() => addArrayField('keySkills')} className="px-3 py-2 bg-gray-dark text-white rounded">Add Skill</button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Work Experience</label>
        {formData.workExperience.map((experience, index) => (
          <div key={index} className="mb-2">
            <input type="text" placeholder="Job Title" value={experience.jobTitle} onChange={(e) => handleNestedArrayChange(e, index, 'workExperience', 'jobTitle')} className="w-full px-3 py-2 border rounded mb-2" />
            <input type="text" placeholder="Company Name" value={experience.companyName} onChange={(e) => handleNestedArrayChange(e, index, 'workExperience', 'companyName')} className="w-full px-3 py-2 border rounded mb-2" />
            <input type="text" placeholder="Dates of Employment" value={experience.datesOfEmployment} onChange={(e) => handleNestedArrayChange(e, index, 'workExperience', 'datesOfEmployment')} className="w-full px-3 py-2 border rounded mb-2" />
            <textarea placeholder="Responsibilities and Achievements" value={experience.responsibilitiesAndAchievements} onChange={(e) => handleNestedArrayChange(e, index, 'workExperience', 'responsibilitiesAndAchievements')} className="w-full px-3 py-2 border rounded mb-2"></textarea>
          </div>
        ))}
        <button type="button" onClick={() => addNestedArrayField('workExperience', { jobTitle: '', companyName: '', datesOfEmployment: '', responsibilitiesAndAchievements: '' })} className="px-3 py-2 bg-gray-dark text-white rounded">Add Experience</button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Education</label>
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleNestedArrayChange(e, index, 'education', 'degree')} className="w-full px-3 py-2 border rounded mb-2" />
            <input type="text" placeholder="Institution Name" value={edu.institutionName} onChange={(e) => handleNestedArrayChange(e, index, 'education', 'institutionName')} className="w-full px-3 py-2 border rounded mb-2" />
            <input type="text" placeholder="Graduation Year" value={edu.graduationYear} onChange={(e) => handleNestedArrayChange(e, index, 'education', 'graduationYear')} className="w-full px-3 py-2 border rounded mb-2" />
          </div>
        ))}
        <button type="button" onClick={() => addNestedArrayField('education', { degree: '', institutionName: '', graduationYear: '' })} className="px-3 py-2 bg-gray-dark text-white rounded">Add Education</button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Certifications</label>
        {formData.certifications.map((cert, index) => (
          <input key={index} type="text" value={cert} onChange={(e) => handleArrayChange(e, index, 'certifications')} className="w-full px-3 py-2 border rounded mb-2" />
        ))}
        <button type="button" onClick={() => addArrayField('certifications')} className="px-3 py-2 bg-gray-dark text-white rounded">Add Certification</button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Projects</label>
        {formData.projects.map((project, index) => (
          <input key={index} type="text" value={project} onChange={(e) => handleArrayChange(e, index, 'projects')} className="w-full px-3 py-2 border rounded mb-2" />
        ))}
        <button type="button" onClick={() => addArrayField('projects')} className="px-3 py-2 bg-gray-dark text-white rounded">Add Project</button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Volunteer Experience</label>
        {formData.volunteerExperience.map((volunteer, index) => (
          <input key={index} type="text" value={volunteer} onChange={(e) => handleArrayChange(e, index, 'volunteerExperience')} className="w-full px-3 py-2 border rounded mb-2" />
        ))}
        <button type="button" onClick={() => addArrayField('volunteerExperience')} className="px-3 py-2 bg-gray-dark text-white rounded">Add Volunteer Experience</button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Languages Spoken</label>
        {formData.languagesSpoken.map((language, index) => (
          <input key={index} type="text" value={language} onChange={(e) => handleArrayChange(e, index, 'languagesSpoken')} className="w-full px-3 py-2 border rounded mb-2" />
        ))}
        <button type="button" onClick={() => addArrayField('languagesSpoken')} className="px-3 py-2 bg-gray-dark text-white rounded">Add Language</button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">References</label>
        {formData.references.map((reference, index) => (
          <input key={index} type="text" value={reference} onChange={(e) => handleArrayChange(e, index, 'references')} className="w-full px-3 py-2 border rounded mb-2" />
        ))}
        <button type="button" onClick={() => addArrayField('references')} className="px-3 py-2 bg-gray-dark text-white rounded">Add Reference</button>
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
