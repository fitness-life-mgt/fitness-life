import React from "react";
import { Link } from "react-router-dom";

// react-bootstrap components
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

function Trainers() {

  const [attendance, setAttendance] = useState([]);
  const [totalTrainers, setTotalTrainers] = useState([]);
  const [appointments, setAppointments] = useState([]);

const getAttendance = () => {
  Axios.get("http://localhost:3001/trainers/attendance").then((response) => {
    setAttendance(response.data);
  });
};

const getTotalTrainers = () => {
  Axios.get("http://localhost:3001/trainers/total").then((response) => {
    setTotalTrainers(response.data);
  });
};

const getAppointments = () => {
  Axios.get("http://localhost:3001/trainers/appointments").then((response) => {
    setAppointments(response.data);
  });
};

let totalAppointments = 0;

appointments.map((val, key) => {
  totalAppointments =+ val.count;
})

useEffect(() => {
  getAttendance();
  getTotalTrainers();
  getAppointments();
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
                      <i className="fas fa-walking"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Number of Trainers</p>
                      
                        {attendance.map((val, key) => {
                        return (
                          <Card.Title as="h4">{val.count}</Card.Title>
                        );
                        })}

                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  Available Today
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
                      <i className="fas fa-calendar-day"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">No. of Appointments</p>
                      <Card.Title as="h4">{totalAppointments}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
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
                      <i className="fas fa-dumbbell"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Trainers</p>
                      <Card.Title as="h4">45</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Link to="/admin/add-trainer">
              <Button
                className="btn-fill pull-right"
                variant="primary"
              >
                Add New Trainer
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All Registered Trainers</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Trainer ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">E-mail</th>
                      <th className="border-0">Telephone</th>
                      <th className="border-0">Available Today</th>
                    </tr>
                  </thead>
                  <tbody>
                    {totalTrainers.map((val, key) => {

                      console.log(val.attendance);
                      let atd = "";
                      val.attendance == null ? atd="fas fa-circle text-danger" : atd="fas fa-circle text-success";
                      return (
                        <tr>
                          <td>{val.trainerId}</td>
                          <td><Link to={'/admin/trainer/' + val.trainerId}>{val.firstName + ' ' + val.lastName}</Link></td>
                          <td>{val.email}</td>
                          <td>{val.telephone}</td>
                          <td><i className={atd}></i></td>
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
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Appointments Today</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Trainer ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">No of Appointments today</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((val, key) => {
                      return (
                        <tr>
                          <td>{val.trainerId}</td>
                          <td>{val.firstName} {val.lastName}</td>
                          <td>{val.count}</td>
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

export default Trainers;
