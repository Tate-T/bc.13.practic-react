import { transactionsReducer } from "./transactions/transactionsReducer"
import { configureStore } from "@reduxjs/toolkit"
import form from "./form/formSlice"
import auth from "./auth/authSlice"

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    form,
    auth,
  },
})
