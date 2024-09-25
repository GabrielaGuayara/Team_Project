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
    const bankInvestment = parseFloat(formData.get('bankInvestment'));
    const childBankInvestment = parseFloat(formData.get('childBankInvestment'));
    
    const isEligible = isEligibleForAid(annualIncome, bankInvestment, childBankInvestment);
    if (isEligible) {
      setEligibilityLink("https://studentaid.gov/apply-for-aid/fafsa/filling-out");
      setResponseMessage("You are eligible for financial aid! Click the link below to apply.");
    } else {
      setEligibilityLink('');
      setResponseMessage("You are not eligible for financial aid.");
    }

    reset();
  };

  const isEligibleForAid = (annualIncome, bankInvestment, childBankInvestment) => {
    return annualIncome < 60000 && bankInvestment < 50000 && childBankInvestment < 50000;
  };

  return (
    <>
    <section className="relative w-full bg-no-repeat bg-right-bottom bg-lightBlue p-10">
      <div className="flex items-end justify-center pb-5">
        <div className="flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-3xl font-bold mb-4">Ready to dive into the world of NYC education?</h1>
          <p className="text-lg pb-10">
            We know that education can be expensive and many people cannot afford it. Therefore, we have this financial aid calculator to help you see if you qualify for financial aid.
          </p>
          <div className='flex'>
          <div className="bg-yellow border-yellow p-10 m-8 rounded">
              <p className="font-bold text-3xl mb-4">Instructions:</p>
              <ul className='text-left bg-white p-6 rounded space-y-3 shadowed'>
                <li className='list-none'><strong>Annual Income:</strong> Your total income before taxes for the year.</li>
                <li className='list-none'><strong>Bank Investments:</strong> Total amount in your non-retirement bank accounts.</li>
                <li className='list-none'><strong>Child's Annual Income:</strong> Your child's total income before taxes for the year.</li>
                <li className='list-none'><strong>Household Members:</strong> Total number of people living with you when your child goes to college.</li>
              </ul>
            </div>
          <div className="max-w-3xl mx-auto bg-white p-5 rounded-lg shadow-md m-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Financial Aid Eligibility Form</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <label htmlFor="annualIncome" className="block text-lg font-medium mb-2">
                  What is your annual adjusted gross income (AGI)?
                </label>
                <input type="number" id="annualIncome" name="annualIncome" required className="w-full border border-gray-300 rounded-lg p-2" />
              </div>

              {action === 'Married' && (
                <>
                  <div>
                    <label htmlFor="spouseAnnualIncome" className="block text-lg font-medium mb-2">
                      What is your spouse's annual adjusted gross income (AGI)?
                    </label>
                    <input type="number" id="spouseAnnualIncome" name="spouseAnnualIncome" required className="w-full border border-gray-300 rounded-lg p-2" />
                  </div>
                  <div>
                    <label htmlFor="savings529Coverdell" className="block text-lg font-medium mb-2">
                      How much do you, your spouse, and your child have in 529 plans and Coverdell ESAs?
                    </label>
                    <input type="number" id="savings529Coverdell" name="savings529Coverdell" required className="w-full border border-gray-300 rounded-lg p-2" />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="childAnnualIncome" className="block text-lg font-medium mb-2">
                  What is your child's annual adjusted gross income (AGI)?
                </label>
                <input type="number" id="childAnnualIncome" name="childAnnualIncome" required className="w-full border border-gray-300 rounded-lg p-2" />
              </div>
              <div>
                <label htmlFor="bankInvestment" className="block text-lg font-medium mb-2">
                  How much do you have in non-retirement bank and investment accounts (excluding 529 plans and Coverdell ESAs)?
                </label>
                <input type="number" id="bankInvestment" name="bankInvestment" required className="w-full border border-gray-300 rounded-lg p-2" />
              </div>
              <div>
                <label htmlFor="childBankInvestment" className="block text-lg font-medium mb-2">
                  How much does your child have in non-retirement bank and investment accounts (including UGMA/UTMA and trusts, but excluding 529 plans and Coverdell ESAs)?
                </label>
                <input type="number" id="childBankInvestment" name="childBankInvestment" required className="w-full border border-gray-300 rounded-lg p-2" />
              </div>

              {action === "Single" && (
                <div>
                  <label htmlFor="savings529Coverdell" className="block text-lg font-medium mb-2">
                    How much do you and your child have in 529 plans and Coverdell ESAs?
                  </label>
                  <input type="number" id="savings529Coverdell" name="savings529Coverdell" required className="w-full border border-gray-300 rounded-lg p-2" />
                </div>
              )}

              <div>
                <label htmlFor="membersOfHousehold" className="block text-lg font-medium mb-2">
                  How many members will be in your household when your child is enrolled in college (including your child)?
                </label>
                <input type="number" id="membersOfHousehold" name="membersOfHousehold" required className="w-full border border-gray-300 rounded-lg p-2" />
              </div>

              <div className="text-center">
                <input type="submit" value="Check Eligibility" className="btn bg-red py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-600" />
              </div>
            </form>

          </div>

        </div>

        {responseMessage && (
              <div className={`mt-6 p-6 text-center text-white shadow-lg rounded-lg ${eligibilityLink ? 'bg-green' : 'bg-red text-white'}`}>
                <p>{responseMessage}</p>
                {eligibilityLink && (
                  <a href={eligibilityLink} target="_blank" rel="noopener noreferrer" className="text-red underline">
                    Apply for Financial Aid
                  </a>
                )}
              </div>
            )}
        </div>
      </div>


      <button className='bg-lightBlue'>
      Suggest an update
    See something out of date on this page?
      <Link to="/suggestionsForm">
      Suggest an update to this program
      </Link>
      </button>
    </section>
    </>
  );
};

export default FinancialAidForm;



