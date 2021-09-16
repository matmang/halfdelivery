// ! =======================================================================================
// ! ngrok 을 모름..
// ! =======================================================================================
import axios from "axios";

const iDontKnowNgrok = async (method, path, data, jwt) => {
  const headers = {
    Authorization: jwt,
    "Content-Type": "application/json",
  };
  const baseUrl = "http://127.0.0.1:8000/";
  const fullUrl = `${baseUrl}${path}`;
  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers });
  } else {
    return axios[method](fullUrl, data, { headers });
  }
};
export const getStoreAxios = (form) =>
  iDontKnowNgrok("get", "v1/stores/all/", form);

// todo: data 를 넘겨야 함...
export const getStore = (setState) => {
  fetch("http://127.0.0.1:8000/v1/stores/all/", {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((data) => {
      setState(data);
      // console.log(data);
    })
    .catch((error) => alert(error));
};
