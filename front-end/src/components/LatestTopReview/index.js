import React, { Component } from "react";
import Latest from "./Latest/index";
import Top from "./Review";
import Review from "./Top";
class LatestTopReview extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src="img/banner/banner-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src="img/banner/banner-2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="latest-product spad">
          <div className="container">
            <div className="row">
              <Latest />
              <Top />
              <Review />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default LatestTopReview;
