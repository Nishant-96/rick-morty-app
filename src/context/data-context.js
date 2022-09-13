import { createContext, useContext, useEffect, useState } from "react";
import { getAllCharacters } from "../services";

const DataContext = createContext();

const useData = () => useContext(DataContext);

const initialState = { characters: {} };

const DataProvider = function ({ children }) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    (async () => {
      const res = await getAllCharacters();
      setData((prev) => ({ ...prev, characters: res }));
    })();
  }, []);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export { useData, DataProvider };
