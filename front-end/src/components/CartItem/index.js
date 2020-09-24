import React, { Component } from "react";
class CartItem extends Component {
  onClick = (val, id) => {
    this.props.onChangeAmount(val, id);
  };
  onChange = () => {
    const { cart } = this.props;
  };
  render() {
    const { cart } = this.props;
    return (
      <tr>
        <td className="shoping__cart__item">
          <img
            src={
              process.env.PUBLIC_URL +
              `/images/${cart.commodityDTO ? cart.commodityDTO.image : ""}`
            }
            alt="logo"
          />
          <h5>{cart.commodityDTO ? cart.commodityDTO.name : ""}</h5>
        </td>
        <td className="shoping__cart__price">
          {cart.commodityDTO ? cart.commodityDTO.cost : ""}
        </td>
        <td className="shoping__cart__quantity">
          <div className="quantity">
            <div className="pro-qty">
              <span
                className="dec qtybtn"
                onClick={() => {
                  this.onClick(-1, cart.cartcommodityid);
                }}
              >
                -
              </span>
              <input type="text" value={cart.amount} onChange={this.onChange} />
              <span
                className="inc qtybtn"
                onClick={() => {
                  this.onClick(1, cart.cartcommodityid);
                }}
              >
                +
              </span>
            </div>
          </div>
        </td>
        <td className="shoping__cart__total">
          {cart.commodityDTO ? cart.commodityDTO.cost * cart.amount : ""}
        </td>
        <td className="shoping__cart__item__close">
          <span
            className="icon_close"
            onClick={() => {
              this.props.onClickDelete(cart);
            }}
          ></span>
        </td>
      </tr>
    );
  }
}
export default CartItem;
