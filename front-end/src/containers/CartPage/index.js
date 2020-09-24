import React, { Component } from "react";
import CartList from "../../components/CartList";
import CartManage from "../../components/CartManage";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
class CartPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <section className="shoping-cart spad">
          <div className="container">
            <CartList />
            <CartManage />
          </div>
        </section>
      </div>
    );
  }
}
export default CartPage;
