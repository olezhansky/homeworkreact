import { ADD_PRODUCT_TO_CART, CART_FROM_LOCAL_STORAGE, CLOSE_MODAL_FINISH_USER_APPLICATION, CLOSE_MODAL_FOR_ADD_TO_CART, CLOSE_MODAL_FOR_DELETE_PRODUCT_FROM_CART, CONSOLE_LOG, DELETE_PRODUCT_FROM_CART, OPEN_MODAL_FOR_ADD_PRODUCT_TO_CART, OPEN_MODAL_FOR_DELETE_PRODUCT_FROM_CART, SET_ORDER_DATA, SET_PRODUCTS, SET_USER_DATA, TOTAL_SUM } from "../types";

const initialState = {
  cartProducts: [],
  isOpenModalForDeleteProductWithCart: false,
  productForModalDeleteWithCart: [],
  totalSum: 0,
  userData: {
    name: '',
    lastName: '',
    age: '',
    address: '',
    phone: ''
  },
  isOpenModalFinishUserApplication: false,
  dataModalFinishUserApplication: {},
  orderData: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (item) => item.id !== action.payload.id,
        ),
        isOpenModalForDeleteProductWithCart: false,
      };
    case OPEN_MODAL_FOR_DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        isOpenModalForDeleteProductWithCart: true,
        productForModalDeleteWithCart: state.cartProducts.filter(
          (item) => item.id === action.payload.id,
        ),
      };
    case CART_FROM_LOCAL_STORAGE:
      return {
        ...state,
        cartProducts: action.payload,
      };
    case TOTAL_SUM:
      let totalSum = state.cartProducts.reduce((acc, curr) => {
        return acc + +curr.price
      }, 0)
      return {
        ...state,
        totalSum: totalSum
      };
    case SET_USER_DATA:
        return {
          ...state,
          userData: {...action.payload},
          isOpenModalFinishUserApplication: true
        };
    case SET_ORDER_DATA:
        return {
          ...state,
          orderData: {...state.userData, ...state.cartProducts, ...action.payload}
        };
    case CLOSE_MODAL_FINISH_USER_APPLICATION:
        return {
          ...state,
          isOpenModalFinishUserApplication: false
        };
    case CONSOLE_LOG:
        console.log(state.orderData);
        localStorage.removeItem('cartProducts');
        return {
          ...state,
          cartProducts: [],
          orderData: []
        };
    default:
      return state;
  }
};
