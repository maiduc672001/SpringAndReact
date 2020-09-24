import { Button, Grid, MenuItem, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import renderTextField from "../../components/FormHelper/TextField/index";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import style from "./style";
import validate from "./validate";
import { fetchCategory, fetchDetailProduct } from "../../actions/Products";
import { compose } from "redux";
import renderSelectField from "../../components/FormHelper/SelectField/index";
import DropZoneField from "../../components/FormHelper/DropZone/index";
import { addNewProduct, updateProduct } from "../../actions/Products";
import { Redirect } from "react-router-dom";
import Axios from "axios";
const imageIsRequired = (value) => (!value ? "Required" : undefined);
class UpdateProduct extends Component {
  state = { imageFile: [], redirect: false, renderImage: true };
  componentDidMount() {
    const { match } = this.props;
    const { commodityid } = match.params;
    if (commodityid) {
      this.props.fetchInitial(commodityid);
    }
  }
  componentWillMount() {
    this.setState({
      ...this.state,
      redirect: false,
    });
  }
  handleFormSubmit = (formProps) => {
    if (!formProps.imageToUpload) {
      formProps.imageToUpload = this.state.imageFile[0];
    }
    if (formProps.commodityid) {
      this.props.updateProduct(formProps);
    } else {
      this.props.addNewProduct(formProps);
    }
    this.setState({
      ...this.state,
      redirect: true,
    });
  };
  renderImage() {
    const { initialValues } = this.props;
    if (initialValues.image) {
      Axios.get(`http://localhost:3000/images/${initialValues.image}`).then(
        (response) => {
          let data = response.data;
          let metadata = {
            type: "image/png",
          };
          let begin = initialValues.image.indexOf("/");
          let f = new File(
            [data],
            initialValues.image.substring(begin + 1),
            metadata
          );

          const imageFile = {
            file: f,
            name: f.name,
            preview: `http://localhost:3000/images/${initialValues.image}`,
            size: f.size,
          };
          this.setState({
            ...this.state,
            imageFile: [imageFile],
            renderImage: false,
          });
        }
      );
    }
  }
  handleOnDrop = (newImageFile, onChange) => {
    const imageFile = {
      file: newImageFile[0],
      name: newImageFile[0].name,
      preview: URL.createObjectURL(newImageFile[0]),
      size: newImageFile[0].size,
    };
    this.setState({ imageFile: [imageFile] }, () => onChange(imageFile));
  };

  resetForm = () => this.setState({ imageFile: [] }, () => this.props.reset());
  render() {
    const {
      classes,
      handleSubmit,
      invalid,
      submitting,
      initialValues,
    } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.handleFormSubmit)}
        encType="multipart/form-data"
        id="my-form"
      >
        {this.state.renderImage ? this.renderImage() : ""}
        {this.state.redirect ? <Redirect to="/admin" /> : ""}
        <Grid container>
          <Grid item md={12}>
            <Field
              label="Name"
              className={classes.textField}
              margin="normal"
              name="name"
              component={renderTextField}
              type="text"
            />
          </Grid>
          <Field
            name="imageToUpload"
            component={DropZoneField}
            type="file"
            imagefile={this.state.imageFile}
            handleOnDrop={this.handleOnDrop}
            validate={this.state.imageFile.length > 0 ? "" : [imageIsRequired]}
          />
          <button
            type="button"
            className="uk-button uk-button-default uk-button-large"
            onClick={this.resetForm}
            style={{ float: "right" }}
          >
            Clear
          </button>
          <Grid item md={12}>
            <Field
              id="cost"
              label="Cost"
              margin="normal"
              className={classes.textField}
              name="cost"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="amount"
              label="Amount"
              margin="normal"
              className={classes.textField}
              name="amount"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Description"
              margin="normal"
              className={classes.textField}
              name="description"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="information"
              label="Information"
              margin="normal"
              className={classes.textField}
              name="information"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="shortDescription"
              label="ShortDescription"
              margin="normal"
              className={classes.textField}
              name="shortdescription"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="sale"
              label="Sale"
              margin="normal"
              className={classes.textField}
              name="sale"
              component={renderTextField}
            />
          </Grid>
          {this.renderStatusSelection()}
          <Button
            disabled={invalid || submitting}
            variant="contained"
            color="primary"
            type="submit"
          >
            Cập nhật
          </Button>
        </Grid>
      </form>
    );
  }
  renderCategory = () => {
    const { categories } = this.props;
    var result = [];
    if (categories && categories.length > 0) {
      result = categories.map((category) => {
        return <MenuItem value={category.categoryid}>{category.name}</MenuItem>;
      });
    } else {
      result.push(<MenuItem value={0}>Lựa chọn</MenuItem>);
    }

    return result;
  };
  renderStatusSelection = () => {
    let xhtml = null;
    const { classes } = this.props;
    xhtml = (
      <Grid item md={12}>
        <Field
          id="category"
          label="Thể loại"
          className={classes.select}
          name="categoryid"
          component={renderSelectField}
        >
          {this.renderCategory()}
        </Field>
      </Grid>
    );
    return xhtml;
  };
}
const mapStateToProps = (state, props) => {
  return {
    initialValues: {
      ...state.product,
      categoryid: state.product.categoryDTO
        ? state.product.categoryDTO.categoryid
        : "0",
    },
    categories: state.category,
    product: state.product,
  };
};
const mapDispatchToProps = (dispatch, props) => ({
  addNewProduct: (data) => {
    dispatch(addNewProduct(data));
  },
  fetchInitial: (id) => {
    dispatch(fetchDetailProduct(id));
  },
  updateProduct: (data) => {
    dispatch(updateProduct(data));
  },
});
const FORMN_NAME = "PRODUCT_UPDATE";
const withReduxForm = reduxForm({
  form: FORMN_NAME,
  validate,
  enableReinitialize: true,
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withStyles(style),
  withConnect,
  withReduxForm
)(UpdateProduct);
