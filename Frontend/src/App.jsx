import { useContext } from "react";

import "./App.css";
import "leaflet/dist/leaflet.css";
import Navbar from "./components/Navbar";
import Routes from "./routes/Routes";
import Footer from "./components/Footer";
import SupportCounselorNavbar from "./components/SupportCounselorComponents/SupportCounselorNavbar";
import UserNavbar from "./components/UserComponents/UserNavbar";
import { AuthContext } from "./authentication/AuthProvider";

function App() {
  const { isAuthenticated, role } = useContext(AuthContext);

  let navbar;

  if (isAuthenticated) {
    if (role === "Support Counselor") {
      navbar = <SupportCounselorNavbar />;
    } else if (role === "User") {
      navbar = <UserNavbar />;
    }
  } else {
    navbar = <Navbar />;
  }

  console.log(role);
  return (
    <>
      {navbar}
      <Routes />
      <Footer />
    </>
  );
}

export default App;
