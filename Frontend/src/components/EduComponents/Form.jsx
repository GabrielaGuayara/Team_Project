import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FinancialAidForm = () => {
  const [action, setAction] = useState('Single');
  const [eligibilityLink, setEligibilityLink] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const annualIncome = parseFloat(formData.get('annualIncome'));
    const spouseAnnualIncome = action === 'Married' ? parseFloat(formData.get('spouseAnnualIncome')) || 0 : 0;
    const childAnnualIncome = parseFloat(formData.get('childAnnualIncome'));
    const bankInvestment = parseFloat(formData.get('bankInvestment'));
    const childBankInvestment = parseFloat(formData.get('childBankInvestment'));
    const savings529Coverdell = parseFloat(formData.get('savings529Coverdell')) || 0;

    const totalIncome = annualIncome + spouseAnnualIncome;
    
    const isEligible = isEligibleForAid(totalIncome, bankInvestment, childBankInvestment);
    console.log(isEligible)

    if (isEligible) {
      setEligibilityLink("https://studentaid.gov/apply-for-aid/fafsa/filling-out");
      setResponseMessage("You are eligible for financial aid! Click the link below to apply.");
    } else {
      setEligibilityLink('');
      setResponseMessage("You are not eligible for financial aid.");
    }
  };

  const resetForm = () => {
    setEligibilityLink('');
    setResponseMessage('');
    setAction('Single');
    document.getElementById("financialAidForm").reset();
  };

  const isEligibleForAid = (totalIncome, bankInvestment, childBankInvestment) => {
    return totalIncome < 60000 && bankInvestment < 50000 && childBankInvestment < 50000;
  };

  return (
    <section className="relative w-full bg-lightBlue p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Ready to dive into the world of NYC education?</h1>
      <p className="text-lg mb-10 text-center">
        We know that education can be expensive and many people cannot afford it. Therefore, we have this financial aid calculator to help you see if you qualify for financial aid.
      </p>

      <div className='flex flex-col md:flex-row w-full max-w-6xl'>
        <div className="bg-yellow border-yellow p-6 m-4 rounded flex-1">
          <p className="font-bold text-2xl mb-4">Instructions:</p>
          <ul className='text-left bg-white p-4 rounded space-y-3 shadow-md'>
            <li className='list-none'><strong>Annual Income:</strong> Your total income before taxes for the year.</li>
            <li className='list-none'><strong>Bank Investments:</strong> Total amount in your non-retirement bank accounts.</li>
            <li className='list-none'><strong>Child's Annual Income:</strong> Your child's total income before taxes for the year.</li>
            <li className='list-none'><strong>Household Members:</strong> Total number of people living with you when your child goes to college.</li>
            <li className='list-none'><strong>529 Plans:</strong> Accounts designed to help save for education expenses.</li>
            <li className='list-none'><strong>Coverdell ESAs:</strong> Education savings accounts to help pay for qualified education expenses.</li>
            <li className='list-none'><strong>AGI:</strong> Adjusted Gross Income, which is your total income minus specific deductions.</li>
            <li className='list-none'><strong>Eligibility Criteria:</strong> Factors that determine if you qualify for financial aid.</li>
          </ul>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-5 rounded-lg shadow-md m-4 flex-1">
          <h1 className="text-3xl font-bold mb-6 text-center">Financial Aid Eligibility Form</h1>

          <form id="financialAidForm" onSubmit={handleSubmit} className="space-y-6">
            <p className="text-lg font-medium">Are you married?</p>
            <div>
              <input type="radio" id="yes" name="maritalStatus" value="Yes" onChange={() => setAction('Married')} />
              <label htmlFor="yes" className="ml-2">Yes</label>
            </div>
            <div>
              <input type="radio" id="no" name="maritalStatus" value="No" onChange={() => setAction('Single')} />
              <label htmlFor="no" className="ml-2">No</label>
            </div>

            <div>
              <label htmlFor="annualIncome" className="block text-lg font-medium mb-2">What is your annual adjusted gross income (AGI)?</label>
              <input type="number" id="annualIncome" name="annualIncome" required className="w-full border border-gray-300 rounded-lg p-2" />
            </div>

            {action === 'Married' && (
              <>
                <div>
                  <label htmlFor="spouseAnnualIncome" className="block text-lg font-medium mb-2">What is your spouse's annual adjusted gross income (AGI)?</label>
                  <input type="number" id="spouseAnnualIncome" name="spouseAnnualIncome" required className="w-full border border-gray-300 rounded-lg p-2" />
                </div>
                <div>
                  <label htmlFor="savings529Coverdell" className="block text-lg font-medium mb-2">How much do you, your spouse, and your child have in 529 plans and Coverdell ESAs?</label>
                  <input type="number" id="savings529Coverdell" name="savings529Coverdell" required className="w-full border border-gray-300 rounded-lg p-2" />
                </div>
              </>
            )}

            <div>
              <label htmlFor="childAnnualIncome" className="block text-lg font-medium mb-2">What is your child's annual adjusted gross income (AGI)?</label>
              <input type="number" id="childAnnualIncome" name="childAnnualIncome" required className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
            <div>
              <label htmlFor="bankInvestment" className="block text-lg font-medium mb-2">How much do you have in non-retirement bank and investment accounts (excluding 529 plans and Coverdell ESAs)?</label>
              <input type="number" id="bankInvestment" name="bankInvestment" required className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
            <div>
              <label htmlFor="childBankInvestment" className="block text-lg font-medium mb-2">How much does your child have in non-retirement bank and investment accounts (including UGMA/UTMA and trusts, but excluding 529 plans and Coverdell ESAs)?</label>
              <input type="number" id="childBankInvestment" name="childBankInvestment" required className="w-full border border-gray-300 rounded-lg p-2" />
            </div>

            {action === "Single" && (
              <div>
                <label htmlFor="savings529Coverdell" className="block text-lg font-medium mb-2">How much do you and your child have in 529 plans and Coverdell ESAs?</label>
                <input type="number" id="savings529Coverdell" name="savings529Coverdell" required className="w-full border border-gray-300 rounded-lg p-2" />
              </div>
            )}

            <div>
              <label htmlFor="membersOfHousehold" className="block text-lg font-medium mb-2">How many members will be in your household when your child is enrolled in college (including your child)?</label>
              <input type="number" id="membersOfHousehold" name="membersOfHousehold" required className="w-full border border-gray-300 rounded-lg p-2" />
            </div>

            <div className="text-center">
              <input type="submit" value="Check Eligibility" className="btn bg-gray-dark text-white font-semibold py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300" />
              <button type="button" onClick={resetForm} className="btn bg-red text-white font-semibold py-2 px-4 rounded-lg cursor-pointer hover:bg-red-700 transition duration-300 ml-4">
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>

      {responseMessage && (
        <div className={`mt-6 p-6 text-center text-white bg-gray-dark shadow-lg rounded-lg ${eligibilityLink ? 'bg-green' : 'bg-red'}`}>
          <p>{responseMessage}</p>
          {eligibilityLink && (
            <a href={eligibilityLink} target="_blank" rel="noopener noreferrer" className="text-red underline">
              Apply for Financial Aid
            </a>
          )}
        </div>
      )}

      {/* <Link to="/suggestionsForm" className='mt-10'>
        <button className='bg-blue-600 text-white bg-green font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300'>
          Suggest an update to this program
        </button>
      </Link> */}
    </section>
  );
};

export default FinancialAidForm;
