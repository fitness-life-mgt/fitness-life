import React, { Component, useState } from "react";
import Axios from 'axios';
import { useLocation, Route, Switch, useHistory } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";

import routes from "routes.js";
import Product from "views/shop/Product";
import AllTrainers from "views/trainers/AllTrainers";
import Trainer from "views/trainers/Trainer";
import Workout from "views/Workout";
import TrainerAddNew from "views/trainers/AddNew";
import CompleteOrders from "views/shop/CompleteOrders";
import ProductAddNew from "views/shop/AddNew";
import Program from "views/Program";
import FileUpload from "views/upload/FileUpload";
import Order from "views/shop/Order";
import Member from "views/members/Member";
import MemberAddNew from "views/members/AddNew";

function Admin() {
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }

  }, [location]);

  return (
    <>
      <div className="wrapper">
        <Sidebar routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Switch>
              {getRoutes(routes)}
              <Route path="/admin/product/:id" exact component={Product}></Route>
              <Route path="/admin/add-product" exact component={ProductAddNew}></Route>
              <Route path="/admin/alltrainers" exact component={AllTrainers}></Route>
              <Route path="/admin/trainer/:id" exact component={Trainer}></Route>
              <Route path="/admin/member/:id" exact component={Member}></Route>
              <Route path="/admin/add-trainer" exact component={TrainerAddNew}></Route>
              <Route path="/admin/add-member" exact component={MemberAddNew}></Route>
              <Route path="/admin/workout" exact component={Workout}></Route>
              <Route path="/admin/orders/completed" exact component={CompleteOrders}></Route>
              <Route path="/admin/order/:id" exact component={Order}></Route>
              <Route path="/admin/program" exact component={Program}></Route>
              <Route path="/admin/upload" exact component={FileUpload}></Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Admin;
