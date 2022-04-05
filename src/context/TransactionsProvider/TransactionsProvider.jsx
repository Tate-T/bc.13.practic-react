import { createContext, useContext, useEffect, useState } from "react"

const TransactionsContext = createContext()
export const useTransactionsContext = () => useContext(TransactionsContext)

const TransactionsProvider = ({ children }) => {
  const [costs, setCosts] = useState([])
  const [incomes, setIncomes] = useState([])

  const editTransaction = (transaction) => {
    const transType = transaction.transType
    transType === "costs" &&
      setCosts((prevCosts) =>
        prevCosts.map((el) => (el.id === transaction.id ? transaction : el))
      )

    transType === "incomes" &&
      setIncomes((prevIncomes) =>
        prevIncomes.map((el) => (el.id === transaction.id ? transaction : el))
      )
  }

  return (
    <TransactionsContext.Provider value={{ costs, incomes, editTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export default TransactionsProvider
