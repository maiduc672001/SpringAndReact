import React, { Component } from "react";
import Product from "../Product";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "redux";
import * as actions from "../../actions/Products";
import ReactPaginate from "react-paginate";
import "../../App.css";
class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      perPage: 1,
      currentPage: 0,
      categoryid: this.props.categoryid,
    };
  }
  componentDidMount() {
    const { categoryid } = this.props;
    this.props.actions.fetchProducts(categoryid);
  }
  componentWillReceiveProps(next) {
    if (next && next.categoryid !== this.state.categoryid) {
      this.setState(
        {
          categoryid: next.categoryid,
        },
        () => {
          this.props.actions.fetchProducts(next.categoryid);
        }
      );
    }
  }
  renderProduct = () => {
    const { products, loggedIn, user } = this.props;
    const slice = products.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.props.productFound(products.length);
    if (this.state.pageCount !== products.length) {
      this.setState({
        pageCount: Math.ceil(products.length / this.state.perPage),
      });
    }
    var xhtml = null;
    if (slice.length > 0) {
      xhtml = slice.map((product) => {
        return (
          <Product
            key={product.name}
            product={product}
            loggedIn={loggedIn}
            user={user}
          />
        );
      });
    }
    return xhtml;
  };
  handlePageClick = (e) => {
    const { products } = this.props;
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({
      currentPage: selectedPage,
      offset: offset,
      pageCount: Math.ceil(products.length / this.state.perPage),
    });
  };
  render() {
    return (
      <div className="row">
        {this.renderProduct()}
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
  loggedIn: state.session,
  user: state.userDetails,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ProductsList);
