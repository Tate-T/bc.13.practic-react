import { createContext, useContext, useEffect, useState } from "react"
import { getCategoryApi } from "../../api"

const CategoryContext = createContext()
export const useCategoryContext = () => useContext(CategoryContext)

const CategoryProvider = ({ children }) => {
  const [incomesCat, setIncomesCat] = useState([])
  const [costsCat, setCostsCat] = useState([])

  const addCategory = ({newCategory, transType}) => {
    transType === "incomes" && setIncomesCat((prev) => [...prev, newCategory]).catch(err => console.log(err))
    transType === "costs" && setCostsCat((prev) => [...prev, newCategory]).catch(err => console.log(err))
  }

  // useEffect(() => {
  //   // getCategoryApi("incomes").then((data) => setIncomesCat(data))
  //   // getCategoryApi("costs").then((data) => setCostsCat(data))
  // }, [])

  return (
    <CategoryContext.Provider value={{ incomesCat, costsCat, addCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryProvider
