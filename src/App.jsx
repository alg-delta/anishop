import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Info from "./components/Info";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const add = (product) => {
    // Знаходимо чи є товар в корзині по id
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      // Якщо товар вже є в корзині, то змінюємо його кількість number+1
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      // Якщо товару ще немає в корзині, то додаємо його та ставимо кількість number: 1
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };
  const remove = (product) => {
    // Знаходимо чи є товар в корзині по id
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      // Якщо товар вже є в корзині, то змінюємо його кількість number+1
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      // Якщо товару ще немає в корзині, то додаємо його та ставимо кількість number: 1
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  return (
    <BrowserRouter basename="/anishop/">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Row>
              <Col md={8}>
                <Main products={data} add={add} />
              </Col>
              <Col>
                <Cart cartItems={cartItems} add={add} remove={remove} />
              </Col>
            </Row>
          }
        />
        <Route path="/test" element={<Test />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
