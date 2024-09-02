import React, { useState } from 'react';


const FinancialAidForm = () => {
  const [action, setAction] = useState('Single');

  return (
    <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Financial Aid Application</h1>
      <form action="/api/FinancialAid/checkEligibility" method="post" className="space-y-6">

        <p className="text-lg font-medium">Are you married?</p>
        <div>
          <input type="radio" id="yes" name="maritalStatus" value="Yes" onChange={() => setAction('Married')}
          />
          <label htmlFor="yes" className="ml-2">Yes</label>
        </div>
        <div>
          <input type="radio" id="no" name="maritalStatus" value="No" onChange={() => setAction('Single')}
          />
          <label htmlFor="no" className="ml-2">No</label>
        </div>

        <div>
          <label htmlFor="annualIncome" className="block text-lg font-medium mb-2">
            What is your annual adjusted gross income (AGI)?
          </label>
          <input type="number" id="annualIncome" name="annualIncome" required className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {action === 'Married' ? 
          <>
            <div>
              <label htmlFor="spouseAnnualIncome" className="block text-lg font-medium mb-2">
                What is your spouse's annual adjusted gross income (AGI)?
              </label>
              <input type="number" id="spouseAnnualIncome" name="spouseAnnualIncome" required className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="savings529Coverdell" className="block text-lg font-medium mb-2">
                How much do you, your spouse, and your child have in 529 plans and Coverdell ESAs?
              </label>
              <input type="number" id="savings529Coverdell" name="savings529Coverdell" required className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          </>
      

        : <div></div>}

            <div>
              <label htmlFor="childAnnualIncome" className="block text-lg font-medium mb-2">
                What is your child's annual adjusted gross income (AGI)?
              </label>
              <input type="number" id="childAnnualIncome" name="childAnnualIncome" required className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="bankInvestment" className="block text-lg font-medium mb-2">
                How much do you have in non-retirement bank and investment accounts (excluding 529 plans and Coverdell ESAs)?
              </label>
              <input type="number" id="bankInvestment"name="bankInvestment" required className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="childBankInvestment" className="block text-lg font-medium mb-2">
                How much does your child have in non-retirement bank and investment accounts (including UGMA/UTMA and trusts, but excluding 529 plans and Coverdell ESAs)?
              </label>
              <input type="number" id="childBankInvestment" name="childBankInvestment" required className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
           
        {
          action === "Single" ?
          <div>
          <label htmlFor="savings529Coverdell" className="block text-lg font-medium mb-2">
            How much do you and your child have in 529 plans and Coverdell ESAs?
          </label>
          <input type="number" id="savings529Coverdell" name="savings529Coverdell" required className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div> : <div></div>
        }
  

        <div>
          <label htmlFor="membersOfHousehold" className="block text-lg font-medium mb-2">
            How many members will be in your household when your child is enrolled in college (including your child)?
          </label>
          <input type="number" id="membersOfHousehold" name="membersOfHousehold" required className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="text-center">
          <input type="submit" value="Check Eligibility" className="btn bg-red py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-600"
          />
        </div>

      </form>
    </div>
  );
};

export default FinancialAidForm;



