import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {},
  reducers: {
    setInitialState(state, { payload }) {
      return payload;
    },
    changeInput(state, { payload }) {
      return { ...state, [payload.name]: payload.value };
    //    state[payload.name]= payload.value; 
    },
  },
});

export default formSlice.reducer;

export const { setInitialState, changeInput } = formSlice.actions;
