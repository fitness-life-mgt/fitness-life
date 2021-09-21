import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
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

  const [programList, setProgramList] = useState([]);
  const [workoutList, setWorkoutList] = useState([]);

  const getProgramList = () => {
    Axios.get("http://localhost:8001/programs/getlist").then((response) => {
      setProgramList(response.data);
    });
  };

  const getWorkoutList = () => {
    Axios.get("http://localhost:8001/workouts/getlist").then((response) => {
      setWorkoutList(response.data);
    });
  };

  useEffect(() => {
    getProgramList();
    getWorkoutList();
  }, []);

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
                  {programList.map((val, key) => {
                        return (
                    <Col className="pr-1" md="4">
                      <Card>
                        <Card.Img variant="top" src={val.imageUrl} />
                        <Card.Body>
                          <Card.Title>{val.programName}</Card.Title>
                          <Card.Text>
                          {val.description}
                          </Card.Text>
                          <Button variant="primary" className="pull-right">Edit Program</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    );
                  })}
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
                  {workoutList.map((val, key) => {
                        return (
                    <Col className="pr-1" md="3">
                      <Card>
                        <Card.Img variant="top" src={val.image} />
                        <Card.Body>
                          <Card.Title>{val.workoutName}</Card.Title>
                          <Card.Text>
                          {val.description}
                          </Card.Text>
                          <Button variant="primary" className="pull-right">Edit Workout</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    );
                  })}
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
