import React, { useState } from 'react';


const SuggestionForm = () => {
  const [formData, setFormData] = useState({
    pagetobeupdated: [],
    specificquestion: '',
    improveProgram: '',
    email: ''
  });
  
  const [message, setMessage] = useState('');


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzua5wJFKzPcSqCBMIOl39rlJF0rPHnm_lwf7dOWQIHwzud0sJPuekKdKr7EGJ8BShtcQ/exec';


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData(prevState => ({
          ...prevState,
          pagetobeupdated: [...prevState.pagetobeupdated, value]
        }));
      } else {
        setFormData(prevState => ({
          ...prevState,
          pagetobeupdated: prevState.pagetobeupdated.filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      setMessage("Message sent successfully");
      setTimeout(() => setMessage(""), 5000);
      setFormData({
        pagetobeupdated: [],
        specificquestion: '',
        improveProgram: '',
        email: ''
      });
    })
    .catch(error => console.error('Error!', error.message));
  };


  return (
    <>
      <div className='bg-lightBlue p-8'>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md m-8">
          <h1 className="text-3xl font-bold mb-6 text-center">See something out of date on the Education page?</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor='pagetobeupdated' className="block text-lg font-medium mb-2">
                What page that needs to be updated?
              </label>
              <div className='flex flex-col'>
                <div>
                  <input type="checkbox" id="elegibilityForm" name="pagetobeupdated" value="Financial Aid Eligibility Form" onChange={handleChange} className='mr-2' />  
                  <label htmlFor='elegibilityForm'> Financial Aid Eligibility Form </label>
                </div>
                <div>
                  <input type="checkbox" id="eslCenter" name="pagetobeupdated" value="Find ESL Centers" onChange={handleChange} className='mr-2' />
                  <label htmlFor='eslCenter'>  Find ESL Centers </label>
                </div>
                <div>
                  <input type="checkbox" id="educationalEvents" name="pagetobeupdated" value="Educational Events" onChange={handleChange} className='mr-2'/>
                  <label htmlFor='educationalEvents'>  Educational Events </label>
                </div>
              </div>
            </div>


            <div>
              <label htmlFor="specificquestion" className="block text-lg font-medium mb-2">
                Please can you be more specific about the section or program that needs to be updated?
              </label>
              <textarea name="specificquestion" id="specificquestion" rows="5" value={formData.specificquestion} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2" />
            </div>


            <div>
              <label htmlFor="improveProgram" className="block text-lg font-medium mb-2">
                Tell us how to make this program listing better?
              </label>
              <textarea name="improveProgram" id="improveProgram" rows="5" value={formData.improveProgram} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2" />
            </div>


            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                What is your email address in case we have follow-up questions?
              </label>
              <input name="email" id="email" type="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2" />
            </div>


            <div className='text-center'>
              <button className='bg-red p-4 rounded text-white font-bold w-40'>
                Submit
              </button>
            </div>


            {message && <p className="text-center text-green-600 mt-4">{message}</p>}
          </form>
        </div>
      </div>
    </>
  );
};


export default SuggestionForm;




