import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Routes from "./routes/Routes";
import Footer from "./components/Footer";
import Dashboard from "./screens/Volunteer/Dashboard/VolunteerApplicantsDashboard";
import VolunteerApplicantsDashboard from "./screens/Volunteer/Dashboard/VolunteerApplicantsDashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    
    </>
  );
}

export default App;
