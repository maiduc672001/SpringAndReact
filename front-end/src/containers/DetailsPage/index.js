import React, { Component } from "react";
import { Route } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProductDetail from "../../components/ProductDetail/index";
class DetailsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Route
          path="/details/:commodityid"
          component={ProductDetail}
          exact={true}
        ></Route>
        <Footer />
      </div>
    );
  }
}
export default DetailsPage;
