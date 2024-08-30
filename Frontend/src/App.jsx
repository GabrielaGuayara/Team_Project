import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Routes from "./routes/Routes";
import Footer from "./components/Footer";

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
