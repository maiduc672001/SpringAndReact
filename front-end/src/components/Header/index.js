import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { logOutUser, moveUser } from "../../actions/sessionActions";
import { withTranslate } from "react-redux-multilingual";
import { IntlActions } from "react-redux-multilingual";
import HeaderMenu from "../HeaderMenu/index";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn,
      username: "",
    };
  }
  logout = () => {
    this.props.logOutUser();
    this.props.moveUser();
    this.setState({
      loggedIn: false,
      username: this.props.userDetails.username,
    });
  };
  changeLanguage = (lang) => {
    this.props.changeLanguage(lang);
  };
  renderLogin = () => {
    const { loggedIn } = this.state;
    if (!loggedIn) {
      return (
        <div className="header__top__right__auth">
          <Link className="fa fa-user" to="/login">
            Login
          </Link>
        </div>
      );
    } else {
      return (
        <div className="header__top__right__auth">
          <Link className="fa fa-user" to="/" onClick={this.logout}>
            Logout
          </Link>
          <Link className="fa fa-user" to="/update/user">
            Tài khoản
          </Link>
        </div>
      );
    }
  };
  render() {
    const username = this.props.loggedIn
      ? this.props.userDetails.username + ""
      : "";
    const { translate } = this.props;
    return (
      <div>
        <div className="humberger__menu__overlay"></div>
        <div className="humberger__menu__wrapper">
          <div className="humberger__menu__logo">
            <a href="#">
              <img src="img/logo.png" alt="" />
            </a>
          </div>
          <div className="humberger__menu__cart">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-heart"></i> <span>1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-shopping-bag"></i> <span>3</span>
                </a>
              </li>
            </ul>
            <div className="header__cart__price">
              item: <span>$150.00</span>
            </div>
          </div>
          <div className="humberger__menu__widget">
            <div className="header__top__right__language">
              <img src="img/language.png" alt="" />
              <div>English</div>
              <span className="arrow_carrot-down"></span>
              <ul>
                <li>
                  <a href="#">Spanis</a>
                </li>
                <li>
                  <a href="#">English</a>
                </li>
              </ul>
            </div>
            <div className="header__top__right__auth">
              <a href="#">
                <i className="fa fa-user"></i> Login
              </a>
            </div>
          </div>
          <nav className="humberger__menu__nav mobile-menu">
            <ul>
              <li className="active">
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./shop-grid.html">Shop</a>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="header__menu__dropdown">
                  <li>
                    <a href="./shop-details.html">Shop Details</a>
                  </li>
                  <li>
                    <a href="./shoping-cart.html">Shoping Cart</a>
                  </li>
                  <li>
                    <a href="./checkout.html">Check Out</a>
                  </li>
                  <li>
                    <a href="./blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="./blog.html">Blog</a>
              </li>
              <li>
                <a href="./contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
          <div className="header__top__right__social">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-pinterest-p"></i>
            </a>
          </div>
          <div className="humberger__menu__contact">
            <ul>
              <li>
                <i className="fa fa-envelope"></i> hello@colorlib.com
              </li>
              <li>Free Shipping for all Order of $99</li>
            </ul>
          </div>
        </div>

        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__left">
                    <ul>
                      <li>
                        <i className="fa fa-envelope"></i> hello {username}
                      </li>
                      <li>{translate("welcome", { value: "Đức Mai" })}</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__right">
                    <div className="header__top__right__social">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest-p"></i>
                      </a>
                    </div>
                    <div className="header__top__right__language">
                      <img src="img/language.png" alt="" />
                      <div>English</div>
                      <span className="arrow_carrot-down"></span>
                      <ul>
                        <li>
                          <button
                            onClick={() => {
                              this.changeLanguage("vn");
                            }}
                          >
                            Vietnam
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              this.changeLanguage("en");
                            }}
                          >
                            English
                          </button>
                        </li>
                      </ul>
                    </div>

                    {this.renderLogin()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                  <a href="./index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <nav className="header__menu">
                  <HeaderMenu
                    user={this.props.userDetails}
                    loggedIn={this.props.loggedIn}
                  />
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i> <span>1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-bag"></i> <span>3</span>
                      </a>
                    </li>
                  </ul>
                  <div className="header__cart__price">
                    item: <span>$150.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
const mapSateToProps = (state) => {
  return {
    loggedIn: state.session,
    userDetails: state.userDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: () => {
      dispatch(logOutUser());
    },
    moveUser: () => {
      dispatch(moveUser());
    },
    changeLanguage: (lang) => {
      dispatch(IntlActions.setLocale(lang));
    },
  };
};
const withConnect = connect(mapSateToProps, mapDispatchToProps);
export default compose(withConnect, withTranslate)(Header);
