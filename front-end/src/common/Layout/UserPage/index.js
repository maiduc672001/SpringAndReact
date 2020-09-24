import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import LoginPage from "../../../containers/LoginPage";
const pathDefault = ["/products", "/contact"];
class UserPage extends Component {
  checkPath = () => {
    const { path } = this.props;
    for (var i = 0; i < pathDefault.length; i++) {
      if (path.indexOf(pathDefault[i]) !== -1) {
        return true;
      }
    }
    return false;
  };
  render() {
    const { component: YourComponent, path, exact, loggedIn } = this.props;

    const isUAuthenticated =
      path === "/" || this.checkPath() || loggedIn ? true : false;
    return (
      <div>
        <Route
          path={path}
          exact={exact}
          render={(routeProps) => {
            return isUAuthenticated ? (
              <YourComponent {...routeProps} />
            ) : (
              <LoginPage />
            );
          }}
        ></Route>
      </div>
    );
  }
}
const mapSateToProps = (state) => ({
  loggedIn: state.session,
});
export default connect(mapSateToProps, null)(UserPage);
