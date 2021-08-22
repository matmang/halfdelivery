import axios from "axios";
import { url } from "getenv";

const callApi = async (method, path, data, jwt) => {
  const headers = {
    Authorization: jwt,
    "Content-Type": "applications/json",
  };
  const baseUrl = "http://508a-211-207-141-139.ngrok.io/v1";
  const fullUrl = `${baseUrl}${path}`;
  if(method === "get" || method === "delete") {
      return axios[method](fullUrl, {headers});
  } else {
      return axios[method](fullUrl, data, {headers});
  }
};

export const createAccount = form => callApi("post", "/users/", form);

