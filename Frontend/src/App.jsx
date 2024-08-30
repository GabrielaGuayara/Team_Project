import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Routes from "./routes/Routes";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
    
      <Navbar />
      <Carousel/>
      <Routes />
      <Footer />
    </>
  );
}

export default App;
