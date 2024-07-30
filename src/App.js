import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Expertise from "./pages/Expertise";
import Projects from "./pages/Projects";
import Navbar from "./component/Navbar";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";
import { initializeAnalytics, trackPageView } from "./analytics";
import Cookies from "./component/Cookies";

const TRACKING_ID = "G-X5LNVZ2K4X";
function App() {
  const [isAnalyticsInitialized, setIsAnalyticsInitialized] = useState(false);

  function handleConsent() {
    initializeAnalytics(TRACKING_ID);
    setIsAnalyticsInitialized(true);
  }

  return (
    <div className="app">
      <BrowserRouter basename="/upgraded">
        {isAnalyticsInitialized && <TrackPageViews />}
        <Cookies onConsent={handleConsent} />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

export default App;
