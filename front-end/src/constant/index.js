import DefaultPage from "../containers/DefaultPage/DefaultPage";
import LoginPage from "../containers/LoginPage";
import Admin from "../components/Admin";
import ShopGrid from "../containers/ShopGrid/ShopGrid";
import DetailsPage from "../containers/DetailsPage";
import SignUpPage from "../containers/SignupPage/SignUpPage";
import ContactPage from "../containers/ContactPage";
import CartPage from "../containers/CartPage";
import CheckOutPage from "../containers/CheckOutPage";
import SuccessPage from "../containers/SuccessPage";
import UpdateProductPage from "../containers/UpdateProductPage";
export const ROUTES = [
  {
    path: "/",
    component: DefaultPage,
    exact: true,
    name: "Trang chủ",
  },
  {
    path: "/products",
    component: ShopGrid,
    exact: false,
    name: "Shop Grid",
  },
  {
    path: "/details",
    component: DetailsPage,
    exact: false,
    name: "Chi tiết",
  },
  {
    path: "/update/user",
    component: SignUpPage,
    exact: true,
    name: "Cập nhật",
  },
  {
    path: "/contact",
    component: ContactPage,
    exact: true,
    name: "Liên kết",
  },
  {
    path: "/cart",
    component: CartPage,
    exact: true,
    name: "Cửa hàng",
  },
  {
    path: "/checkout",
    component: CheckOutPage,
    exact: true,
    name: "Kiểm tra",
  },
  {
    path: "/success",
    component: SuccessPage,
    exact: true,
    name: "Thành công",
  },
];
export const LOGINROUTE = [
  {
    path: "/login",
    component: LoginPage,
    exact: false,
    name: "Đăng nhập",
  },
  {
    path: "/signup",
    component: SignUpPage,
    exact: false,
    name: "Đăng kí",
  },
];
export const ADMINROUTES = [
  {
    path: "/",
    component: DefaultPage,
    exact: true,
    name: "Trang chủ",
  },
  {
    path: "/admin",
    component: Admin,
    exact: true,
    name: "Trang chính",
  },
  {
    path: "/products",
    component: ShopGrid,
    exact: false,
    name: "Shop Grid",
  },
  {
    path: "/details",
    component: DetailsPage,
    exact: false,
    name: "Chi tiết",
  },
  {
    path: "/update/user",
    component: SignUpPage,
    exact: true,
    name: "Cập nhật",
  },
  {
    path: "/contact",
    component: ContactPage,
    exact: true,
    name: "Liên kết",
  },
  {
    path: "/cart",
    component: CartPage,
    exact: true,
    name: "Cửa hàng",
  },
  {
    path: "/success",
    component: SuccessPage,
    exact: true,
    name: "Thành công",
  },
  {
    path: "/checkout",
    component: CheckOutPage,
    exact: true,
    name: "Kiểm tra",
  },
  {
    path: "/update/product",
    component: UpdateProductPage,
    exact: false,
    name: "Cập nhật hàng hóa",
  },
];
export const API_URL = "http://localhost:8080";
export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
  BAD_REQUEST: 400,
};
