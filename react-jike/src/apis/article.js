import { request } from "@/utils";

export const getChannelsAPI = () => {
  return request.get("/channels");
};

export const createArticleAPI = (data) => {
  return request.post(`/mp/articles?draft=false`, data);
};

export const getArticleListAPI = (params) => {
  return request.get("/mp/articles", { params });
};

export const delArticleAPI = (id) => {
  return request.delete(`/mp/articles/${id}`);
};

export const getDetailAPI = (id) => {
  return request.get(`/mp/articles/${id}`);
};

export const editArticleAPI = (id, data) => {
  return request.put(`/mp/articles/${id}?draft=false`, data);
};
