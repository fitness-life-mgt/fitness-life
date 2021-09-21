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

function ProductAddNew() {
  
  // Form Data
  const [pName, setPName] = useState("");
  const [pDesc, setPDesc] = useState("");
  const [pQuantity, setPQuantity] = useState("");
  const [pPrice, setPPrice] = useState("");

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
      const res = await Axios.post('https://fitness-life-server.herokuapp.com/file/upload', formData, {
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

  const addProduct = () => {

    if (uploadPercentage === 0){
      setAddMessage({msg: 'Please upload a product image before saving.', type: 'danger'});
    }else{
      try {

        Axios.post("https://fitness-life-server.herokuapp.com/product/add", {
          pName: pName,
          pDesc: pDesc,
          pQuantity: pQuantity,
          pPrice: pPrice,
          uploadedFile: uploadedFile,
        })
  
        setAddMessage({msg: 'Product Added Successfully', type: 'primary'});
  
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
                <Card.Title as="h4">Add New Product</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <p>Product Image</p>
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
                        <label>Product Name</label>
                        <Form.Control
                          placeholder="Product Name"
                          type="text"
                          onChange={(event) => { setPName(event.target.value); }}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Product Description</label>
                        <Form.Control
                          placeholder="Product Description"
                          as="textarea"
                          onChange={(event) => { setPDesc(event.target.value); }}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Quantity</label>
                        <Form.Control
                          placeholder="0"
                          type="number"
                          onChange={(event) => { setPQuantity(event.target.value); }}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Price</label>
                        <Form.Control
                          placeholder="0.00"
                          type="number"
                          onChange={(event) => { setPPrice(event.target.value); }}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                     <Col className="pr-1" md="12">
                        <Button className="btn-fill pull-right" variant="primary" onClick={addProduct} >
                          Publish Product
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

export default ProductAddNew;
