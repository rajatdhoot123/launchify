"use client";

import { useEffect, useState } from "react";

const Minutes = () => {
  const [time, setTime] = useState();
  useEffect(() => {
    setTime(new Date(Date.now() + 5 * 60 * 1000).toLocaleTimeString());
  }, []);
  return (
    <p className="text-lg font-medium leading-8 text-indigo-600/95">
      Landing Page will be ready today at {time}
    </p>
  );
};

export default Minutes;
