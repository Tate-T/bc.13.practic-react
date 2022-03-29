import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  editTransactionApi,
  getTransactionsApi,
  postTransaction,
  removeTransactionApi,
} from "../../api";

const transformGetTransactions = (data) =>
  Object.entries(data).map(([id, transaction]) => ({ ...transaction, id }));

export const addCosts = createAsyncThunk(
  "transaction/addCosts",
  async (transaction, thunkApi) => {
    try {
      const newTransaction = await postTransaction({
        transType: "costs",
        transaction,
      });
      return newTransaction;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addIncomes = createAsyncThunk(
  "transaction/addIncomes",
  async (transaction, thunkApi) => {
    try {
      const newTransaction = await postTransaction({
        transType: "incomes",
        transaction,
      });
      return newTransaction;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const getTransactions = createAsyncThunk(
  "transaction/getTransactions",
  async (_, thunkApi) => {
    try {
      const transactions = await getTransactionsApi();      
      return {
        costs: transactions?.costs
          ? transformGetTransactions(transactions.costs)
          : [],
        incomes: transactions?.incomes
          ? transformGetTransactions(transactions.incomes)
          : [],
      };
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  "transaction/removeTransaction",
  async ({ transType, id }, thunkApi) => {
    try {
      await removeTransactionApi({ transType, id });
      return { transType, id };
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const editTransaction = createAsyncThunk(
  "transaction/editTransaction",
  async ({ transType, transaction }, thunkApi) => {
    try {
      const editedTransaction = await editTransactionApi({
        transType,
        transaction,
      });
      return {transType, transaction: editedTransaction};
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
