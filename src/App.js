import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styles from "./App.module.scss";
import Button from "./components/UI/Button/Button";
import Modal from "./components/ModalComponents/Modal/Modal";
import Products from "./components/Cards/Products/Products";
import getProducts from "./api/getProducts";
import Header from "./components/Header/Header";
import Favorite from "./components/Favorite/Favorite";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isOpenModalForAddToCart, setIsOpenModalForAddToCart] = useState(false);
  const [isOpenModalForDeleteProduct, setIsOpenModalForDeleteProduct] = useState(false);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [productInCart, setProductInCart] = useState([]);
  const [dataForModalProduct, setDataForModalProduct] = useState("");
  const [dataForModalCart, setDataForModalCart] = useState([]);
  const [dataForDeleteModalCart, setdataForDeleteModalCart] = useState([]);
  const [dataForFavorite, setDataForFavorite] = useState([]);
  const [test, setTest] = useState([]);


  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setIsLoadingProducts(false);
      setProductInCart([localStorage.getItem("cart")]);
    });
  }, []);

  const openModal = (id) => {
    setIsOpenModalForAddToCart(true);
    setProductInCart([productInCart, id]);
    setDataForModalProduct(products.filter((product) => product.id === id));
  };
  const openConfirmCloseModal = (id) => {
    setdataForDeleteModalCart(dataForModalCart.filter(item => item.id === id))
    setIsOpenModalForDeleteProduct(true)
  }

  const closeModal = () => {
    setIsOpenModalForAddToCart(false);
    setIsOpenModalForDeleteProduct(false)
  };

  const handleAddToCart = (event) => {
    // localStorage.setItem("cart", productInCart);
    setDataForModalCart([...dataForModalCart, ...dataForModalProduct]);
    closeModal();
  };

  const deleteProductWithCart = (id) => {
    setDataForModalCart(dataForModalCart.filter(item => item.id !== id))
    setIsOpenModalForDeleteProduct(false)
  }

  const handleAddToFavorite = id => {
    console.log(id);
    setDataForFavorite([...dataForFavorite, ...products.filter(product => product.id === id)])

  }
  

  return (
    <div className={styles.App}>
      <Header dataForModalCart={dataForModalCart}/>
      {isOpenModalForAddToCart && (
        <Modal
          onClick={closeModal}
          header="Confirm adding to cart this product"
          closeButton={closeModal}
          dataForModalCard={dataForModalProduct[0]}
          actions={
            <>
              <Button
                products={dataForModalProduct[0]}
                text="Add to cart"
                onClick={handleAddToCart}
              />
              {/* <Button text="Cancel" onClick={closeModal} /> */}
            </>
          }
        />
      )}
       {isOpenModalForDeleteProduct && (
        <Modal
          onClick={closeModal}
          header="Confirm delete"
          closeButton={closeModal}
          dataForModalCard={dataForDeleteModalCart[0]}
          actions={
            <>
              <Button
                products={dataForDeleteModalCart[0]}
                text="Delete product"
                onClick={deleteProductWithCart}
              />
              {/* <Button text="Cancel" onClick={closeModal} /> */}
            </>
          }
        />
      )}
      <Switch>
        <Route path="/products">
          {!isLoadingProducts && (
            <Products products={products} addToCart={openModal} addToFavorite={handleAddToFavorite}/>
          )}
        </Route>
        <Route path="/favorite">
          <Favorite dataForFavorite={dataForFavorite}/>
        </Route>
        <Route path="/cart">
          <Cart products={dataForModalCart} onClick={openConfirmCloseModal}/>
        </Route>
        <Redirect to="/products" />
      </Switch>
    </div>
  );
};

export default App;
