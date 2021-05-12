import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styles from "./App.module.scss";
import Button from "./components/UI/Button/Button";
import Modal from "./components/ModalComponents/Modal/Modal";
import Products from "./components/Cards/Products/Products";
import getProducts from "./api/getProducts";
import Header from "./components/Header/Header";
import Favorite from "./components/Favorite/Favorite";
import Carts from "./components/Carts/Carts";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [productInCart, setProductInCart] = useState([]);
  const [dataForModalCard, setDataForModalCard] = useState("");
  const [dataForModalCart, setDataForModalCart] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setIsLoadingProducts(false);
      setProductInCart([localStorage.getItem("cart")]);
    });
  }, []);

  const openModal = (id) => {
    setIsOpenModal(true);
    setProductInCart([productInCart, id]);
    setDataForModalCard(products.filter((product) => product.id == id));
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleAddToCart = (event) => {
    // localStorage.setItem("cart", productInCart);
    setDataForModalCart([...dataForModalCart, ...dataForModalCard]);
    console.log(dataForModalCart);
    closeModal();
  };

  return (
    <div className={styles.App}>
      <Header />
      {isOpenModal && (
        <Modal
          onClick={closeModal}
          header="Confirm adding to cart this product"
          closeButton={closeModal}
          dataForModalCard={dataForModalCard[0]}
          actions={
            <>
              <Button
                products={dataForModalCard[0]}
                text="Add to cart"
                onClick={handleAddToCart}
              />
              {/* <Button text="Cancel" onClick={closeModal} /> */}
            </>
          }
        />
      )}
      <Route path="/products">
        {!isLoadingProducts && (
          <Products products={products} addToCart={openModal} />
        )}
      </Route>
      <Route path="/favorite">
        <Favorite />
      </Route>
      <Route path="/cart">
        <Carts productscart={dataForModalCart} />
      </Route>
      <Redirect to="/products" />
    </div>
  );
};

export default App;
