import { CLOSE_MODAL_FOR_ADD_TO_CART, OPEN_MODAL_FOR_ADD_PRODUCT_TO_CART, SET_PRODUCTS } from "../types";

const initialState = {
  products: [],
  isLoadingProducts: true,
  isOpenModalForAddToCart: false,
  dataForModalAddProductToCart: []
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        isLoadingProducts: false,
      };
    case OPEN_MODAL_FOR_ADD_PRODUCT_TO_CART:
      const productForModalCart = state.products.filter(product => product.id === action.payload);
      return {
        ...state,
        isOpenModalForAddToCart: true,
        dataForModalAddProductToCart: productForModalCart,
      };
    case CLOSE_MODAL_FOR_ADD_TO_CART:
      return {
        ...state,
        isOpenModalForAddToCart: false,
      };
    default:
      return state;
  }
};
