import React, { Component } from "react";
import DiscountCode from "../DiscountCode/index";
import CartTotal from "../CartTotal/index";
import { connect } from "react-redux";
import { compose } from "redux";
import { updateCart } from "../../actions/cartActions";
class CartManage extends Component {
  onClick = () => {
    const { carts } = this.props;
    this.props.updateCart(carts);
  };
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="shoping__cart__btns">
            <a href="#" className="primary-btn cart-btn">
              CONTINUE SHOPPING
            </a>
            <button
              className="primary-btn cart-btn cart-btn-right"
              onClick={this.onClick}
            >
              <span className="icon_loading"></span>
              Upadate Cart
            </button>
          </div>
        </div>
        <DiscountCode />
        <CartTotal carts={this.props.carts} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  carts: state.carts,
});
const mapDispatchToProps = (dispatch) => ({
  updateCart: (data) => {
    dispatch(updateCart(data));
  },
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(CartManage);
