const express = require("express");
const Router = express.Router();
var db = require('../config/connection');


Router.get("/pending", (req, res) => {
  db.query("SELECT o.orderID, o.email, o.orderDate, py.amount FROM `Order` o, payment py WHERE o.orderID = py.orderID AND o.tStatus = 0", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

Router.get("/delivery", (req, res) => {
    db.query("SELECT o.orderID, o.email, o.orderDate, py.amount FROM `Order` o, payment py WHERE o.orderID = py.orderID AND o.tStatus = 1", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });
  
  Router.get("/complete", (req, res) => {
    db.query("SELECT o.orderID, o.email, o.orderDate, py.amount FROM `Order` o, payment py WHERE o.orderID = py.orderID AND o.tStatus = 2 LIMIT 20", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  }); 

  Router.get("/complete-all", (req, res) => {
    db.query("SELECT o.orderID, o.email, o.orderDate, py.amount FROM `Order` o, payment py WHERE o.orderID = py.orderID AND o.tStatus = 2", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  }); 
  
  Router.get("/new", (req, res) => {
    db.query("SELECT COUNT(*) AS 'count' FROM `order` WHERE orderDate >= DATE(NOW()) - INTERVAL 7 DAY", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  Router.get("/revenue", (req, res) => {
    db.query("SELECT amount FROM `payment` WHERE dateTime >= DATE(NOW()) - INTERVAL 30 DAY", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  Router.get("/graph/revenue", (req, res) => {
    db.query("SELECT date(o.orderDate),sum(p.price*o.quantity) FROM product p,`order` o WHERE p.productID=o.productID GROUP BY date(orderDate)", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  Router.get("/graph/total-shop", (req, res) => {
    db.query("SELECT (DATE(NOW()) - INTERVAL `day` DAY) AS `DayDate`, SUM(payment.amount) AS 'count' FROM (SELECT 0 AS `day` UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6) AS `week` LEFT JOIN `payment` ON DATE(`dateTime`) = (DATE(NOW()) - INTERVAL `day` DAY) GROUP BY `DayDate` ORDER BY `DayDate` ASC", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  Router.get("/graph/total-gym", (req, res) => {
    db.query("SELECT (DATE(NOW()) - INTERVAL `day` DAY) AS `DayDate`, SUM(subscription.amount) AS 'count' FROM (SELECT 0 AS `day` UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6) AS `week` LEFT JOIN `subscription` ON DATE(`date`) = (DATE(NOW()) - INTERVAL `day` DAY) GROUP BY `DayDate` ORDER BY `DayDate` ASC", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  Router.get("/graph/sales", (req, res) => {
    db.query("SELECT (DATE(NOW()) - INTERVAL `day` DAY) AS `DayDate`, COUNT(orderid) AS 'count' FROM (SELECT 0 AS `day` UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6) AS `week` LEFT JOIN `order` ON DATE(`orderDate`) = (DATE(NOW()) - INTERVAL `day` DAY) GROUP BY `DayDate` ORDER BY `DayDate` ASC", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  Router.get("/get-order", (req, res) => {
    var queryParams = req.query;
    console.log(queryParams);
    db.query("SELECT o.orderId, o.trackingNo, o.tStatus, o.orderDate, o.email, m.address, m.firstName, m.lastName, m.telephone FROM `order` o, member m WHERE o.email = m.email AND orderId = ?", [queryParams.id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  Router.get("/get-order-products", (req, res) => {
    var queryParams = req.query;

    db.query("SELECT p.productName, p.price, o.quantity FROM orderproducts o, product p WHERE p.productID = o.productID AND orderID = ?", [queryParams.id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  Router.post("/update-order", (req, res) => {
    const oid = req.body.oid
    const tracking = req.body.tracking;
    const tStatus = req.body.tStatus;
  
    db.query(
      "UPDATE `order` SET trackingNo=?, tStatus=? WHERE orderID=?",
      [tracking, tStatus, oid],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Updated Successfully");
        }
      }
    );
  });

  Router.get("/testing", (req, res) => {
    res.send("Hello there");
  });


module.exports = Router;