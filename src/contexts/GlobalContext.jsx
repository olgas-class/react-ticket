import axios from "axios";
import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  const getTickets = () => {
    axios.get(`${apiUrl}?page=1&limit=10`).then((resp) => {
      setTickets(resp.data);
    });
  };

  const globalContextValue = {
    tickets,
    getTickets,
  };

  return (
    <GlobalContext.Provider value={globalContextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };
