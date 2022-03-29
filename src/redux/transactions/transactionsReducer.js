import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addIncomes,
  addCosts,
  getTransactions,
  removeTransaction,
  editTransaction,
} from "./transactionsOperations";

const costsReducer = createReducer([], {
  [addCosts.fulfilled]: (state, { payload }) => [...state, payload],
  [getTransactions.fulfilled]: (_, { payload: { costs } }) => costs,
  [removeTransaction.fulfilled]: (state, { payload }) => {
    const { transType, id } = payload;
    return transType === "costs" ? state.filter((el) => el.id !== id) : state;
  },
  [editTransaction.fulfilled]: (state, { payload }) => {
    const { transType, transaction } = payload;
    return transType === "costs"
      ? state.map((el) => (el.id === transaction.id ? transaction : el))
      : state;
  },
});

const incomesReducer = createReducer([], {
  [addIncomes.fulfilled]: (state, { payload }) => [...state, payload],
  [getTransactions.fulfilled]: (_, { payload: { incomes } }) => incomes,
  [removeTransaction.fulfilled]: (state, { payload }) => {
    const { transType, id } = payload;
    return transType === "incomes" ? state.filter((el) => el.id !== id) : state;
  },
  [editTransaction.fulfilled]: (state, { payload }) => {
    const { transType, transaction } = payload;
    return transType === "incomes"
      ? state.map((el) => (el.id === transaction.id ? transaction : el))
      : state;
  },
});

const isLoadingReducer = createReducer(false, {
  [addCosts.pending]: () => true,
  [addCosts.fulfilled]: () => false,
  [addCosts.rejected]: () => false,
  [addIncomes.pending]: () => true,
  [addIncomes.fulfilled]: () => false,
  [addIncomes.rejected]: () => false,
  [getTransactions.pending]: () => true,
  [getTransactions.fulfilled]: () => false,
  [getTransactions.rejected]: () => false,
  [removeTransaction.pending]: () => true,
  [removeTransaction.fulfilled]: () => false,
  [removeTransaction.rejected]: () => false,
});

export const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
  isLoading: isLoadingReducer,
});
