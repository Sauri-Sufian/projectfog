import React from 'react'
import {Form, Button,Col} from 'react-bootstrap'
const AddUser=({onRouteChange})=>{
    return(
        <div>
        <div className='box'>
            <Form>
            <Form.Row>
    <Form.Group as={Col} controlId="formGridText">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter Username" />
    </Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridpassword">
      <Form.Label>password</Form.Label>
      <Form.Control type="password" placeholder="Enter password" />
    </Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridText">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Full Name" />
    </Form.Group>
  </Form.Row>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Enabled" />
  </Form.Group>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Manager" />
  </Form.Group>
  
            </Form>
            <Button
    onClick={()=>onRouteChange('home')}
  variant="secondary" type="submit">
    Create
  </Button>
        </div>
        </div>
    )
}

export default AddUser;