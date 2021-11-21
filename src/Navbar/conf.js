import axios from "axios";
import { setLoader } from "../Store/actions/action";
import store from "../Store/store";

const axiosLoader = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    apiKey: "5bb3f7c3d7c049dea9425d57e5561caa",
  },
});

// Add a request interceptor
axiosLoader.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    //Show Loader
    store.dispatch(setLoader(true));
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosLoader.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //Hide Loader
    store.dispatch(setLoader(false));

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosLoader;
