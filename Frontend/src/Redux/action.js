import axios from "axios";
import {
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  PUSH_TO_CART_FAILURE,
  PUSH_TO_CART_REQUEST,
  PUSH_TO_CART_SUCCESS,
} from "./actionType";

// Get products data 
export const GetAllData = (pageNumber) => (dispatch) => {
  dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
  axios
    .get(`https://whispering-falls-42743.herokuapp.com/products?page=${pageNumber}&limit=3`)
    .then((res) => {
        console.log("api result",res.data.results);
      dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data.results });
    })
    .catch({ type: GET_ALL_PRODUCTS_FAILURE });
};


// Move item to

export const MoveToCart = (product) => (dispatch) => {
    dispatch({type:PUSH_TO_CART_REQUEST})
    dispatch({type:PUSH_TO_CART_SUCCESS, payload:product})
    dispatch({type:PUSH_TO_CART_FAILURE})
}