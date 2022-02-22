import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {  
  removeCosts,
  removeIncomes,
} from "./transactionsActions";
import {
  addIncomes,
  addCosts,
  getTransactions,
} from "./transactionsOperations";

const costsReducer = createReducer([], {
  [addCosts.fulfilled]: (state, { payload }) => [...state, payload],
  [getTransactions.fulfilled]: (_, { payload: { costs } }) => costs,
  [removeCosts]: (state, { payload }) => {
    return state.filter((el) => el.id !== payload);
  },
});

const incomesReducer = createReducer([], {
  [addIncomes.fulfilled]: (state, { payload }) => [...state, payload],
  [getTransactions.fulfilled]: (_, { payload: { incomes } }) => incomes,
  [removeIncomes]: (state, { payload }) => {
    return state.filter((el) => el.id !== payload);
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
});

export const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
  isLoading: isLoadingReducer,
});
