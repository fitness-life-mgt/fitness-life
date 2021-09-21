import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import Message from '../upload/Message';
import Progress from '../upload/Progress';

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Image,
  Modal,
  Alert,
} from "react-bootstrap";

function Workout() {

  // Product ID
  const {id} = useParams();

  // Popup Dialogue
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [info, setInfo] = useState([]);
  const [dir, setDir] = useState([]);

  // Form Data
  const [wName, setWName] = useState("");
  const [wDesc, setWDesc] = useState("");
  const [duration, setDuration] = useState("");

  // Image Upload
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState({});
  const [addMessage, setAddMessage] = useState({});
  const [uploadPercentage, setUploadPercentage] = useState(0);

  // Image Upload Function

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await Axios.post('http://localhost:8001/file/upload/workout', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage({msg: 'File Uploaded', type: 'primary'});
    } catch (err) {
      if (err.response.status === 500) {
        setMessage({msg: 'There was a problem with the server', type: 'danger'});
      } else {
        setMessage({msg: err.response.data.msg, type: 'danger'});
      }
      setUploadPercentage(0)
    }
  };

  // Get Product Information
  const getInfo = () => {
    Axios.get(`http://localhost:8001/workouts/get?id=${id}`).then((response) => {
      setInfo(response.data);
      setWName(response.data[0].productName);
      setWDesc(response.data[0].description);
      setDuration(response.data[0].quantity);
      setUploadedFile(response.data[0].image);
    });
  };

  const getDir = () => {
    Axios.get(`http://localhost:8001/file/dir`).then((response) => {
      setDir(response.data);
    });
  };


  // Update Product Information
  const updateWorkout = () => {

      try {

        Axios.post("http://localhost:8001/workouts/update", {
          wid: id,
          wName: wName,
          wDesc: wDesc,
          duration: duration,
          uploadedFile: uploadedFile,
        })
  
        setAddMessage({msg: 'Workout Updated Successfully', type: 'primary'});
  
      } catch (err) {
        if (err.response.status === 500) {
          setAddMessage({msg: 'There was a problem with the server', type: 'danger'});
        } else {
          setAddMessage({msg: err.response.data.msg, type: 'danger'});
        }
      }
    
  };


  // Delete Workout
  const deleteWorkout = () => {

    try {

      Axios.post("http://localhost:8001/workouts/delete", {
        wid: id,
      })

      setAddMessage({msg: 'Workout Delated', type: 'primary'});

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
    getDir();
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
                  <Card.Title as="h4">{val.workoutName}</Card.Title>
                );
                })}
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                    {info.map((val, key) => {
                    return (
                      <Form.Group>
                        <p>Workout Image</p>
                        
                        {message ? <Message msg={message.msg} type={message.type} /> : null}
                          {uploadPercentage == 0 ? (
                            <div className='row mt-3'>
                              <div className='col-md-12 m-auto'>
                                <Image className="mt-3 w-100" src={val.image} rounded />
                               
                              </div>
                            </div>
                          ) : (
                            <div className='row mt-3'>
                              <div className='col-md-12 m-auto'>
                                <Image style={{ width: '100%' }} src={uploadedFile.filePath} rounded/>
                              </div>
                            </div>
                          )}
                          <input type='file' id='customFile' onChange={onChange} className="mt-3" />
                          <Progress percentage={uploadPercentage} />
                          <Button onClick={onSubmit} value='Upload' className="mt-3 w-100">Update Image</Button>
                      </Form.Group>
                    );
                    })}
                      
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Workout Name</label>
                        {info.map((val, key) => {
                          return (
                            <Form.Control
                            defaultValue={val.workoutName}
                            type="text"
                            onChange={(event) => { setWName(event.target.value); }}
                          ></Form.Control>
                          );
                          })}
                      </Form.Group>
                      <Form.Group>
                        <label>Workout Description</label>
                        {info.map((val, key) => {
                        return (
                          <Form.Control
                          defaultValue={val.description}
                          as="textarea"
                          onChange={(event) => { setWDesc(event.target.value); }}
                        ></Form.Control>
                        );
                        })}
                        
                      </Form.Group>
                      <Form.Group>
                        <label>Duration</label>
                        {info.map((val, key) => {
                        return (
                          <Form.Control
                          defaultValue={val.duration}
                          type="text"
                          onChange={(event) => { setDuration(event.target.value); }}
                        ></Form.Control>
                        );
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
                          Delete Workout
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Delete the Workout?</Modal.Title>
                          </Modal.Header>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
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
                          onClick={updateWorkout}
                        >
                          Update Workout
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

export default Workout;
