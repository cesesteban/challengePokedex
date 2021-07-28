import axios from "axios";

export const GET_ALL = "GET_ALL";
export const GET_SEARCH = "GET_SEARCH";

export const getAll = (URL) => (dispatch) => {
  axios
    .get(URL)
    .then((res) => {
      return res.data;
    })
    .then((res) => {
      res.results.map((res) => {
        return axios.get(res.url).then((res) => {
          dispatch({ type: "GET_ALL", payload: res.data });
        });
      });
    })
    .catch((err) => {
      dispatch({ type: "GET_ALL", payload: err });
    });
};

export const getSearch = (search) => (dispatch) => {
  dispatch({ type: "GET_SEARCH", payload: search });
};
