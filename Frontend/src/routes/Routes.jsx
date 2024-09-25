import { Route, Routes as R} from "react-router-dom";
// import { Homepage, Volunteer, Healthcare, Legal, Education } from ".";
import Homepage from "../screens/Homepage";
import Volunteer from "../screens/Volunteer/Volunteer";
import Legal from "../screens/Legal";
import Education from "../screens/Education";
import Healthcare from "../screens/Healthcare";
import Employment from "../screens/Employment";
import VolunteerForm from "../screens/Volunteer/Forms/VolunteerForm";
import VolunteerEventForm from "../screens/Volunteer/Forms/VolunteerEventForm";
import VolunteerApplicantsDashboard from "../screens/Volunteer/Dashboard/VolunteerApplicantsDashboard";
import FinancialAidForm from "../components/EduComponents/Form";
import EduCenters from "../components/EduComponents/eduCenters";
import QAPage from "../components/EduComponents/QAPage";
import Event from "../components/EduComponents/events";
import SuggestionForm from "../components/EduComponents/SuggestionForm";
import AdminLogin from "../components/EduComponents/AdminLogin";
import AdminSignUp from "../components/EduComponents/AdminSignUp";

function Routes() {
  return (
    <>
      <R>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/questiosn-and-answers" element={<QAPage />} />
        <Route path="/events" element={<Event />} />
        <Route path="/financialAidForm" element = {<FinancialAidForm/>} />
        <Route path="/suggestionsForm" element = {<SuggestionForm/>} />
        <Route path="/eslCenters" element={<EduCenters/>}/>
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/volunteer-sign-up" element={<VolunteerForm />} />
        <Route path="/volunteer-event-form" element={<VolunteerEventForm />} />
        <Route path="/testing" element={<VolunteerApplicantsDashboard />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminSinup" element={<AdminSignUp />} />
      </R>
    </>
  );
}

export default Routes;
