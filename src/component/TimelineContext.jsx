import { createContext, useEffect, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {

  const [timeline, setTimeline] = useState(() => {
    const stored = localStorage.getItem("timeline");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(timeline));
  }, [timeline]);

  const addTimeline = (type, friendName) => {

    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friendName}`,
      date: new Date().toLocaleDateString(),
    };

    setTimeline(prev => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider
      value={{ timeline, addTimeline }}
    >
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;