import { CLOSE_MODAL_FOR_ADD_TO_CART, OPEN_MODAL_FOR_ADD_FAVORITE_PRODUCT_TO_CART, OPEN_MODAL_FOR_ADD_PRODUCT_TO_CART } from "../types";

const initialState = {
  isOpenModalForAddToCart: false,
};

export const openCloseModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_FOR_ADD_PRODUCT_TO_CART:
      return {
        ...state,
        isOpenModalForAddToCart: true
      };
    case CLOSE_MODAL_FOR_ADD_TO_CART:
      return {
        ...state,
        isOpenModalForAddToCart: false
      };
    case OPEN_MODAL_FOR_ADD_FAVORITE_PRODUCT_TO_CART:
      return {
        ...state,
        isOpenModalForAddToCart: true
      };
      default:
        return state
  }
};
