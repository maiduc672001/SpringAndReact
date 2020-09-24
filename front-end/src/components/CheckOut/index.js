import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import YourOrder from "../YourOrder";
class CheckOut extends Component {
  render() {
    const { user, carts } = this.props;
    return (
      <section class="checkout spad">
        <div class="container">
          <div class="checkout__form">
            <h4>Billing Details</h4>
            <form action="#">
              <div class="row">
                <div class="col-lg-8 col-md-6">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="checkout__input">
                        <p>
                          User Name<span>*</span>
                        </p>
                        <p type="text" style={{ background: "silver" }}>
                          {user.username}
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="checkout__input">
                        <p>
                          Full Name<span>*</span>
                        </p>
                        <p type="text" style={{ background: "silver" }}>
                          {user.fullname}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="checkout__input">
                    <p>
                      Address<span>*</span>
                    </p>
                    <p
                      type="text"
                      class="checkout__input__add"
                      style={{ background: "silver" }}
                    >
                      {user.address}
                    </p>
                  </div>
                  <div class="checkout__input">
                    <p>
                      Phonenumber<span>*</span>
                    </p>
                    <p type="text" style={{ background: "silver" }}>
                      {user.phonenumber}
                    </p>
                  </div>
                  <div class="checkout__input">
                    <p>
                      Email<span>*</span>
                    </p>
                    <p type="text" style={{ background: "silver" }}>
                      {user.email}
                    </p>
                  </div>
                  <Button style={{ background: "silver" }}>
                    <Link to="/update/user">Thay đổi thông tin</Link>
                  </Button>
                </div>

                <YourOrder carts={carts} order={this.props.order} />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default CheckOut;
