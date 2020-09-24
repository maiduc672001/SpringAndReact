import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { loginUser } from "../../actions/sessionActions";
class FacebookPage extends Component {
  render() {
    const responseFacebook = (res) => {
      const { login, singup } = this.props;
      if (login) {
        this.props.loginUser(res);
      } else if (singup) {
        this.props.addNewUser(res);
      }
    };
    return (
      <FacebookLogin
        appId="302762331171196"
        autoLoad={true}
        fields="name,email,picture"
        icon="fa-facebook"
        callback={responseFacebook}
      />
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  loginUser: (res) => {
    dispatch(loginUser(res));
  },
});
export default connect(null, mapDispatchToProps)(FacebookPage);
