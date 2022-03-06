import React, { useState, createContext } from "react";

export const HoverContext = createContext();

export const HoverContextProvider = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <HoverContext.Provider value={[hover, setHover]}>
      {props.children}
    </HoverContext.Provider>
  );
};
