import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);

  const alertValue = {
    showAlert,
    setShowAlert,
  };

  return (
    <AlertContext.Provider value={alertValue}>{children}</AlertContext.Provider>
  );
};

const useAlertContext = () => {
  return useContext(AlertContext);
};

export { AlertProvider, useAlertContext };
