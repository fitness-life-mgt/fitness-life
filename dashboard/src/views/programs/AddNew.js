import React, { useState } from 'react';
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
} from "react-bootstrap";

function ProgramAddNew() {
  
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

// Add Product Function

  const addProgram = () => {

    if (uploadPercentage === 0){
      setAddMessage({msg: 'Please upload a product image before saving.', type: 'danger'});
    }else{
      try {

        Axios.post("http://localhost:8001/programs/add", {
          pName: pName,
          pDesc: pDesc,
          uploadedFile: uploadedFile,
        })
  
        setAddMessage({msg: 'Program Added Successfully', type: 'primary'});
  
      } catch (err) {
        if (err.response.status === 500) {
          setAddMessage({msg: 'There was a problem with the server', type: 'danger'});
        } else {
          setAddMessage({msg: err.response.data.msg, type: 'danger'});
        }
      }
    }
    
  };

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
                <Card.Title as="h4">Add New Workout Program</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <p>Workout Program Image</p>
                          {message ? <Message msg={message.msg} type={message.type} /> : null}
                          {uploadedFile ? (
                            <div className='row mt-3'>
                              <div className='col-md-12 m-auto'>
                                <Image style={{ width: '100%' }} src={uploadedFile.filePath} rounded/>
                              </div>
                            </div>
                          ) : null}
                          <input type='file' id='customFile' onChange={onChange} className="mt-3" />
                          <Progress percentage={uploadPercentage} />
                          <Button onClick={onSubmit} value='Upload' className="mt-3 w-100">Upload Image</Button>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Workout Program Name</label>
                        <Form.Control
                          placeholder="Workout Program Name"
                          type="text"
                          onChange={(event) => { setPName(event.target.value); }}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Program Description</label>
                        <Form.Control
                          placeholder="Program Description"
                          as="textarea"
                          onChange={(event) => { setPDesc(event.target.value); }}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                     <Col className="pr-1" md="12">
                        <Button className="btn-fill pull-right" variant="primary" onClick={addProgram} >
                          Publish Workout Program
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

export default ProgramAddNew;
