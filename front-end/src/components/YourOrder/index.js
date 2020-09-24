import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class YourOrder extends Component {
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
  order = () => {
    const { carts } = this.props;
    this.props.order(carts);
  };

  renderProduct = () => {
    const { carts } = this.props;
    var result = null;
    if (carts.length > 0) {
      result = carts.map((item) => {
        return (
          <li>
            {item.commodityDTO ? item.commodityDTO.name : ""}{" "}
            <span>
              {item.commodityDTO ? item.commodityDTO.cost * item.amount : ""}
            </span>
          </li>
        );
      });
    }
    return result;
  };
  //   componentWillReceiveProps=(nextProps)=>{
  // if(nextProps.carts.length===0){

  // }
  //   }
  render() {
    const { carts } = this.props;
    const subTotal = this.subResult(carts);
    const total = this.total(carts);
    return (
      <div class="col-lg-4 col-md-6">
        {carts.length > 0 && carts[0].success === true ? (
          <Redirect to="success" />
        ) : (
          ""
        )}
        <div class="checkout__order">
          <h4>Your Order</h4>
          <div class="checkout__order__products">
            Products <span>Total</span>
          </div>
          <ul>{this.renderProduct()}</ul>
          <div class="checkout__order__subtotal">
            Subtotal <span>{subTotal}</span>
          </div>
          <div class="checkout__order__total">
            Total <span>{total}</span>
          </div>
          <div class="checkout__input__checkbox">
            <label for="acc-or">
              Create an account?
              <input type="checkbox" id="acc-or" />
              <span class="checkmark"></span>
            </label>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="checkout__input__checkbox">
            <label for="payment">
              Check Payment
              <input type="checkbox" id="payment" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="checkout__input__checkbox">
            <label for="paypal">
              Paypal
              <input type="checkbox" id="paypal" />
              <span class="checkmark"></span>
            </label>
          </div>
          <Button
            onClick={this.order}
            class="site-btn"
            disabled={carts.length > 0 ? false : true}
          >
            PLACE ORDER
          </Button>
        </div>
      </div>
    );
  }
}
export default YourOrder;
