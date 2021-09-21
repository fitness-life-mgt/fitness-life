import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import Message from '../upload/Message';

function Order() {

  // Order ID
  const {id} = useParams();

  const [info, setInfo] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [addMessage, setAddMessage] = useState({});

  const [tracking, setTracking] = useState([]);
  const [tStatus, setTStatus] = useState([]);

  // Get Order Information
  const getInfo = () => {
    Axios.get(`https://fitness-life-server.herokuapp.com/orders/get-order?id=${id}`).then((response) => {
      setInfo(response.data);
      setTracking(response.data[0].trackingNo);
      setTStatus(response.data[0].tStatus);
    });
  };

  // Get Product Information
  const getProductInfo = () => {
    Axios.get(`https://fitness-life-server.herokuapp.com/orders/get-order-products?id=${id}`).then((response) => {
      setProductInfo(response.data);
    });
  };

  // Update Product Information
  const updateTracking = () => {

    try {

      Axios.post("https://fitness-life-server.herokuapp.com/orders/update-order", {
        oid: id,
        tracking: tracking,
        tStatus: tStatus,
      })

      setAddMessage({msg: 'Tracking Updated Successfully', type: 'primary'});

    } catch (err) {
      if (err.response.status === 500) {
        setAddMessage({msg: 'There was a problem with the server', type: 'danger'});
      } else {
        setAddMessage({msg: err.response.data.msg, type: 'danger'});
      }
    }
  
};

  function totalAmount(){

    let r = 0;
    productInfo.map(({price, quantity}) => r = r + price*quantity);
    return r;
  }  

  const total = totalAmount();

  useEffect(() => {
    getInfo();
    getProductInfo();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
        <Row>
          <Col md="12">
            {addMessage ? <Message msg={addMessage.msg} type={addMessage.type} /> : null}
          </Col>
        </Row>
          <Col md="12">
            <Card>
              <Card.Header>
                {info.map((val, key) => {
                return (
                  <Card.Title as="h4">Order: #{val.orderId}</Card.Title>
                );
                })}
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Card>
                        <Card.Body>
                        <p><b>Product List</b></p>
                          {productInfo.map((val, key) => {
                          return (
                            <div>
                            <li>{val.productName} - Rs. {val.price} X {val.quantity}</li>
                            </div>
                          );
                          })}  
                        
                        <hr />
                        <p><b>Total: </b>Rs.{total}</p>
                        <hr />
                        <p><b>Deliver to:</b></p>
                        {info.map((val, key) => {
                        return (
                          <>
                          <p>{val.firstName + ' ' + val.lastName},</p>
                          <p>{val.address}</p>
                          </>
                        );
                        })}
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="pr-1" md="6">
                    <Card>
                      <Card.Body>
                        <Form.Group>
                          <label><b>Order Date</b></label>
                          {info.map((val, key) => {
                            const strip1 = val.orderDate;
                            const strip2 = strip1.split(/[T]/);
                          return (
                            <p>{strip2[0]}</p>
                          );
                          })}     
                        </Form.Group>
                        <Form.Group>
                        
                        {info.map((val, key) => {

                          let trackUrl = 'https://koombiyodelivery.lk/Track/track_id?' + val.trackingNo + '&phone=' + val.telephone;

                          return (
                            <>
                            <label><b>Tracking No</b> - <a href={trackUrl} target="_blank">Track Order</a></label>
                            <Form.Control
                            defaultValue={val.trackingNo}
                            placeholder="Tracking No"
                            type="text"
                            onChange={(event) => { setTracking(event.target.value); }}
                            ></Form.Control>
                            </>
                          );
                          })}
                        </Form.Group>
                        <Form.Group>
                          <label><b>Tracking Status</b></label>
                          {info.map((val, key) => {
                          return (
                            <Form.Control as="select" value={val.tStatus} onChange={(event) => { setTStatus(event.target.value); }}>
                              <option value="0">Pending for Dispatch</option>
                              <option value="1">Shipped</option>
                              <option value="2">Delivered</option>
                            </Form.Control>
                          );
                          })}                        
                        </Form.Group>
                      </Card.Body>
                    </Card>
                      
                    </Col>
                    </Row>
                    <Row>
                     <Col className="pr-1" md="12">
                        <Button
                          className="btn-fill pull-right"
                          variant="primary"
                          onClick={updateTracking}
                        >
                          Update Order
                        </Button>
                     </Col>
                    </Row>              
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Order;
