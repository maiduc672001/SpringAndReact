import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
class SaleProduct extends Component {
  onAddToCart = (commodityid) => {
    this.props.onAddtoCart(commodityid);
  };
  renderRepair = () => {
    const { user, loggedIn, sale } = this.props;
    if (loggedIn && user.roleDTO.code === "ROLE_ADMIN") {
      return (
        <li>
          <Link to={`update/product/${sale.commodityid}`}>
            <i className="fa fa-retweet"></i>
          </Link>
        </li>
      );
    } else {
      return null;
    }
  };
  renderCart = (commodityid, username) => {
    const { loggedIn, user } = this.props;
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
    const { sale, user } = this.props;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="featured__item">
          <div className="featured__item__pic set-bg">
            <img
              src={process.env.PUBLIC_URL + `/images/${sale.image}`}
              alt="logo"
              width={400}
              height={300}
            />
            <ul className="featured__item__pic__hover">
              <li>
                <a href="#">
                  <i className="fa fa-heart"></i>
                </a>
              </li>
              {this.renderRepair()}
              {this.renderCart(sale.commodityid, user.username)}
            </ul>
          </div>
          <div className="featured__item__text">
            <h6>
              <a href="#">{sale.name}</a>
            </h6>
            <h5>{sale.cost}</h5>
          </div>
        </div>
      </div>
    );
  }
}
export default SaleProduct;
