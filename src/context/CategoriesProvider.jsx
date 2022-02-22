import { createContext, useContext, useEffect, useState } from "react";
import { getCategories } from "../api";

const CategoriesContext = createContext();

export const useCategoriesContext = () => useContext(CategoriesContext);

function CategoriesProvider({ children }) {
  const [incomesCat, setIcomesCat] = useState([]);
  const [costsCat, setCostsCat] = useState([]);

  const addCategory = ({ transType, newCategory }) => {
    transType === "incomes" && setIcomesCat((prev) => [...prev, newCategory]);
    transType === "costs" && setCostsCat((prev) => [...prev, newCategory]);
  };

  useEffect(() => {
    getCategories("incomes")
      .then((data) => setIcomesCat(data))
      .catch((err) => console.log(err));
    getCategories("costs")
      .then((data) => setCostsCat(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CategoriesContext.Provider value={{ incomesCat, costsCat, addCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesProvider;
