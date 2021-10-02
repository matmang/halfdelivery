import axios from "axios";
import qs from "query-string";

const callApi = async (method, path, data, jwt) => {
  const headers = {
    Authorization: jwt,
    "Content-Type": "application/json",
  };
  const baseUrl = "http://61af-211-207-141-139.ngrok.io/v1";
  const fullUrl = `${baseUrl}${path}`;
  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers });
  } else {
    return axios[method](fullUrl, data, { headers });
  }
};
export const createAccount = (form) => callApi("post", "/users/", form);
export const login = (form) => callApi("post", "/users/login/", form);
export const callsms = (form) => callApi("post", "/users/inputsms/", form);
export const verifysms = (form) =>
  callApi("post", "/users/smsverification/", form);
export const store = (page = 1, token) =>
  callApi("get", `/stores/all/?page=${page}`, null, token);
