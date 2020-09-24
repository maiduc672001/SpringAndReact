import React, { Component } from "react";
import Googlelogin from "react-google-login";
import { connect } from "react-redux";
import { loginUser, addNewUser } from "../../actions/sessionActions";
class GooglePage extends Component {
  render() {
    const responseGoogle = (res) => {
      const { login, singup } = this.props;
      if (login) {
        this.props.loginUser(res);
      } else if (singup) {
        this.props.addNewUser(res);
      }
    };
    return (
      <Googlelogin
        clientId="704640339647-3kfi4eice3nsas7nrn0gr42o3bsqobp0.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      ></Googlelogin>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  loginUser: (res) => {
    dispatch(loginUser(res));
  },
  addNewUser: (res) => {
    dispatch(addNewUser(res));
  },
});
export default connect(null, mapDispatchToProps)(GooglePage);
