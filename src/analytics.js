import ReactGA from "react-ga4";

const initializeAnalytics = (trackingId) => {
  ReactGA.initialize(trackingId);
};

const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export { initializeAnalytics, trackPageView };
