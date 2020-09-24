import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
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

var menu = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Shop",
    to: "/products",
    exact: true,
  },
  {
    name: "Cart",
    to: "/cart",
    exact: true,
  },
  {
    name: "Blog",
    to: "/blog",
    exact: true,
  },
  {
    name: "Liên hệ",
    to: "/contact",
    exact: true,
  },
];
class HeaderMenu extends Component {
  renderMenu = () => {
    const { user, loggedIn } = this.props;
    if (
      loggedIn &&
      user.roleDTO &&
      user.roleDTO.code === "ROLE_ADMIN" &&
      menu.length === 5
    ) {
      menu.push({
        name: "Thêm sản phẩm",
        to: "/update/product",
        exact: false,
      });
    }
    var xhtml = menu.map((item) => {
      return (
        <MenuLink
          key={item.name}
          label={item.name}
          to={item.to}
          activeOnlyWhenExact={item.exact}
        ></MenuLink>
      );
    });

    return xhtml;
  };
  render() {
    return <ul>{this.renderMenu()}</ul>;
  }
}
export default HeaderMenu;
