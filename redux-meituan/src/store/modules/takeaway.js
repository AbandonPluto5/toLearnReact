import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
  name: "foods",
  initialState: {
    foodsList: [],
    activeIndex: 0,
    cartList: [],
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    },
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    setCardList(state, action) {
      const food = state.cartList.find((item) => item.id === action.payload.id);
      if (food) food.count++;
      else state.cartList.push(action.payload);
    },
    increCount(state, action) {
      const food = state.cartList.find((item) => item.id === action.payload.id);
      food.count++;
    },
    decreCount(state, action) {
      const food = state.cartList.find((item) => item.id === action.payload.id);
      if (food.count === 0) return;
      food.count--;
    },
    clearCart(state) {
      state.cartList = [];
    },
  },
});

const {
  setFoodsList,
  setActiveIndex,
  setCardList,
  increCount,
  decreCount,
  clearCart,
} = foodsStore.actions;

const fetchGoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway");
    dispatch(setFoodsList(res.data));
  };
};

export {
  fetchGoodsList,
  setActiveIndex,
  setCardList,
  increCount,
  decreCount,
  clearCart,
};

export default foodsStore.reducer;
