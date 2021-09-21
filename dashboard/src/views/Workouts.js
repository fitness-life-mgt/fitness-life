import React from "react";
import { useState } from "react";
// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";

function Workouts() {

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Workout Programs</Card.Title>
              </Card.Header>
              <Card.Body>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Card>
                        <Card.Img variant="top" src={require("assets/img/im10.png").default} />
                        <Card.Body>
                          <Card.Title>Arm Workouts</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                          </Card.Text>
                          <Button variant="primary" className="pull-right">Edit Program</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Card>
                        <Card.Img variant="top" src={require("assets/img/im11.jpg").default} />
                        <Card.Body>
                          <Card.Title>Ab Workouts</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                          </Card.Text>
                          <Button variant="primary" className="pull-right">Edit Program</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Card>
                        <Card.Img variant="top" src={require("assets/img/im12.jpg").default} />
                        <Card.Body>
                          <Card.Title>Leg Workouts</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                          </Card.Text>
                          <Button variant="primary" className="pull-right">Edit Program</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>             
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Workouts</Card.Title>
              </Card.Header>
              <Card.Body>
                  <Row>
                    <Col className="pr-1" md="3">
                      <Card>
                        <Card.Img variant="top" src={require("assets/img/img.jpg").default} />
                        <Card.Body>
                          <Card.Title>Workout Name</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                          </Card.Text>
                          <Button variant="primary" className="pull-right">Edit Workout</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="pr-1" md="3">
                      <Card>
                        <Card.Img variant="top" src={require("assets/img/img.jpg").default} />
                        <Card.Body>
                          <Card.Title>Workout Name</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                          </Card.Text>
                          <Button variant="primary" className="pull-right">Edit Workout</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="pr-1" md="3">
                      <Card>
                        <Card.Img variant="top" src={require("assets/img/img.jpg").default} />
                        <Card.Body>
                          <Card.Title>Workout Name</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                          </Card.Text>
                          <Button variant="primary" className="pull-right">Edit Workout</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="pr-1" md="3">
                      <Card>
                        <Card.Img variant="top" src={require("assets/img/img.jpg").default} />
                        <Card.Body>
                          <Card.Title>Workout Name</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                          </Card.Text>
                          <Button variant="primary" className="pull-right">Edit Workout</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>             
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Workouts;
