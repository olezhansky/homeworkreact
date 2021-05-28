import getProducts from "../api/getProducts";
import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_FAVORITE,
  CART_FROM_LOCAL_STORAGE,
  CLOSE_MODAL_FOR_ADD_TO_CART,
  CLOSE_MODAL_FOR_DELETE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_FAVORITE,
  FAVORITE_FROM_LOCAL_STORAGE,
  OPEN_MODAL_FOR_ADD_FAVORITE_PRODUCT_TO_CART,
  OPEN_MODAL_FOR_ADD_PRODUCT_TO_CART,
  SET_PRODUCTS,
  OPEN_MODAL_FOR_DELETE_PRODUCT_FROM_CART,
  SET_ORDER_DATA,
  SET_USER_DATA,
  TOTAL_SUM
} from "./types";

export const fetchProducts = () => dispatch => {
  getProducts().then(products => {
    dispatch({ type: SET_PRODUCTS, payload: { products } });
  });
};

export const openModalForAddProductToCartAction = (productId) => {
  return {
    type: OPEN_MODAL_FOR_ADD_PRODUCT_TO_CART,
    payload: productId,
  };
};

export const addProductToFavoriteAction = product => {
  return {
    type: ADD_PRODUCT_TO_FAVORITE,
    payload: product,
  };
};

export const openModalForAddFaforiteProductToCartAction = (productId) => {
  return {
    type: OPEN_MODAL_FOR_ADD_FAVORITE_PRODUCT_TO_CART,
    payload: productId,
  };
};

export const deleteProductFromFavoriteAction = productId => {
  return {
    type: DELETE_PRODUCT_FROM_FAVORITE,
    payload: productId,
  };
};

export const addProductToCartAction = (dataForModalAddProductToCart) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: dataForModalAddProductToCart,
  };
};
export const deleteProductFromCartAction = (productForModalDeleteWithCart) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    payload: productForModalDeleteWithCart,
  };
};

export const closeModalForAddToCartAction = () => {
  return {
    type: CLOSE_MODAL_FOR_ADD_TO_CART,
  };
};

export const closeModalForDeleteProductFromCartAction = () => {
  return {
    type: CLOSE_MODAL_FOR_DELETE_PRODUCT_FROM_CART,
  };
};

export const favoriteFromLocalStorageAction = favoriteFromLocalStorage => {
  return {
    type: FAVORITE_FROM_LOCAL_STORAGE,
    payload: JSON.parse(favoriteFromLocalStorage),
  };
};

export const cartFromLocalStorageAction = cartFromLocalStorage => {
  return {
    type: CART_FROM_LOCAL_STORAGE,
    payload: JSON.parse(cartFromLocalStorage),
  };
};

export const openModalForDeleteProductFromCartAction = product => {
  return {
    type: OPEN_MODAL_FOR_DELETE_PRODUCT_FROM_CART,
    payload: product,
  };
};

export const totalSumAction = () => {
  return {type: TOTAL_SUM}
};
export const setUserDataAction = objectUserData => {
  return {
    type: SET_USER_DATA,
    payload: objectUserData,
  };
};


export const setOrderDataAction = totalSum => {
  return {
    type: SET_ORDER_DATA,
    payload: totalSum,
  };
};


