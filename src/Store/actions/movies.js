import axiosInstance from "../../Movies/config";

export const getMovies = () => (dispatch) => {
  return axiosInstance
    .get("/movie/popular", {
      params: {
        api_key: "83b9f7b48cb494babcab2428000abede",
      },
    })
    .then(
      (res) => dispatch({ type: "GET_MOVIES", payload: res.data.results }),
      (err) => console.log("err")
    );
};
