import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_FAVORITE,
  CLOSE_MODAL_FOR_ADD_TO_CART,
  CLOSE_MODAL_FOR_DELETE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_FAVORITE,
  OPEN_MODAL_FOR_ADD_FAVORITE_PRODUCT_TO_CART,
  OPEN_MODAL_FOR_ADD_PRODUCT_TO_CART,
  SET_PRODUCTS,
  OPEN_MODAL_FOR_DELETE_PRODUCT_FROM_CART,
  CART_FROM_LOCAL_STORAGE,
  FAVORITE_FROM_LOCAL_STORAGE,
} from "./types";

const initialState = {
  products: [],
  isLoadingProducts: true,
  isOpenModalForAddToCart: false,
  dataForModalAddProductToCart: [],
  cartProducts: [],
  isOpenModalForDeleteProductWithCart: false,
  productForModalDeleteWithCart: [],
  favoriteProducts: [],
  totalSum: 0,
  userData: {
    name: '',
    lastName: '',
    age: '',
    address: '',
    phone: ''
  },
  isOpenModalFinishUserApplication: false,
  dataModalFinishUserApplication: {}
};

export const rootReducer = (state = initialState, action) => {
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
    case OPEN_MODAL_FOR_ADD_FAVORITE_PRODUCT_TO_CART:
      const productFavoriteForModalCart = state.products.filter(
        (product) => product.id === action.payload,
      );
      return {
        ...state,
        isOpenModalForAddToCart: true,
        dataForModalAddProductToCart: productFavoriteForModalCart,
      };
    case CLOSE_MODAL_FOR_ADD_TO_CART:
      return {
        ...state,
        isOpenModalForAddToCart: false,
      };
    case CLOSE_MODAL_FOR_DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        isOpenModalForDeleteProductWithCart: false,
      };
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case FAVORITE_FROM_LOCAL_STORAGE:
      return {
        ...state,
        favoriteProducts: action.payload,
      };
    case CART_FROM_LOCAL_STORAGE:
      return {
        ...state,
        cartProducts: action.payload,
      };
    case OPEN_MODAL_FOR_DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        isOpenModalForDeleteProductWithCart: true,
        productForModalDeleteWithCart: state.cartProducts.filter(
          (item) => item.id === action.payload.id,
        ),
      };
    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (item) => item.id !== action.payload.id,
        ),
        isOpenModalForDeleteProductWithCart: false,
      };
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
    case 'TOTAL_SUM':
      let totalSum = state.cartProducts.reduce((acc, curr) => {
        return acc + +curr.price
      }, 0)
      return {
        ...state,
        totalSum: totalSum
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        isOpenModalFinishUserApplication: true,
        userData: {...action.payload}
      };
    case 'CLOSE_MODAL_FINISH_USER_APPLICATION':
      return {
        ...state,
        isOpenModalFinishUserApplication: false
      };
    case 'CONSOLE_LOG':
      console.log(state.userData, state.cartProducts, state.totalSum);
      localStorage.removeItem('cartProducts');
      return {
        ...state,
        cartProducts: []
      };
    default:
      return state;
  }
};
