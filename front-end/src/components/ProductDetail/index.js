import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchDetailProduct } from "../../actions/Products";
import { Button, withStyles } from "@material-ui/core";
import style from "./style";
import { onAddtoCart } from "../../actions/Products";
import { Link } from "react-router-dom";
class ProductDetail extends Component {
  componentDidMount() {
    const { commodityid } = this.props.match.params;
    this.props.fetchproduct(commodityid);
  }
  onAddToCart = (commodityid) => {
    this.props.onAddtoCart(commodityid);
  };
  renderOnAddToCart = () => {
    const { loggedIn, classes, product } = this.props;
    if (loggedIn) {
      return (
        <Button
          className={classes.background}
          onClick={() => {
            this.onAddToCart(product.commodityid);
          }}
        >
          ADD TO CARD
        </Button>
      );
    } else {
      return (
        <Link className={classes.background} to="/login">
          ADD TO CART
        </Link>
      );
    }
  };
  render() {
    const { product } = this.props;
    return (
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src={process.env.PUBLIC_URL + `/images/${product.image}`}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>{product.name}</h3>
                <div className="product__details__rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <span>(18 reviews)</span>
                </div>
                <div className="product__details__price">{product.cost}</div>
                <p>{product.shortdescription}</p>
                {this.renderOnAddToCart()}
                <a href="#" className="heart-icon">
                  <span className="icon_heart_alt"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      aria-selected="false"
                    >
                      Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      aria-selected="false"
                    >
                      Reviews <span>(1)</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>{product.description}</p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>{product.information}</p>
                    </div>
                  </div>
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
  product: state.product,
  loggedIn: state.session,
});
const mapDispatchToProps = (dispatch) => ({
  fetchproduct: (id) => {
    dispatch(fetchDetailProduct(id));
  },
  onAddtoCart: (id) => {
    dispatch(onAddtoCart(id));
  },
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, withStyles(style))(ProductDetail);
