import React, { Component } from "react";
import { connect } from "react-redux";
import CheckOut from "../../components/CheckOut";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { fetchProductCart, order } from "../../actions/cartActions";
class CheckOutPage extends Component {
  componentDidMount() {
    this.props.fetchProductCart();
  }
  order = (carts) => {
    this.props.order(carts);
  };
  render() {
    const { user, carts } = this.props;
    return (
      <div>
        <Header />
        <Menu />
        <CheckOut user={user} carts={carts} order={this.order} />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.userDetails,
  carts: state.carts,
});
const mapDispatchToProps = (dispatch) => ({
  fetchProductCart: () => {
    dispatch(fetchProductCart());
  },
  order: (carts) => {
    dispatch(order(carts));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
