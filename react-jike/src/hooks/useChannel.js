import { useState, useEffect } from "react";
import { getChannelsAPI } from "@/apis/article";

const useChannel = () => {
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    const getChannelList = async () => {
      const res = await getChannelsAPI();
      setChannelList(res.data.channels);
    };
    getChannelList();
  }, []);

  return {
    channelList,
  };
};

export { useChannel };
