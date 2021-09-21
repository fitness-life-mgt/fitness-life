import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { Redirect, useHistory, Link } from 'react-router-dom';

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import Message from './upload/Message';

function Reset() {

  const [email, setEmail] = useState([]);
  const [addMessage, setAddMessage] = useState({});

  const resetLink = () => {
    Axios.post("https://fitness-life-server.herokuapp.com/reset/", {
      email: email,
    }).then((response => {
      setAddMessage({msg: response.data.message, type: response.data.type});
      console.log(response.data);
    }))

  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="login-card">
              <Card.Header>
                <Card.Title as="h4" className="text-center">Reset Password</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pl-1" md="12">
                      <Form.Group className="login-form">
                        <label>Enter Your Email</label>
                        <Form.Control
                          placeholder="Business Email"
                          type="text"
                          onChange={(e)=>{setEmail(e.target.value);}}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                      <Col className="pl-1" md="12">
                        <Form.Group className="login-form">
                          <Button
                            className="btn-fill login-btn"
                            variant="primary"
                            onClick={resetLink}
                          >
                            Send Reset Link
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        {addMessage ? <Message msg={addMessage.msg} type={addMessage.type} /> : null}
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

export default Reset;
