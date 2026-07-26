import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {

  const [timeline, setTimeline] = useState([]);

  const addTimeline = (type, friendName) => {

    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friendName}`,
      date: new Date().toLocaleDateString()
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