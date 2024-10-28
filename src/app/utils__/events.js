export const logEvent = (eventname, params = {}) => {
  if (typeof window?.poshog !== "undefined") {
    try {
      window.posthog.capture(eventname, params);
    } catch (error) {
      console.error("Error logging event", error);
    }
    return;
  }
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", eventname, params);
  }
};
