import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

// axiosInstance.interceptors.request.use(
//   function (config) {
//     console.log(config);
//     console.log("SHOW LOADER");
//     config.params = {
//       api_key: "123456789",
//     };
//     config.headers = {
//       "Accept-language": "en",
//       Autherization: "f22e2f2e2fefqef22",
//     };
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   function (response) {
//     // Do something with response data
//     console.log("HIDE LOADER");
//     return response;
//   },
//   function (error) {
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
