import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
  name: "channel",
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload;
    },
  },
});

const { setChannels } = channelStore.actions;

// 异步请求需要单独封装一个方法
const fetchChannelList = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://geek.itheima.net/v1_0/channels");
    dispatch(setChannels(data.data.channels));
  };
};

export { fetchChannelList };
export default channelStore.reducer;
