import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { Redirect, useHistory, Link, useParams } from 'react-router-dom';
import passwordValidator from '../utils/passwordValidator';

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

function ResetPassword() {

  const {id} = useParams();
  console.log(id);

  const [password, setPassword] = useState([]);
  const [cPassword, setCPassword] = useState([]);
  const [addMessage, setAddMessage] = useState({});

  let passwordErr = passwordValidator(password, cPassword);

  const rPassword = () => {
    
    if(passwordErr == 0){
      try {
  
        Axios.post("https://fitness-life-server.herokuapp.com/reset/new-password", {
          password: password,
          rid: id,
        }).then((response => {
          setAddMessage({msg: response.data.message, type: response.data.type});
          console.log(response.data);
        }))
  
      } catch (err) {
        if (err.response.status === 500) {
          setAddMessage({msg: 'There was a problem with the server', type: 'danger'});
        } else if (err.response.status === 400) {
          setAddMessage({msg: 'Email Already Exists', type: 'danger'});
        } else {
          setAddMessage({msg: err.response.data.msg, type: 'danger'});
        }
      }
  
    } else if (passwordErr == 1){
      setAddMessage({msg: 'Password length should be more than 6 characters', type: 'danger'});
    } else {
      setAddMessage({msg: 'Passwords do not match', type: 'danger'});
    }

  };

  


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="login-card">
              <Card.Header>
                <Card.Title as="h4" className="text-center">Set New Password</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pl-1" md="12">
                      <Form.Group className="login-form">
                        <label>New Password</label>
                        <Form.Control
                          type="password"
                          onChange={(e)=>{setPassword(e.target.value);}}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pl-1" md="12">
                      <Form.Group className="login-form">
                        <label>Confirm Password</label>
                        <Form.Control
                          type="password"
                          onChange={(e)=>{setCPassword(e.target.value);}}
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
                            onClick={rPassword}
                          >
                            Set New Password
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

export default ResetPassword;
