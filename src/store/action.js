import axios from "axios";

export const GET_ALL = "GET_ALL";

export const getAll = (URL) => (dispatch) => {
  axios
    .get(URL)
    .then((res) => {
      dispatch({ type: "GET_ALL", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "GET_ALL", payload: err });
    });
}
