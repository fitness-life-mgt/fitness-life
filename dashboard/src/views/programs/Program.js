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

function Program() {

  // Product ID
  const {id} = useParams();

  // Popup Dialogue
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [info, setInfo] = useState([]);
  const [dir, setDir] = useState([]);

  // Form Data
  const [pName, setPName] = useState("");
  const [pDesc, setPDesc] = useState("");

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
      const res = await Axios.post('http://localhost:8001/file/upload/program', formData, {
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

  // Get Program Information
  const getInfo = () => {
    Axios.get(`http://localhost:8001/programs/get?id=${id}`).then((response) => {
      setInfo(response.data);
      setPName(response.data[0].productName);
      setPDesc(response.data[0].description);
      setUploadedFile(response.data[0].imageUrl);
    });
  };

  const getDir = () => {
    Axios.get(`http://localhost:8001/file/dir`).then((response) => {
      setDir(response.data);
    });
  };


  // Update Product Information
  const updateProgram = () => {

      try {

        Axios.post("http://localhost:8001/programs/update", {
          pid: id,
          pName: pName,
          pDesc: pDesc,
          uploadedFile: uploadedFile,
        })
  
        setAddMessage({msg: 'Program Updated Successfully', type: 'primary'});
  
      } catch (err) {
        if (err.response.status === 500) {
          setAddMessage({msg: 'There was a problem with the server', type: 'danger'});
        } else {
          setAddMessage({msg: err.response.data.msg, type: 'danger'});
        }
      }
    
  };


  // Update Product Information
  const deleteProgram = () => {

    try {

      Axios.post("http://localhost:8001/program/delete", {
        pid: id,
      })

      setAddMessage({msg: 'Program Delated', type: 'primary'});

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

  console.log(pName);

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
                  <Card.Title as="h4">{val.productName}</Card.Title>
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
                        <p>Program Image</p>
                        
                        {message ? <Message msg={message.msg} type={message.type} /> : null}
                          {uploadPercentage == 0 ? (
                            <div className='row mt-3'>
                              <div className='col-md-12 m-auto'>
                                <Image className="mt-3 w-100" src={val.imageUrl} rounded />
                               
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
                        <label>Program Name</label>
                        {info.map((val, key) => {
                          return (
                            <Form.Control
                            defaultValue={val.programName}
                            type="text"
                            onChange={(event) => { setPName(event.target.value); }}
                          ></Form.Control>
                          );
                          })}
                      </Form.Group>
                      <Form.Group>
                        <label>Program Description</label>
                        {info.map((val, key) => {
                        return (
                          <Form.Control
                          defaultValue={val.description}
                          as="textarea"
                          onChange={(event) => { setPDesc(event.target.value); }}
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
                          Delete Program
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Delete the Program?</Modal.Title>
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
                          onClick={updateProgram}
                        >
                          Update Program
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

export default Program;
