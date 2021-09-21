import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Button,
  Image,
} from "react-bootstrap";

function Inventory() {

  const [productList, setProductList] = useState([]);
  const [outStock, setOutStock] = useState([]);

  const getProductList = () => {
    Axios.get("https://fitness-life-server.herokuapp.com/product/getlist").then((response) => {
      setProductList(response.data);
    });
  };

  const getOutStock = () => {
    Axios.get("https://fitness-life-server.herokuapp.com/product/out-stock").then((response) => {
      setOutStock(response.data);
    });
  };

  useEffect(() => {
    getProductList();
    getOutStock();
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
                    <i className="fas fa-shipping-fast"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Out of Stock Products</p>
                      <Card.Title as="h4">13</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
          </Col>
          <Col lg="6" sm="6">
            <Link to="/admin/add-product">
              <Button
                className="btn-fill pull-right"
                variant="primary"
              >
                Add New Product
              </Button>
            </Link>
          </Col>
        </Row>
        
        <Row>

          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">All Products</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0"><i class="fas fa-image"></i> Image</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">ID</th>
                      <th className="border-0">Stock #</th>
                      <th className="border-0">Price (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((val, key) => {
                        return (
                          <tr>
                            <td className="thumbnail"><Image src={val.imageUrl} /></td>
                            <td><Link to={'/admin/product/' + val.productID}>{val.productName}</Link></td>
                            <td>{val.productID}</td>
                            <td>{val.quantity}</td>
                            <td>{val.price}</td>
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
                <Card.Title as="h4">Out of Stock</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0"><i class="fas fa-image"></i> Image</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">ID</th>
                      <th className="border-0">Stock #</th>
                      <th className="border-0">Price (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {outStock.map((val, key) => {
                        return (
                          <tr>
                            <td className="thumbnail"><Image src={val.imageUrl} /></td>
                            <td><Link to={'/admin/product/' + val.productID}>{val.productName}</Link></td>
                            <td>{val.productID}</td>
                            <td>{val.quantity}</td>
                            <td>{val.price}</td>
                          </tr>
                        );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Inventory;
