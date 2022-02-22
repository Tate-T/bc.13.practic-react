import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTransactionsApi, postTransaction } from "../../api";

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
      console.log(transactions);
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
