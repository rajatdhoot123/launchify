export const logEvent = (eventname, params = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", eventname, params);
  }
};
