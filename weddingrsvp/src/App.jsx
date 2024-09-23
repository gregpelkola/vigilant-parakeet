// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashPage from "./components/SplashPage";
import Details from "./components/Details";
import PictureSlider from "./components/PictureSlider";
import RSVPForm from "./components/RSVPForm";
import Layout from "./components/Layout";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/details" element={<Details />} />
          <Route path="/pictures" element={<PictureSlider />} />
          <Route path="/rsvp" element={<RSVPForm />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;