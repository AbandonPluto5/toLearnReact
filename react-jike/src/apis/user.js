import { request } from "@/utils";

export const loginAPI = (data) => {
  return request.post("/authorizations", data);
};

export const getProfileAPI = () => {
  return request.get("/user/profile");
};
