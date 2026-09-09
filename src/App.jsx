import React from "react";
import {Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Contactw from "./components/Contactwhatsapp";

function App() {
  return (
    <div className="site-background min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-whatsapp" element={<Contactw />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
