import React, { createContext, useState, useEffect, useContext } from "react";

const useMyContext = ({ name, init, functions }) => {
  const InitialContext = createContext();

  function ParentContext({ children }) {
    // Persist
    const ls = JSON.parse(localStorage.getItem(name));
    const initalState = ls ? ls: init;

    const [state, setState] = useState(initalState);

    useEffect(()=> {
      localStorage.setItem(name, JSON.stringify(state))
    }, [state])

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