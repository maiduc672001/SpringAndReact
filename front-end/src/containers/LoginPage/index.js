import React, { Component } from "react";
import { withStyles, Typography, TextField, Button } from "@material-ui/core";
import style from "./style";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as sessionActions from "../../actions/sessionActions";
import GooglePage from "../GoogleLogin";
import FacebookPage from "../FacebookLogin/index";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { credentials: { username: "", password: "" } };
  }
  onChange = (event) => {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({ credentials: credentials });
  };
  onSave = (event) => {
    event.preventDefault();
    console.log(this.state.credentials);
    this.props.actions.loginUser(this.state.credentials);
    // this.props.actions.fetchUserDetails();
  };
  render() {
    const { classes } = this.props;
    const { username, password } = this.state.credentials;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">
                    Đăng nhập để tiếp tục
                  </Typography>
                  <TextField
                    label="Email"
                    type="text"
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    className={classes.textField}
                    fullWidth
                    name="password"
                    margin="normal"
                    value={password}
                    onChange={this.onChange}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    onClick={this.onSave}
                  >
                    Login
                  </Button>
                  <div className="pt-1 text-md-center">
                    <div>
                      <GooglePage login={true} />
                      {/* <FacebookPage login={true} /> */}
                    </div>
                    <Link to="/signup">
                      <Button>Đăng kí tài khoản mới </Button>
                    </Link>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch),
  };
};
const withConnect = connect(null, mapDispatchToProps);
export default withStyles(style)(withConnect(LoginPage));
