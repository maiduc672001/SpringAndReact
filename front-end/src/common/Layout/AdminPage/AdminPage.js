import React, { Component } from "react";
import { Route } from "react-router-dom";
class AdminPage extends Component {
  render() {
    const { component: YourComponent, path, exact, user } = this.props;
    const loggedIn = user ? true : false;
    console.log("CCCCC");
    return (
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => {
          return <YourComponent {...routeProps} />;
        }}
      ></Route>
    );
  }
}
export default AdminPage;
