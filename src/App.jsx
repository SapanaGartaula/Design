import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Popular from "./Components/Popular";
import Category from "./Components/Category";
import Best from "./Components/Best";
import Achievement from "./Components/Achievement";
import Feedback from "./Components/Feedback";
import Join from "./Components/Join";
import Footer from "./Components/Footer";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Popular />
      <Category />
      <Best />
      <Achievement />
      <Feedback />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
