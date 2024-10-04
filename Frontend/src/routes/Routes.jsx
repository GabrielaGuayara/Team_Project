import { Route, Routes as R } from "react-router-dom";
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
import Event from "../components/EduComponents/events";
import SuggestionForm from "../components/EduComponents/SuggestionForm";
import AdminLogin from "../components/EduComponents/AdminLogin";
import AdminSignUp from "../components/EduComponents/AdminSignUp";
import SupportCounsel from "../screens/SupportCounsel/SupportCounsel";
import SupportCounselorRegisterForm from "../screens/SupportCounsel/Forms/SupportCounselorRegisterForm";

import SupportCounselorDashboard from "../screens/SupportCounsel/Dashboard/SupportCounselDashboard";
import { AuthProvider } from "../authentication/AuthProvider";
import SupportCounselPrivateRoute from "../components/routeComponents/SupportCounselorPrivateRoute";
import SupportCounselorLoginForm from "../screens/SupportCounsel/Forms/SupportCounselorLoginForm";
import UserRegisterForm from "../screens/User/UserRegisterForm";
import UserPrivateRoute from "../components/routeComponents/UserPrivateRoute";
import UserRequestSupport from "../screens/User/UserRequestSupport";
import RequestAssistanceForm from "../screens/User/RequestAssistanceForm";
import Dashboard from "../components/adminComponents/dashboard";
import UpdateEvent from "../components/adminComponents/UpdateEvent";
import UpdateEduCenter from "../components/adminComponents/UpdateEduCenter";

function Routes() {
  return (
    <>
      <AuthProvider>
        <R>
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/events" element={<Event />} />
          <Route path="/financialAidForm" element={<FinancialAidForm />} />
          <Route path="/suggestionsForm" element={<SuggestionForm />} />
          <Route path="/eslCenters" element={<EduCenters />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/employment" element={<Employment />} />


          {/* User Routes */}
          <Route path="/register" element={<UserRegisterForm />} />
          <Route
            path="/support-counsel-assistance"
            element={<UserPrivateRoute component={UserRequestSupport} />}
          />
          <Route
            path="/request-assistance/:counselorId"
            element={<RequestAssistanceForm />}
          />
          {/* User Routes */}

          {/* Support Counselor Routes */}
          <Route path="/support-counsel" element={<SupportCounsel />} />
          <Route
            path="/support-counsel-register"
            element={<SupportCounselorRegisterForm />}
          />
          <Route
            path="/support-counsel-login"
            element={<SupportCounselorLoginForm />}
          />
          <Route
            path="/support-counsel-dashboard"
            element={
              <SupportCounselPrivateRoute
                component={SupportCounselorDashboard}
              />
            }
          />
          {/* Support Counselor Routes */}

          {/* Volunteer Routes */}
          <Route path="/volunteer-sign-up" element={<VolunteerForm />} />
          <Route
            path="/volunteer-event-form"
            element={<VolunteerEventForm />}
          />

          <Route path="/testing" element={<VolunteerApplicantsDashboard />} />
        
          {/* Volunteer Routes */}

          {/* ADMIN route */}
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminSignup" element={<AdminSignUp />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/dashboard/update/event/:id" element={<UpdateEvent />} />
          <Route path="/admin/dashboard/update/events/:eventId" element={<UpdateEvent/>} />
          <Route path="/admin/dashboard/update/edu-center/:eduCenterId" element={<UpdateEduCenter/>} />
       

        </R>
      </AuthProvider>
    </>
  );
}

export default Routes;
