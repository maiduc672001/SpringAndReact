import React, { Component } from "react";
import CartItem from "../CartItem";
import { compose } from "redux";
import * as cartActions from "../../actions/cartActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActions from "../../actions/modalActions";
import { Box, Button, withStyles } from "@material-ui/core";
import style from "./style";
class CartList extends Component {
  componentDidMount() {
    this.props.cartActions.fetchProductCart();
  }
  onChangeAmount = (val, id) => {
    this.props.cartActions.changeAmount(val, id);
  };
  showModalDeleteTask = (task) => {
    const { modalActions, classes } = this.props;
    const {
      showModal,
      changeModalContent,
      changeModalTitle,
      hideModal,
    } = modalActions;
    showModal();
    changeModalTitle("Xóa công việc");
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Bạn chắc chắn muốn xóa
          <span className={classes.modalConfirmTextBold}>{task.title}</span>?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button variant="contained" onClick={hideModal}>
              Hủy bỏ
            </Button>
          </Box>
          <Box ml={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                this.onHandleDeleteTask(task);
              }}
            >
              Đồng ý
            </Button>
          </Box>
        </Box>
      </div>
    );
  };
  onHandleDeleteTask = (product) => {
    const { cartActions } = this.props;
    const { deleteProductCart } = cartActions;
    deleteProductCart(product.cartcommodityid);
  };
  renderCartProduct = () => {
    const { carts } = this.props;
    var result = null;
    if (carts.length > 0) {
      result = carts.map((item) => {
        return (
          <CartItem
            key={item.name}
            cart={item}
            onChangeAmount={this.onChangeAmount}
            onClickDelete={this.showModalDeleteTask}
          />
        );
      });
    }
    return result;
  };
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="shoping__cart__table">
            <table>
              <thead>
                <tr>
                  <th className="shoping__product">Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{this.renderCartProduct()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  carts: state.carts,
});
const mapDispatchToProps = (dispatch) => ({
  cartActions: bindActionCreators(cartActions, dispatch),
  modalActions: bindActionCreators(modalActions, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, withStyles(style))(CartList);
