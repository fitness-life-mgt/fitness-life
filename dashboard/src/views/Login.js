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

function Login() {

  const history = useHistory();
	
	const [username, setUsername] = useState([]);
	const [password, setPassword] = useState([]);
	
	const[loginStatus,setLoginStatus]=useState([]);

  console.log(loginStatus);

  if (loginStatus == "admin"){
    history.push("/admin/dashboard")
  }

	Axios.defaults.withCredentials=true;

	const login = () => {
    Axios.post("https://fitness-life-server.herokuapp.com/login/admin", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get("https://fitness-life-server.herokuapp.com/login/admin").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="login-card">
              <Card.Header>
                <Card.Title as="h4" className="text-center">Login to the Manager's Dashboard</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pl-1" md="12">
                      <Form.Group className="login-form">
                        <p>{loginStatus}</p>
                        <label>Username</label>
                        <Form.Control
                          placeholder="Business Email"
                          type="text"
                          onChange={(e)=>{setUsername(e.target.value);}}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                      <Col className="pl-1" md="12">
                        <Form.Group className="login-form">
                          <label>Password</label>
                          <Form.Control
                            placeholder="Password"
                            type="password"
                            onChange={(e)=>{setPassword(e.target.value);}}
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
                            onClick={login}
                          >
                            Login
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pl-1" md="12">
                        <Form.Group className="login-form">
                          <Link to="/misc/reset">Forgot Password?</Link>
                        </Form.Group>
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

export default Login;
