import Login from "views/Login.js";
import Reset from "views/Reset.js";
import ResetPassword from "views/ResetPassword";

const loginRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "fas fa-user",
    component: Login,
    layout: "/misc",
  },
  {
    path: "/reset",
    name: "Reset",
    icon: "fas fa-user",
    component: Reset,
    layout: "/misc",
  },
  {
    path: "/rpassword/:id",
    name: "Reset Password",
    icon: "fas fa-user",
    component: ResetPassword,
    layout: "/misc",
  },
];

export default loginRoutes;
