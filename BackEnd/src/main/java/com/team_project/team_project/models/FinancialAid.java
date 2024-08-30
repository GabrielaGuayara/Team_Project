package com.team_project.team_project.models;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class FinancialAid {

    private Integer annualIncome;
    private Integer childAnnualIncome;
    private Integer bankInvestment;
    private Integer childBankInvestment;
    private Integer savings;
    private Integer membersOfHousehold;

    // Method to determine eligibility is someone is eligible for financial aid
    public boolean isEligibleForAid() {
        int totalIncome = annualIncome;
        return totalIncome < 60000 && bankInvestment < 50000 && childBankInvestment < 50000;
    }

    // Method to get financial aid grant link
    public String getFinancialAidLink() {
        return "https://studentaid.gov/apply-for-aid/fafsa/filling-out";
    }
}
