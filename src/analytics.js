import ReactGA from "react-ga";

const initializeAnalytics = (trackingId) => {
  ReactGA.initialize(trackingId);
};

const trackPageView = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

export { initializeAnalytics, trackPageView };
