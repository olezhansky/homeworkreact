import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styles from "./App.module.scss";
import Button from "./components/UI/Button/Button";
import Modal from "./components/ModalComponents/Modal/Modal";
import Products from "./pages/Products/Products";
import Header from "./containers/Header/Header";
import Favorite from "./pages/Favorite/Favorite";
import Cart from "./pages/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCartAction,
  fetchProducts,
  deleteProductFromCartAction,
  closeModalForAddToCartAction,
  closeModalForDeleteProductFromCartAction,
  favoriteFromLocalStorageAction,
  cartFromLocalStorageAction,
} from "./store/actions";
import Home from "./pages/Home/Home";

const App = () => {
  // Hook useDispatch
  const dispatch = useDispatch();

  // Loading products from db
  const isLoadingProducts = useSelector(state => state.products.isLoadingProducts);

  // Open modal window for add product to cart
  const isOpenModalForAddToCart = useSelector(
    (state) => state.products.isOpenModalForAddToCart,
  );

  // Data for modal window that add product to cart
  const dataForModalAddProductToCart = useSelector(
    (state) => state.products.dataForModalAddProductToCart,
  );

  // Is open modal window for delete product with cart
  const isOpenModalForDeleteProductWithCart = useSelector(
    (state) => state.cart.isOpenModalForDeleteProductWithCart,
  );

  // Data for delete product with cart
  const productForModalDeleteWithCart = useSelector(
    (state) => state.cart.productForModalDeleteWithCart,
  );

  const isOpenModalFinishUserApplication = useSelector(state => state.isOpenModalFinishUserApplication)
  const dataModalFinishUserApplication = useSelector(state => state.dataModalFinishUserApplication)
  const userData = useSelector(state => state.userData)

  // Set and render products
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Save cart and favorite to local storage
  useEffect(() => {
    const favoriteFromLocalStorage = localStorage.getItem("favoriteProducts");
    const cartFromLocalStorage = localStorage.getItem("cartProducts");
    if (favoriteFromLocalStorage) {
      dispatch(favoriteFromLocalStorageAction(favoriteFromLocalStorage));
    }
    if (cartFromLocalStorage) {
      dispatch(cartFromLocalStorageAction(cartFromLocalStorage));
    }
  }, [dispatch]);

  // Close modal window for add to cart
  const handleCloseModal = () => {
    dispatch(closeModalForAddToCartAction());
  };

  // Close modal window for delete product with cart
  const handleCloseModalForDeleteWithCart = () => {
    dispatch(closeModalForDeleteProductFromCartAction());
  };

  // Add product to cart
  const handleAddProductToCart = () => {
    dispatch(addProductToCartAction(dataForModalAddProductToCart[0]));
    handleCloseModal();
  };

  // Delete product with cart
  const handleDeleteProductWithCart = () => {
    dispatch(deleteProductFromCartAction(productForModalDeleteWithCart[0]));
  };

  const handleCloseModalFinishUserApplication = () => {
    dispatch({type: "CLOSE_MODAL_FINISH_USER_APPLICATION"})
  }

  return (
    <div className={styles.App}>
      <Header />
      {isOpenModalForAddToCart && (
        <Modal
          onClick={handleCloseModal}
          header="Confirm adding to cart this product"
          closeButton={handleCloseModal}
          dataForModalCard={dataForModalAddProductToCart[0]}
          actions={
            <>
              <Button onClick={handleAddProductToCart}>
                Add to cart
                &nbsp;
                <i className="fas fa-shopping-cart"></i>
              </Button>
            </>
          }
        />
      )}

      {isOpenModalForDeleteProductWithCart && (
        <Modal
          onClick={handleCloseModalForDeleteWithCart}
          header="Confirm delete"
          closeButton={handleCloseModalForDeleteWithCart}
          dataForModalCard={productForModalDeleteWithCart[0]}
          actions={
            <>
              <Button onClick={handleDeleteProductWithCart}>
                Delete product
              </Button>
            </>
          }
        />
      )}
      {isOpenModalFinishUserApplication && (
        <Modal
          onClick={handleCloseModalFinishUserApplication}
          header={`Thanks, ${userData.name}, for your application`}
          closeButton={handleCloseModalFinishUserApplication}
          dataForModalCard={dataModalFinishUserApplication}
          actions={
            <>
              <Button onClick={handleCloseModalFinishUserApplication}>
                Ok
                &nbsp;
                <i class="fas fa-smile-wink"/>
              </Button>
            </>
          }
        />
      )}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/products">
          {!isLoadingProducts && <Products />}
        </Route>
        <Route path="/favorites">
          <Favorite />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default App;
