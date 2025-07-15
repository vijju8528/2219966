import React, { createContext, useContext } from 'react';

const LoggerContext = createContext();

export const LoggerProvider = ({ children }) => {
  const log = (msg) => {
    console.log(`[LOG - ${new Date().toISOString()}]: ${msg}`);
  };

  return (
    <LoggerContext.Provider value={{ log }}>
      {children}
    </LoggerContext.Provider>
  );
};

export const useLogger = () => useContext(LoggerContext);
