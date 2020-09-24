import React, { Component } from "react";
import UserPage from "./common/Layout/UserPage/index";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./common/Theme/Theme";
import { BrowserRouter, Switch } from "react-router-dom";
import { ROUTES, LOGINROUTE, ADMINROUTES } from "./constant/index";
import { connect } from "react-redux";
import LoginPageRoute from "./common/Layout/LoginPageRoute/LoginPageRoute";
import AdminPage from "./common/Layout/AdminPage/AdminPage";
import { fetchUserDetails } from "./actions/sessionActions";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { IntlProvider } from "react-redux-multilingual";
import translations from "./common/translations/translations";
import ModalAlert from "./components/Modal/index";
class App extends Component {
  renderDefaultRoute = () => {
    let xhtml = null;
    xhtml = ROUTES.map((route, index) => {
      return (
        <UserPage
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  };
  renderLogin = () => {
    let xhtml = null;
    xhtml = LOGINROUTE.map((route, index) => {
      return (
        <LoginPageRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  };
  renderAdmin = () => {
    const { user } = this.props;
    let xhtml = null;
    xhtml = ADMINROUTES.map((route, index) => {
      return (
        <AdminPage
          user={user}
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  };
  renderUserOrAdmin = () => {
    const { user } = this.props;
    if (user.roleDTO && user.roleDTO.code === "ROLE_ADMIN") {
      return this.renderAdmin();
    } else {
      return this.renderDefaultRoute();
    }
  };
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <IntlProvider translations={translations}>
            <ToastContainer />
            <ModalAlert />
            <Switch>
              {this.renderLogin()}
              {this.renderUserOrAdmin()}
            </Switch>
          </IntlProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.session,
    user: state.userDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => {
      dispatch(fetchUserDetails());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
