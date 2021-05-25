import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

import { createStore, applyMiddleware, compose } from 'redux'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;


const localStorageMiddleware =  ({getState}) => next => action => {
  const result = next(action)

  if (action.type === 'ADD_PRODUCT_TO_CART' || action.type === "DELETE_PRODUCT_WITH_CART") {
    const {cartProducts} = getState()
    localStorage.setItem('cartProducts',  JSON.stringify(cartProducts))
  }

  if (action.type === 'ADD_PRODUCT_TO_FAVORITE' || action.type === "DELETE_PRODUCT_FROM_FAVORITE") {
    const {favoriteProducts} = getState()
    localStorage.setItem('favoriteProducts',  JSON.stringify(favoriteProducts))
  }

  return result
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, localStorageMiddleware), devTools)
);

export default store;
