import React, { createContext, useState, useContext } from "react";

const useMyContext = ({ init, functions }) => {
  const InitialContext = createContext();

  function ParentContext({ children }) {
    const [state, setState] = useState(init);

    const value = [state, setState, functions];

    return (
      <InitialContext.Provider value={value}>
        {children}
      </InitialContext.Provider>
    );
  }

  const store = () => useContext(InitialContext);

  return [ParentContext, store];
};

export default useMyContext;
