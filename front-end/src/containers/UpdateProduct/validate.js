const validate = (values) => {
  const error = {};
  const {
    name,
    cost,
    description,
    information,
    shortdescription,
    amount,
    sale,
    categoryid,
  } = values;
  if (!name) {
    error.name = "Vui lòng nhập tên sản phẩm";
  }
  if (!cost) {
    error.cost = "Vui lòng nhập Giá sản phẩm";
  }
  if (!description) {
    error.description = "Vui lòng nhập description";
  }
  if (!information) {
    error.information = "Vui lòng nhập Thông tin sản phẩm";
  }
  if (!shortdescription) {
    error.shortdescription = "Vui lòng nhập Mô tả ngắn";
  }
  if (!amount) {
    error.amount = "Vui lòng nhập Số lượng";
  }
  if (!sale) {
    error.sale = "Vui lòng nhập Số lượng";
  }
  if (!categoryid || categoryid === "0") {
    error.categoryid = "Vui lòng nhập Thể loại";
  }
  return error;
};
export default validate;
