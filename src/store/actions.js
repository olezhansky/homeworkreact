import getProducts from "../api/getProducts";

export const fetchProducts = () => (dispatch) => {
  getProducts().then((products) => {
    dispatch({ type: "SET_PRODUCTS", payload: { products } });
  });
};
