import getProducts from "../api/getProducts";
import { 
  ADD_PRODUCT_TO_CART, 
  ADD_PRODUCT_TO_FAVORITE, 
  CLOSE_MODAL_FOR_ADD_TO_CART, 
  CLOSE_MODAL_FOR_DELETE_PRODUCT_FROM_CART, 
  DELETE_PRODUCT_FROM_CART, 
  DELETE_PRODUCT_FROM_FAVORITE, 
  OPEN_MODAL_FOR_ADD_FAVORITE_PRODUCT_TO_CART, 
  OPEN_MODAL_FOR_ADD_PRODUCT_TO_CART, 
  SET_PRODUCTS } from "./types";

export const fetchProducts = () => (dispatch) => {
  getProducts().then((products) => {
    dispatch({ type: SET_PRODUCTS, payload: { products } });
  });
};

export const openModalForAddProductToCartAction = productId => {
  return {
    type: OPEN_MODAL_FOR_ADD_PRODUCT_TO_CART, 
    payload: productId
  }
}

export const addProductToFavoriteAction = product => {
  return {
    type: ADD_PRODUCT_TO_FAVORITE, payload: product
  }
}

export const openModalForAddFaforiteProductToCartAction= productId => {
  return {
    type: OPEN_MODAL_FOR_ADD_FAVORITE_PRODUCT_TO_CART, 
    payload: productId
  }
}

export const deleteProductFromFavoriteAction = productId => {
  return {
    type: DELETE_PRODUCT_FROM_FAVORITE, 
    payload: productId
  }
}

export const addProductToCartAction = dataForModalAddProductToCart => {
 return { 
   type: ADD_PRODUCT_TO_CART, 
   payload: dataForModalAddProductToCart
  }
}
export const deleteProductFromCartAction = productForModalDeleteWithCart => {
  return { 
    type: DELETE_PRODUCT_FROM_CART, 
    payload: productForModalDeleteWithCart
   }
 }

export const closeModalForAddToCartAction = () => {
  return { 
    type: CLOSE_MODAL_FOR_ADD_TO_CART
  }
}

export const closeModalForDeleteProductFromCartAction = () => {
  return { 
    type: CLOSE_MODAL_FOR_DELETE_PRODUCT_FROM_CART
  }
}
   












