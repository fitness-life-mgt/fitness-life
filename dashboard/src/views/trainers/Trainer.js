import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import Message from '../upload/Message';
import emailValidator from "utils/validators/emailValidator";

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Modal,
} from "react-bootstrap";

function Trainer() {

    // Trainer ID
    const {id} = useParams();

    // Popup Dialogue
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [info, setInfo] = useState([]);
  
    // Form Data
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [salary, setSalary] = useState("");
  
    const [message, setMessage] = useState({});
    const [addMessage, setAddMessage] = useState({});

    let emailValid = emailValidator(email);
    console.log(emailValid);

    // Get Trainer Information
    const getInfo = () => {
      Axios.get(`http://localhost:3001/trainers/get?id=${id}`).then((response) => {
        setInfo(response.data);
        setFName(response.data[0].firstName);
        setLName(response.data[0].lastName);
        setEmail(response.data[0].email);
        setTelephone(response.data[0].telephone);
        setSalary(response.data[0].salary);
      });
    };

    // Update Trainer Information
    const updateTrainer = () => {
  
        try {
  
          Axios.post("http://localhost:3001/trainers/update", {
            tid: id,
            fName: fName,
            lName: lName,
            email: email,
            salary: salary,
          })
    
          setAddMessage({msg: 'Trainer Updated Successfully', type: 'primary'});
    
        } catch (err) {
          if (err.response.status === 500) {
            setAddMessage({msg: 'There was a problem with the server', type: 'danger'});
          } else {
            setAddMessage({msg: err.response.data.msg, type: 'danger'});
          }
        }
      
    };
  
  
    // Update Product Information
    const deleteTrainer = () => {
  
      handleClose();

      try {
  
        Axios.post("http://localhost:3001/trainers/delete", {
          tid: id,
        }).then((response => {
          setAddMessage({msg: response.data.message, type: response.data.type});
          console.log(response.data);
        }))
  
      } catch (err) {
        if (err.response.status === 500) {
          setAddMessage({msg: 'There was a problem with the server', type: 'danger'});
        } else {
          setAddMessage({msg: err.response.data.msg, type: 'danger'});
        }
      }
      
    };
  
  
    useEffect(() => {
      getInfo();
    }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            {addMessage ? <Message msg={addMessage.msg} type={addMessage.type} /> : null}
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                {info.map((val, key) => {
                  return (
                    <Card.Title as="h4">{val.firstName + ' ' + val.lastName}</Card.Title>
                  );
                })}
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        {info.map((val, key) => {
                          return (
                        <Form.Control
                          defaultValue={val.firstName}
                          placeholder="First Name"
                          type="text"
                          onChange={(event) => { setFName(event.target.value); }}
                        ></Form.Control>
                          )
                        })}
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        {info.map((val, key) => {
                          return (
                        <Form.Control
                          defaultValue={val.lastName}
                          placeholder="Last Name"
                          type="text"
                          onChange={(event) => { setLName(event.target.value); }}
                        ></Form.Control>
                          )
                        })}
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Email</label>
                          {info.map((val, key) => {
                            return (
                          <Form.Control
                            defaultValue={val.email}
                            placeholder="Email"
                            type="email"
                            onChange={(event) => { setEmail(event.target.value); }}
                          ></Form.Control>
                            )
                          })}
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Salary (Rs)</label>
                          {info.map((val, key) => {
                            return (
                          <Form.Control
                            defaultValue={val.salary}
                            placeholder="30000.00"
                            type="number"
                            onChange={(event) => { setSalary(event.target.value); }}
                          ></Form.Control>
                            )
                          })}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                          <label>Telephone</label>
                          {info.map((val, key) => {
                            return (
                          <Form.Control
                            defaultValue={val.telephone}
                            placeholder="Telephone"
                            type="text"
                            onChange={(event) => { setTelephone(event.target.value); }}
                          ></Form.Control>
                            )
                          })}
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                     <Col className="pr-1" md="12">
                      <Button
                          className="btn-fill"
                          variant="danger"
                          onClick={handleShow}
                        >
                          Remove Trainer
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Remove the Trainer?</Modal.Title>
                          </Modal.Header>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={deleteTrainer}>
                              Yes
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                              No
                            </Button>
                          </Modal.Footer>
                        </Modal>

                        <Button
                          className="btn-fill pull-right"
                          variant="primary"
                          onClick={updateTrainer}
                        >
                          Update Trainer
                        </Button>
                     </Col>
                    </Row>              
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            {addMessage ? <Message msg={addMessage.msg} type={addMessage.type} /> : null}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Trainer;
