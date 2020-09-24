const validate = (values) => {
  const error = {};
  const { username, password, email, fullname, phonenumber } = values;
  if (!username) {
    error.username = "Vui lòng nhập tên đăng nhập";
  } else if (username.trim() && username.length < 5) {
    error.username = "Tên đăng nhập phải từ 5 kí tự";
  }
  if (!password) {
    error.password = "Vui lòng nhập mật khẩu";
  } else if (password.trim() && password.length < 5) {
    error.password = "Mật khâu nhập phải từ 5 kí tự";
  }
  if (!email) {
    error.email = "Vui lòng nhập Email";
  }
  if (!fullname) {
    error.fullname = "Vui lòng nhập Tên đầy đủ";
  }
  if (!phonenumber) {
    error.phonenumber = "Vui lòng nhập Số điện thoại";
  }
  return error;
};
export default validate;
