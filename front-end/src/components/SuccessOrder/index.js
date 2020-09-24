import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { compose } from "redux";
import Gif from "../../image/success.gif";
import ReactTimeout from "react-timeout";
import style from "./style";
class SuccessOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onShow: true,
    };
  }
  reset = () => {
    this.setState({
      onShow: false,
    });
  };
  componentDidMount() {
    this.props.setTimeout(this.reset, 1000);
  }
  renderGif = () => {
    const { classes } = this.props;
    var xhtml = null;
    if (this.state.onShow) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img src={Gif} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  };
  render() {
    return (
      <div>
        {this.renderGif()}
        <h1>Mua hàng thành công</h1>
      </div>
    );
  }
}
export default withStyles(style)(ReactTimeout(SuccessOrder));
