import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Expertise from "./pages/Expertise";
import Repositories from "./pages/Projects";
import Navbar from "./component/Navbar";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";
import { initializeAnalytics, trackPageView } from "./analytics";
import Cookies from "./component/Cookies";
import { useSelector } from "react-redux";
import ProjectDetail from "./component/singlePageDesign/ProjectDetail";

const TRACKING_ID = "G-X5LNVZ2K4X";
function App() {
  const [isAnalyticsInitialized, setIsAnalyticsInitialized] = useState(false);

  const { bodyColor } = useSelector((state) => state.switch);

  function handleConsent() {
    initializeAnalytics(TRACKING_ID);
    setIsAnalyticsInitialized(true);
  }

  return (
    <div className={!bodyColor ? "app dark-bg" : "app"}>
      <BrowserRouter basename="/upgraded">
        {isAnalyticsInitialized && <TrackPageViews />}
        <Cookies onConsent={handleConsent} />
        {/* <Navbar /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/repositories/:projectId" element={<ProjectDetail />} />
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
