import Dashboard from "views/Dashboard.js";
import Payments from "views/Payments.js";
import Members from "views/members/Members.js";
import Trainers from "views/trainers/Trainers.js";
import Shop from "views/shop/Shop.js";
import Settings from "views/Settings.js";
import Inventory from "views/Inventory";
import Workouts from "views/Workouts";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-chart-line",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/members",
    name: "Manage Members",
    icon: "fas fa-users",
    component: Members,
    layout: "/admin",
  },
  {
    path: "/trainers",
    name: "Manage Trainers",
    icon: "fas fa-id-card-alt",
    component: Trainers,
    layout: "/admin",
  },
  {
    path: "/shop",
    name: "Manage Shop",
    icon: "fas fa-store",
    component: Shop,
    layout: "/admin",
  },
  {
    path: "/inventory",
    name: "Inventory",
    icon: "fas fa-warehouse",
    component: Inventory,
    layout: "/admin",
  },
  {
    path: "/payments",
    name: "Payments",
    icon: "fas fa-credit-card",
    component: Payments,
    layout: "/admin",
  },
  {
    path: "/workouts",
    name: "Workouts",
    icon: "fas fa-dumbbell",
    component: Workouts,
    layout: "/admin",
  },
  {
    settings: true,
    path: "/settings",
    name: "Settings",
    icon: "fas fa-cog",
    component: Settings,
    layout: "/admin",
  },
];

export default dashboardRoutes;
