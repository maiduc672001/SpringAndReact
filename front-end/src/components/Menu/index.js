import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import { fetchCategory } from "../../actions/Products";
import { withStyles } from "@material-ui/core";
import style from "./style";
import { compose } from "redux";
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to} className="my-link">
              {label}
            </Link>
          </li>
        );
      }}
    ></Route>
  );
};
class Menu extends Component {
  renderMenu = () => {
    const { category } = this.props;
    var result = null;
    if (category.length > 0) {
      result = category.map((item) => {
        return (
          <MenuLink
            key={item.name}
            to={`/products/${item.categoryid}`}
            label={item.name}
            activeOnlyWhenExact={true}
          />
        );
      });
    }
    return result;
  };
  componentDidMount = () => {
    this.props.fetchCategory();
  };
  render() {
    const { classes } = this.props;
    return (
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                <ul>{this.renderMenu()}</ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down"></span>
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              <div
                className="hero__item set-bg"
                data-setbg="img/hero/banner.jpg"
              >
                <div className="hero__text">
                  <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#" className="primary-btn">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  category: state.category,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCategory: () => {
    dispatch(fetchCategory());
  },
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(style), withConnect)(Menu);
