import React, { Component } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import SaleListProducts from "../../components/SaleListProducts";
import LatestTopReview from "../../components/LatestTopReview";
import Footer from "../../components/Footer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../actions/Products";
class DefaultPage extends Component {
  fetchSales = () => {
    this.props.actions.fetchSales();
  };
  onAddtoCart = (commodityid) => {
    this.props.actions.onAddtoCart(commodityid);
  };
  render() {
    const { user, loggedIn } = this.props;
    return (
      <div>
        <Header />
        <Menu />
        <SaleListProducts
          fetchSales={this.fetchSales}
          user={user}
          onAddtoCart={this.onAddtoCart}
          loggedIn={loggedIn}
        />
        <LatestTopReview />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.userDetails,
  loggedIn: state.session,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(productActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
