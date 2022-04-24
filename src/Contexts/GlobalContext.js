import React, { createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

  return (
    <GlobalContext.Provider value={{ isMobile }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
