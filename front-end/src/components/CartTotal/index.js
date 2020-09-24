import React, { Component } from "react";
import { Link } from "react-router-dom";
class CartTotal extends Component {
  subResult = (carts) => {
    var result = 0;
    if (carts.length > 0 && carts[0].amount) {
      carts.forEach((item) => {
        result += item.commodityDTO.cost * item.amount;
      });
    }
    return result;
  };
  total = (carts) => {
    var subTotal = this.subResult(carts);
    return subTotal;
  };
  render() {
    const { carts } = this.props;
    const subTotal = this.subResult(carts);
    const total = this.total(carts);
    return (
      <div className="col-lg-6">
        <div className="shoping__checkout">
          <h5>Cart Total</h5>
          <ul>
            <li>
              Subtotal <span>{subTotal}</span>
            </li>
            <li>
              Total <span>{total}</span>
            </li>
          </ul>
          <Link to="/checkout" className="primary-btn">
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    );
  }
}
export default CartTotal;
