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

function Member() {

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
    const [type, setType] = useState("");
    const [address, setAddress] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");

    const [message, setMessage] = useState({});
    const [addMessage, setAddMessage] = useState({});

    let emailValid = emailValidator(email);
    console.log(emailValid);

    // Get Trainer Information
    const getInfo = () => {
      Axios.get(`https://fitness-life-server.herokuapp.com/members/get?id=${id}`).then((response) => {
        setInfo(response.data);
        setFName(response.data[0].firstName);
        setLName(response.data[0].lastName);
        setEmail(response.data[0].email);
        setTelephone(response.data[0].telephone);
        setType(response.data[0].memberType);
        setAddress(response.data[0].address);
        setHeight(response.data[0].height);
        setWeight(response.data[0].weight);
        setAge(response.data[0].age);
      });
    };

    // Update Trainer Information
    const updateMember = () => {
  
        try {
  
          Axios.post("https://fitness-life-server.herokuapp.com/members/update", {
            mid: id,
            fName: fName,
            lName: lName,
            email: email,
            telephone: telephone,
            type: type,
            address: address,
            height: height,
            weight: weight,
            age: age,
          })
    
          setAddMessage({msg: 'Member Updated Successfully', type: 'primary'});
    
        } catch (err) {
          if (err.response.status === 500) {
            setAddMessage({msg: 'There was a problem with the server', type: 'danger'});
          } else {
            setAddMessage({msg: err.response.data.msg, type: 'danger'});
          }
        }
      
    };
  
  
    // Update Product Information
    const deleteMember = () => {
  
      handleClose();

      try {
  
        Axios.post("https://fitness-life-server.herokuapp.com/members/delete", {
          mid: id,
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
                        <Form.Control
                          defaultValue={fName}
                          placeholder="First Name"
                          type="text"
                          onChange={(event) => { setFName(event.target.value); }}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue={lName}
                          placeholder="Last Name"
                          type="text"
                          onChange={(event) => { setLName(event.target.value); }}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Email</label>
                          <Form.Control
                            defaultValue={email}
                            placeholder="Email"
                            type="email"
                            onChange={(event) => { setEmail(event.target.value); }}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Telephone</label>
                          <Form.Control
                            defaultValue={telephone}
                            type="text"
                            onChange={(event) => { setTelephone(event.target.value); }}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="12">
                        <Form.Group>
                          <label>Address</label>
                          <Form.Control
                            defaultValue={address}
                            type="textarea"
                            onChange={(event) => { setAddress(event.target.value); }}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                          <label>Member Type</label>
                            <Form.Control as="select" value={type} onChange={(event) => { setType(event.target.value); }}>
                              <option value="0">Virtual</option>
                              <option value="1">Physical</option>
                            </Form.Control>                     
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>Height (cm)</label>
                          <Form.Control
                            defaultValue={height}
                            type="number"
                            onChange={(event) => { setHeight(event.target.value); }}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>Weight (KG)</label>
                          <Form.Control
                            defaultValue={weight}
                            type="number"
                            onChange={(event) => { setWeight(event.target.value); }}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>Age</label>
                          <Form.Control
                            defaultValue={age}
                            type="number"
                            onChange={(event) => { setAge(event.target.value); }}
                          ></Form.Control>
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
                          Remove Member
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Remove the Member?</Modal.Title>
                          </Modal.Header>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={deleteMember}>
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
                          onClick={updateMember}
                        >
                          Update Member
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

export default Member;
