// import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { ADD_PRODUCT_TO_CART, ADD_PRODUCT_TO_FAVORITE, DELETE_PRODUCT_FROM_CART, DELETE_PRODUCT_FROM_FAVORITE, TOTAL_SUM } from "./types";
import { productsReducer } from "./products/reducer";
import { cartReducer } from "./cart/reducer";
import { favoritesReducer } from "./favorites/reducer";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const localStorageMiddleware = ({ getState }) => next => action => {
    const result = next(action);
    if (action.type === ADD_PRODUCT_TO_CART || action.type === DELETE_PRODUCT_FROM_CART) {
      const { cart } = getState();
      console.log(getState());
      localStorage.setItem("cartProducts", JSON.stringify(cart.cartProducts));
    }
    if (action.type === TOTAL_SUM) {
      const { cart } = getState();
      console.log(getState());
      localStorage.setItem("totalSum", JSON.stringify(cart.totalSum));
    }
    if (action.type === ADD_PRODUCT_TO_FAVORITE || action.type === DELETE_PRODUCT_FROM_FAVORITE) {
      const { favorites } = getState();
      localStorage.setItem(
        "favoriteProducts",
        JSON.stringify(favorites.favoriteProducts),
      );
    }
    return result;
  };

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
})
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, localStorageMiddleware), devTools),
);

export default store;
