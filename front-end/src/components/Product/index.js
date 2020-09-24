import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Product extends Component {
  renderRepair = () => {
    const { user, loggedIn } = this.props;
    if (loggedIn && user.roleDTO.code === "ROLE_ADMIN") {
      return (
        <li>
          <a href="#">
            <i className="fa fa-retweet"></i>
          </a>
        </li>
      );
    } else {
      return null;
    }
  };
  renderCart = (commodityid, username) => {
    const { loggedIn } = this.props;
    if (loggedIn && username) {
      return (
        <li>
          <Button
            onClick={() => {
              this.onAddToCart(commodityid);
            }}
          >
            <i className="fa fa-shopping-cart"></i>
          </Button>
        </li>
      );
    } else {
      return (
        <li>
          <Link to="/login">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </li>
      );
    }
  };
  render() {
    const { product, user } = this.props;
    return (
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="product__item">
          <div className="product__item__pic set-bg">
            <img
              src={process.env.PUBLIC_URL + `/images/${product.image}`}
              alt="logo"
              width={400}
              height={300}
            />
            <ul className="product__item__pic__hover">
              <li>
                <a href="#">
                  <i className="fa fa-heart"></i>
                </a>
              </li>
              {this.renderRepair()}
              {this.renderCart(product.commodityid, user.username)}
            </ul>
          </div>
          <div className="product__item__text">
            <h6>
              <Link to={`/details/${product.commodityid}`}>{product.name}</Link>
            </h6>
            <h5>{product.cost}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
