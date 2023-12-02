import { request } from "@/utils";

export const getChannelsAPI = () => {
  return request.get("/channels");
};

export const createArticleAPI = (data) => {
  return request.post(`/mp/articles?draft=false`, data);
};

export const getArticleList = (params) => {
  return request.get("/mp/articles", { params });
};
