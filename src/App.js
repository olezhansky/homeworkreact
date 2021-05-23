import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styles from "./App.module.scss";
import Button from "./components/UI/Button/Button";
import Modal from "./components/ModalComponents/Modal/Modal";
import Products from "./pages/Products/Products";
import Header from "./containers/Header/Header";
import Favorite from "./pages/Favorite/Favorite";
import Cart from "./pages/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/actions";

const App = () => {
  // const [isOpenModalForDeleteProduct, setIsOpenModalForDeleteProduct] = useState(false);
  // const [dataForDeleteModalCart, setdataForDeleteModalCart] = useState([]);
  const [dataForFavorite, setDataForFavorite] = useState([]);
  const [dataForFavoriteId, setDataForFavoriteId] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const isLoadingProducts = useSelector((state) => state.isLoadingProducts);
  const isOpenModalForAddToCart = useSelector(
    (state) => state.isOpenModalForAddToCart
  );
  const dataForModalProduct = useSelector((state) => state.dataForModalProduct);
  const dataForModalCart = useSelector((state) => state.dataForModalCart);
  console.log(dataForModalProduct);
  const isOpenModalForDeleteProduct = useSelector(
    (state) => state.isOpenModalForDeleteProduct
  );

  const dataForDeleteModalCart = useSelector(
    (state) => state.dataForDeleteModalCart
  );

  useEffect(() => {
    dispatch(fetchProducts());

    // if (localStorage.getItem("products")) {
    //   setDataForModalCart(JSON.parse(localStorage.getItem("products")));
    // }
    if (localStorage.getItem("favorites")) {
      setDataForFavorite(JSON.parse(localStorage.getItem("favorites")));
    }
    if (localStorage.getItem("favoritesId")) {
      setDataForFavoriteId(localStorage.getItem("favoritesId").split(","));
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(dataForModalCart));
  // }, [dataForModalCart]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(dataForFavorite));
  }, [dataForFavorite]);

  useEffect(() => {
    localStorage.setItem("favoritesId", dataForFavoriteId);
  }, [dataForFavoriteId]);

  // const openConfirmCloseModal = (id) => {
  //   setdataForDeleteModalCart(
  //     dataForModalCart.filter((item) => item.id === id)
  //   );
  // };

  const handleCloseModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleCloseDeleteProductModal = () => {
    dispatch({ type: "CLOSE_DELETE_PRODUCT_MODAL" });
  };

  const handleAddToCart = () => {
    dispatch({ type: "ADD_PRODUCT_TO_CART", payload: dataForModalProduct[0] });
    handleCloseModal();
  };

  // const deleteProductWithCart = (id) => {
  //   // setDataForModalCart(dataForModalCart.filter((item) => item.id !== id));
  //   setIsOpenModalForDeleteProduct(false);
  // };

  const handleAddToFavorite = (id) => {
    if (dataForFavorite.find((product) => product.id === id)) {
      setDataForFavorite(
        dataForFavorite.filter((product) => product.id !== id)
      );
    } else {
      setDataForFavorite([
        ...dataForFavorite,
        ...products.filter((product) => product.id === id),
      ]);
    }

    //======Favorite id ========//
    if (dataForFavoriteId.includes(id)) {
      setDataForFavoriteId(
        dataForFavoriteId.filter((productId) => productId !== id)
      );
    } else {
      setDataForFavoriteId([id, ...dataForFavoriteId]);
    }
  };

  const handleDeleteFromFavorite = (id) => {
    //=== Delete favorite card==//
    setDataForFavorite(dataForFavorite.filter((product) => product.id !== id));
    //=== Delete favorite id==//
    setDataForFavoriteId(
      dataForFavoriteId.filter((productId) => productId !== id)
    );
  };

  return (
    <div className={styles.App}>
      <Header
        dataForModalCart={dataForModalCart}
        dataForFavorite={dataForFavorite}
      />
      {isOpenModalForAddToCart && (
        <Modal
          onClick={handleCloseModal}
          header="Confirm adding to cart this product"
          closeButton={handleCloseModal}
          dataForModalCard={dataForModalProduct[0]}
          actions={
            <>
              <Button
                products={dataForModalProduct[0]}
                text="Add to cart"
                onClick={handleAddToCart}
              />
            </>
          }
        />
      )}
      {isOpenModalForDeleteProduct && (
        <Modal
          onClick={handleCloseDeleteProductModal}
          header="Confirm delete"
          closeButton={handleCloseDeleteProductModal}
          dataForModalCard={dataForDeleteModalCart[0]}
          actions={
            <>
              <Button
                products={dataForDeleteModalCart[0]}
                text="Delete product"
                // onClick={deleteProductWithCart}
              />
            </>
          }
        />
      )}
      <Switch>
        <Route path="/products">
          {!isLoadingProducts && (
            <Products
              dataForFavoriteId={dataForFavoriteId}
              products={products}
              addToFavorite={handleAddToFavorite}
            />
          )}
        </Route>
        <Route path="/favorite">
          <Favorite
            dataForFavorite={dataForFavorite}
            deleteFromFavorite={handleDeleteFromFavorite}
          />
        </Route>
        <Route path="/cart">
          <Cart
            products={dataForModalCart}
            // onClick={openConfirmCloseModal}
          />
        </Route>
        <Redirect to="/products" />
      </Switch>
    </div>
  );
};

export default App;
