import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashPage from "./components/SplashPage";
import Details from "./components/Details";
import PictureSlider from "./components/PictureSlider";
import RSVPForm from "./components/RSVPForm";

const App = () => {
  <Router>
    <Routes>
      <Route path="/" exact component={SplashPage} />
      <Route path="/details" component={Details} />
      <Route path="/pictures" component={PictureSlider} />
      <Route path="/rsvp" component={RSVPForm} />
    </Routes>
  </Router>
};

export default App;