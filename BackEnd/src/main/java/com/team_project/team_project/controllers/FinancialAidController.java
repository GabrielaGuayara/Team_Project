package com.team_project.team_project.controllers;

import com.team_project.team_project.models.FinancialAid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/FinancialAid")
public class FinancialAidController {

    //Method to get the financial aid form
    @GetMapping("/financialAidForm")
    public String getFinancialAidForm(Model model) {
        model.addAttribute("financialAid", new FinancialAid());
        return "financialAid.html";
    }

    //If the user is eligible will be direct to another page with a link to apply
    @PostMapping("/checkEligibility")
    public String checkEligibility(@ModelAttribute FinancialAid financialAid, Model model) {
        boolean eligible = financialAid.isEligibleForAid();
        model.addAttribute("eligible", eligible);
        if (eligible) {
            model.addAttribute("grantLink", financialAid.getFinancialAidLink());
        }
        return "eligibilityResults.html";
    }
}
