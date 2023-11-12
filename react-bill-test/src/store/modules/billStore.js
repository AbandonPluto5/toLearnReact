import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const billStore = createSlice({
  name: "bill",
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
    setAddBill(state, action) {
      state.billList.push(action.payload);
    },
  },
});

const { setBillList, setAddBill } = billStore.actions;

// 异步
const getBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:8888/ka");
    dispatch(setBillList(res.data));
  };
};

const addBill = (data) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:8888/ka", data);
    // 同步异步的方法不能重名，否则会调用两次 这里的dispatch也可以调用本身
    dispatch(setAddBill(res.data));
  };
};
export { getBillList, addBill };
export default billStore.reducer;
