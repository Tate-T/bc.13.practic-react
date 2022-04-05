import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserApi } from "../../api";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (dataForm, thunkApi) => {
    try {
      const dataRegister = await registerUserApi(dataForm)
      return dataRegister
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }

)