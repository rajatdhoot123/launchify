"use client";
const Minutes = () => {
  return (
    <p className="text-lg font-medium leading-8 text-indigo-600/95">
      Landing Page will be ready today at{" "}
      {new Date(Date.now() + 5 * 60 * 1000).toLocaleTimeString()}
    </p>
  );
};

export default Minutes;
