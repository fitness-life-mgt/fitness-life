import React from "react";
import ChartistGraph from "react-chartist";
import {
  Card,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

function Payments() {

  const [payroll, setPayroll] = useState([]);

  const getPayroll = () => {
    Axios.get("https://fitness-life-server.herokuapp.com/payments/payroll").then((response) => {
      setPayroll(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getPayroll();
  }, []);

  function findTotalPayroll(){

    let t = 0;
    payroll.map(({salary, overtime, hours}) => t = t + salary + overtime*hours)
    return t;
  }  

  const totalPayroll = findTotalPayroll();

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
                      <p className="card-category">Gym Revenue</p>
                      <Card.Title as="h4">Rs 459,000</Card.Title>
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
                      <i className="fas fa-tags"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Store Revenue</p>
                      <Card.Title as="h4">Rs 239,000</Card.Title>
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
                    <i className="fas fa-wallet"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Payroll Amount</p>
                      <Card.Title as="h4">227,000.00</Card.Title>
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
                    <i className="fas fa-calendar-day"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Payroll Due</p>
                      <Card.Title as="h4">2021/07/31</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i className="far fa-arrow-alt-circle-right"></i>
                  View More
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Gym Revenue</Card.Title>
                <p className="card-category">Past 7 Days</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "21",
                        "22",
                        "23",
                        "24",
                        "25",
                        "26",
                        "27",
                      ],
                      series: [
                        [5000, 10000, 7500, 15000, 20000, 18000, 8000, 25000],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 30000,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: false,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 5 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Store Revenue</Card.Title>
                <p className="card-category">Past 7 Days</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "21",
                        "22",
                        "23",
                        "24",
                        "25",
                        "26",
                        "27",
                      ],
                      series: [
                        [11000, 8000, 5000, 8900, 12000, 10000, 25000, 16000],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 30000,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: false,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 5 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Payroll - Due on 2021/07/31</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Trainer ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Basic Amount</th>
                      <th className="border-0">Add-on</th>
                      <th className="border-0">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payroll.map((val, key) => {

                      const overtime = val.overtime * val.hours;
                      const total = val.salary + overtime;

                      return (
                        <tr>
                          <td>{val.trainerId}</td>
                          <td>{val.firstName} {val.lastName}</td>
                          <td>{val.salary}</td>
                          <td>{overtime}</td>
                          <td>{total}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                <p className="pull-right">Total Payout Due: Rs. {totalPayroll}</p>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Payments;
