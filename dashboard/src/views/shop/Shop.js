import React from "react";
import { Link } from 'react-router-dom';

import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Button,
} from "react-bootstrap";

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

function Shop() {

  const [pOrderList, setPOrderList] = useState([]);
  const [dOrderList, setDOrderList] = useState([]);
  const [cOrderList, setCOrderList] = useState([]);

  const getPOrders = () => {
    Axios.get("https://fitness-life-server.herokuapp.com/orders/pending").then((response) => {
      setPOrderList(response.data);
      console.log(response.data);
    });
  };

  const getDOrders = () => {
    Axios.get("https://fitness-life-server.herokuapp.com/orders/delivery").then((response) => {
      setDOrderList(response.data);
      console.log(response.data);
    });
  };

  const getCOrders = () => {
    Axios.get("https://fitness-life-server.herokuapp.com/orders/complete").then((response) => {
      setCOrderList(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getPOrders();
    getDOrders();
    getCOrders();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-hand-holding-usd"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <Card.Title as="h4">Rs 139,000</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last 30 days
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-store"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">New Orders</p>
                      <Card.Title as="h4">15</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i className="far fa-calendar-alt mr-1"></i>
                  Today
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                    <i className="fas fa-shipping-fast"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Pending Shipment</p>
                      <Card.Title as="h4">13</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i className="far fa-calendar-alt mr-1"></i>
                  Last 7 days
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                    <i className="fas fa-dolly-flatbed"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Out of Stock Products</p>
                      <Card.Title as="h4">25</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i className="far fa-arrow-alt-circle-right"></i>
                <Link to="/admin/inventory" >Manage Inventory</Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>

          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Orders - Pending Shipment</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">Order ID</th>
                      <th className="border-0">Customer Email</th>
                      <th className="border-0">Order Date</th>
                      <th className="border-0">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pOrderList.map((val, key) => {
                      return (
                        <tr>
                          <td>{val.orderID}</td>
                          <td>{val.email}</td>
                          <td>{val.orderDate}</td>
                          <td>{val.amount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Orders - Pending Delivery</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">Order ID</th>
                      <th className="border-0">Customer Email</th>
                      <th className="border-0">Order Date</th>
                      <th className="border-0">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                  {dOrderList.map((val, key) => {
                      return (
                        <tr>
                          <td>{val.orderID}</td>
                          <td>{val.email}</td>
                          <td>{val.orderDate}</td>
                          <td>{val.amount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Completed Orders</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">Order ID</th>
                      <th className="border-0">Customer Email</th>
                      <th className="border-0">Order Date</th>
                      <th className="border-0">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cOrderList.map((val, key) => {
                      return (
                        <tr>
                          <td>{val.orderID}</td>
                          <td>{val.email}</td>
                          <td>{val.orderDate}</td>
                          <td>{val.amount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                <Link to="/admin/orders/completed">
                  <Button>View More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Shop;
