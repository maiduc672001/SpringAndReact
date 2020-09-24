import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { withStyles, Grid, Button } from "@material-ui/core";
import style from "./style";
import renderTextField from "../../components/FormHelper/TextField/index";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import validate from "./validate";
import GooglePage from "../GoogleLogin/index";
import FacebookPage from "../FacebookLogin/index";
import { addNewUser, updateUser } from "../../actions/sessionActions";
class SignUpPage extends Component {
  renderGooFa = () => {
    const { loggedIn } = this.props;
    if (!loggedIn) {
      return (
        <div>
          <GooglePage signup={true} />
          <FacebookPage signup={true} />
        </div>
      );
    }
  };
  render() {
    const { classes, handleSubmit, invalid, submitting, loggedIn } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              label="Tên đăng nhập"
              className={classes.textField}
              margin="normal"
              name="username"
              component={renderTextField}
              type="text"
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="fullname"
              label="FullName"
              margin="normal"
              className={classes.textField}
              name="fullname"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="password"
              label="Mật khẩu"
              margin="normal"
              className={classes.textField}
              name="password"
              component={renderTextField}
              type="password"
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="email"
              label="Email"
              margin="normal"
              className={classes.textField}
              name="email"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="address"
              label="Address"
              margin="normal"
              className={classes.textField}
              name="address"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="phonenumber"
              label="Phonnumber"
              margin="normal"
              className={classes.textField}
              name="phonenumber"
              component={renderTextField}
            />
          </Grid>
          <Button
            disabled={invalid || submitting}
            variant="contained"
            color="primary"
            type="submit"
          >
            {loggedIn ? "Cập nhật" : "Đăng kí"}
          </Button>
        </Grid>
        {this.renderGooFa()}
      </form>
    );
  }
  handleSubmitForm = (data) => {
    if (data.userid) {
      this.props.updateUser(data);
    } else {
      this.props.addNewUser(data);
    }
  };
}
const mapStateToProps = (state) => {
  return {
    initialValues: state.userDetails,
    loggedIn: state.session,
  };
};
const mapDispatchToProps = (dispatch, props) => ({
  addNewUser: (user) => {
    dispatch(addNewUser(user));
  },
  updateUser: (user) => {
    dispatch(updateUser(user));
  },
});
const FORMN_NAME = "USER_MANAGEMENT";
const withReduxForm = reduxForm({
  form: FORMN_NAME,
  validate,
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withStyles(style),
  withConnect,
  withReduxForm
)(SignUpPage);
