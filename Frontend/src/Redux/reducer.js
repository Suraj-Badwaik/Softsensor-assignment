import { GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, PUSH_TO_CART_FAILURE, PUSH_TO_CART_REQUEST, PUSH_TO_CART_SUCCESS } from "./actionType";

const initialState = {
  cart: [],
  products: [],
  loading: false,
  error: false,
  inCart : false
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS_REQUEST : {
      return {
        ...state,
        loading:true,
        error:false
      }
    }
    case GET_ALL_PRODUCTS_SUCCESS : {
      return {
        ...state,
        loading:false,
        error:false,
        products : [...new Set([...state.products, ...payload.map((item) => item)])]
      }
    }
    case GET_ALL_PRODUCTS_FAILURE : {
      return {
        ...state,
        loading:false,
        error:true
      }
    }
    case PUSH_TO_CART_REQUEST : {
      return {
        ...state,
        loading:true,
        error:false
      }
    }
    case PUSH_TO_CART_SUCCESS : {
      return {
        ...state,
        loading:false,
        error:false,
        cart : [...state.cart, payload],
        inCart:true
      }
    }
    case PUSH_TO_CART_FAILURE : {
      return {
        ...state,
        loading:false,
        error:true
      }
    }
    default: {
      return state;
    }
  }
};
