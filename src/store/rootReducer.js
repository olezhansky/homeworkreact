const initialState = {
  products: [],
  isLoadingProducts: true,
  isOpenModalForAddToCart: false,
  dataForModalProduct: [],
  dataForModalCart: [],
  isOpenModalForDeleteProduct: false,
  dataForDeleteModalCart: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload.products,
        isLoadingProducts: false,
      };
    case "OPEN_MODAL_FOR_ADD_TO_CART_PRODUCT":
      const productForModalCart = state.products.filter(
        (product) => product.id === action.payload
      );
      console.log(productForModalCart);
      return {
        ...state,
        isOpenModalForAddToCart: true,
        dataForModalProduct: productForModalCart,
      };
    case "OPEN_MODAL_FOR_ADD_TO_CART_FAVORITE_PRODUCT":
      return {
        ...state,
        isOpenModalForAddToCart: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isOpenModalForAddToCart: false,
      };
    case "CLOSE_DELETE_PRODUCT_MODAL":
      return {
        ...state,
        isOpenModalForDeleteProduct: false,
      };
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        dataForModalCart: [...state.dataForModalCart, action.payload],
      };
    case "OPEN_CONFIRM_CLOSE_MODAL":
      console.log(action.payload);
      return {
        ...state,
        isOpenModalForDeleteProduct: true,
        dataForDeleteModalCart: state.dataForModalCart.filter(
          (item) => item.id === action.payload.id
        ),
      };
    default:
      return state;
  }
};
