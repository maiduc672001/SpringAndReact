import React, { Component } from "react";
import { Route } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UpdateProduct from "../UpdateProduct";
import { fetchCategory } from "../../actions/Products";
import { connect } from "react-redux";
import Menu from "../../components/Menu";
class UpdateProductPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Route
          path="/update/product/:commodityid"
          component={UpdateProduct}
          exact={true}
        ></Route>
        <Route
          path="/update/product"
          component={UpdateProduct}
          exact={true}
        ></Route>
        <Footer />
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({
//   categories: state.category,
// });
// const mapDispatchToProps = (dispatch, props) => ({
//   fetchCategory: () => {
//     dispatch(fetchCategory());
//   },
// });
export default UpdateProductPage;
