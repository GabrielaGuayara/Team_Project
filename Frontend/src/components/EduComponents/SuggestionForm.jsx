import React from 'react'

const SuggestionForm = () => {

  return (
    <>
      <div className='bg-lightBlue p-8'>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md m-8">
        <h1 className="text-3xl font-bold mb-6 text-center">See somethimg out of data on the Education page?</h1>

        <form className="space-y-6">

        <div>
            <label htmlFor='pagetobeupdated' className="block text-lg font-medium mb-2">
            What page that needs to be updated?
            </label>
          <div className='flex flex-col'>
         
         <div>
            <input type="checkbox" id="elegibilityForm" name="elegibilityForm" className='mr-2' />  
            <label htmlFor='elegibilityForm'> Financial Aid EligibilityForm </label> 
        </div>

        <div>
            <input type="checkbox" id="eslCenter" name="eslCenter" className='mr-2' />
            <label htmlFor='eslCenter'>  Find ESL Centers </label>
        </div>
        
        <div>
            <input type="checkbox" id="educationalEvents" name="educationalEvents" className='mr-2'/>
           <label htmlFor='educationalEvents'>  Educational Events </label>
        </div>
          </div>
        </div>

        <div>
            <label htmlFor="specificquestion" className="block text-lg font-medium mb-2">
            Please can you be more specific about the section or program that needs to be update?
            </label>
            <textarea name="specificquestion" id="specificquestion" type="text" col= "4" rows="5"  className="w-full border border-gray-300 rounded-lg p-2" />
        </div>
        <div>
            <label htmlFor="improveProgram" className="block text-lg font-medium mb-2">
            Tell us how to make this program listing better?
            </label>
            <textarea name="improveProgram" id="sectionNeedsUpdate" type="text"  col= "4" rows="5" className="w-full border border-gray-300 rounded-lg p-2" />
        </div>

        <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">
           What is email address in case we have follow up questions
            </label>
            <input name="improveProgram" id="sectionNeedsUpdate" type="email" className="w-full border border-gray-300 rounded-lg p-2" />
        </div>

        <div className='text-center'>
        <button className='bg-red p-4 rounded text-white font-bold w-40'>
            Submit
        </button>
        </div>
   </form>
</div>
</div>
</>
  )
}
export default SuggestionForm;