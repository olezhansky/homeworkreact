import { ADD_PRODUCT_TO_FAVORITE, DELETE_PRODUCT_FROM_FAVORITE, FAVORITE_FROM_LOCAL_STORAGE, OPEN_MODAL_FOR_ADD_FAVORITE_PRODUCT_TO_CART} from "../types";

const initialState = {
  favoriteProducts: [],
  isOpenModal: false,
  dataForModalAddProductToCart: []
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_FAVORITE:
      const existFavorite = state.favoriteProducts.some(
        (item) => item.id === action.payload.id,
      );
      if (existFavorite) {
        return {
          ...state,
          favoriteProducts: state.favoriteProducts.filter(
            (item) => item.id !== action.payload.id,
          ),
        };
      } else {
        return {
          ...state,
          favoriteProducts: [...state.favoriteProducts, action.payload],
        };
      }
    case DELETE_PRODUCT_FROM_FAVORITE:
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter(
          (item) => item.id !== action.payload,
        ),
      };
    case FAVORITE_FROM_LOCAL_STORAGE:
      return {
        ...state,
        favoriteProducts: action.payload,
      };
    case OPEN_MODAL_FOR_ADD_FAVORITE_PRODUCT_TO_CART:
      const productFavoriteForModalCart = state.favoriteProducts.filter(
        (product) => product.id === action.payload,
      );
      return {
        ...state,
        isOpenModal: true,
        dataForModalAddProductToCart: productFavoriteForModalCart,
      };
    default:
      return state;
  }
};
