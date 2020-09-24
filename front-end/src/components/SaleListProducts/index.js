import React, { Component } from "react";
import SaleProduct from "../SaleProduct";
import { connect } from "react-redux";
import { filterProduct } from "../../actions/Products";
import Skeleton from "@material-ui/lab/Skeleton";
import { Card, CardContent, Grid } from "@material-ui/core";
class SaleListProducts extends Component {
  componentDidMount() {
    this.props.fetchSales();
  }
  onFilter = (name) => {
    this.props.onFilter(name);
  };
  renderMenu = () => {
    const { category, filter } = this.props;
    var result = null;
    if (category.length > 0) {
      result = category.map((item) => {
        return (
          <li
            className={item.name === filter ? "active" : ""}
            key={item.name}
            onClick={() => {
              this.onFilter(item.name);
            }}
          >
            {item.name}
          </li>
        );
      });
    }
    return result;
  };
  renderSales = () => {
    const { user, filter } = this.props;
    var { sales } = this.props;
    var result = null;
    if (sales) {
      sales = sales.filter((item) => item.categoryDTO.name.includes(filter));
    }
    if (sales && sales.length > 0) {
      result = sales.map((sale) => {
        return (
          <SaleProduct
            key={sale.commodityid}
            sale={sale}
            user={user}
            onAddtoCart={this.props.onAddtoCart}
            loggedIn={this.props.loggedIn}
          />
        );
      });
    }
    return result;
  };
  renderSkeleton = () => {
    var arr = [1, 2, 3, 4];
    var xhtml = arr.map((item) => {
      return (
        <Grid item md={3} xs={12} key={item}>
          <Card>
            <CardContent className="featured__item">
              <div className="featured__item__pic set-bg">
                <Skeleton variant="rect" width={210} height={118} />
                <div className="featured__item__text">
                  <h6>
                    <Skeleton variant="text" />
                  </h6>
                  <Skeleton variant="text" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      );
    });
    return xhtml;
  };
  render() {
    const { filter, sales } = this.props;
    return (
      <div>
        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Featured Product</h2>
                </div>
                <div className="featured__controls">
                  <ul>
                    <li
                      className={filter ? "" : "active"}
                      onClick={() => {
                        this.onFilter("");
                      }}
                    >
                      All
                    </li>
                    {sales.length > 0 ? (
                      this.renderMenu()
                    ) : (
                      <Grid container spacing={2}>
                        {this.renderSkeleton()}
                      </Grid>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row featured__filter">{this.renderSales()}</div>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  category: state.category,
  filter: state.filter,
  sales: state.sales,
  loggedIn: state.session,
});
const mapDispatchToProps = (dispatch) => ({
  onFilter: (name) => {
    dispatch(filterProduct(name));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SaleListProducts);
