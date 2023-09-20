import axios from "axios";
import { GET_USER_REQ, GET_USER_SUC, GET_USER_FAIL } from "../../constant";

export const comicdata = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQ });
    let res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=99e9936c87d485c889aa77e299bdda7c&ts=1&hash=ae1895a77e42f57a2ff88de40c57a3e6`
    );
    dispatch({ type: GET_USER_SUC, payload: res?.data?.data?.results});
  } catch (err) {
    dispatch({ type: GET_USER_FAIL, payload: err });
  }
};
