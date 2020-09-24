import React, { Component } from "react";
import Department from "../Department";
import ProductsList from "../ProductsList";
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productFound: 0,
    };
  }
  productFound = (found) => {
    if (this.state.productFound !== found) {
      this.setState({
        productFound: found,
      });
    }
  };
  render() {
    const { match } = this.props;
    const { categoryid } = match.params;
    const { productFound } = this.state;
    return (
      <section className="product spad">
        <div className="container">
          <div className="row">
            <Department />
            <div className="col-lg-9 col-md-7">
              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span>Sort By</span>
                      <select>
                        <option value="0">Default</option>
                        <option value="0">Default</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6>
                        <span>{productFound}</span> Products found
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2"></span>
                      <span className="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>
              <ProductsList
                categoryid={categoryid}
                productFound={this.productFound}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Shop;
