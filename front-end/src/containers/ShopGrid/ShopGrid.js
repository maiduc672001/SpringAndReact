import React, { Component } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../actions/Products";
import { Route } from "react-router-dom";
import Shop from "../../components/Shop";
class ShopGrid extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Route
          path="/products/:categoryid"
          component={Shop}
          exact={true}
        ></Route>
        <Route path="/products" component={Shop} exact={true}></Route>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(productActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopGrid);
