import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    changeNum(state, action) {
      state.count = action.payload;
    },
  },
});

const { increment, decrement, changeNum } = counterStore.actions;

export { increment, decrement, changeNum };
export default counterStore.reducer;
