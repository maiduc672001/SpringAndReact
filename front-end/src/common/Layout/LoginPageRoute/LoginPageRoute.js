import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "../../../containers/LoginPage";
import SignUpPage from "../../../containers/SignupPage/SignUpPage";
class LoginPageRoute extends Component {
  renderAfter = (path) => {
    const { user, loggedIn } = this.props;
    const role = user.roleDTO ? user.roleDTO.code : "";
    if (loggedIn && role === "ROLE_ADMIN") {
      return <Redirect to="/admin" />;
    } else if (loggedIn && role === "ROLE_USER") {
      return <Redirect to="/" />;
    } else {
      if (path === "/login") {
        return <LoginPage />;
      } else {
        return <SignUpPage />;
      }
    }
  };
  render() {
    const { component: YourComponent, path, exact } = this.props;
    return (
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => {
          return <YourComponent {...routeProps} />;
        }}
      >
        {this.renderAfter(path)}
      </Route>
    );
  }
}
const mapSateToProps = (state) => ({
  loggedIn: state.session,
  user: state.userDetails,
});
export default connect(mapSateToProps, null)(LoginPageRoute);
