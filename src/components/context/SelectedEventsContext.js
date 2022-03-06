import React, { useState, createContext } from "react";

export const SelectedEventsContext = createContext();

export const SelectedProvider = (props) => {
  const [selectedEvents, setSelectedEvents] = useState({ eventArray: [] });

  return (
    <SelectedEventsContext.Provider value={[selectedEvents, setSelectedEvents]}>
      {props.children}
    </SelectedEventsContext.Provider>
  );
};
