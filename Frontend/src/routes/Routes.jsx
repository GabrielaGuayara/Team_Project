import { Route, Routes as R } from "react-router-dom";
// import { Homepage, Volunteer, Healthcare, Legal, Education } from ".";
import Homepage from "../screens/Homepage";
import Volunteer from "../screens/Volunteer/Volunteer";
import Legal from "../screens/Legal";
import Education from "../screens/Education";
import Healthcare from "../screens/Healthcare";
import Employment from "../screens/Employment";
import VolunteerForm from "../screens/Volunteer/Forms/VolunteerForm";
function Routes() {
  return (
    <>
      <R>
        <Route path="/" element={<Homepage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/volunteerSignUp" element={<VolunteerForm />} />
      </R>
    </>
  );
}

export default Routes;
