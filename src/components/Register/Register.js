import React, { Component } from 'react';
import {Form,Col,Button} from 'react-bootstrap'
import './Register.css'
class Register extends Component{


    render(){ 
        const {onRouteChange}=this.props
    return (
        <div>
            <div>
            <div>
        <div className=' up' >
                <button
                 onClick={()=>onRouteChange('Signin')}
                 className='btn' >Signin/</button>
                <button
                onClick={()=>onRouteChange('Register')}
                className='btn'>Register</button>
            </div>
            </div>
            </div>
            <div className='register'>
            <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridtext">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text"  />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridtext">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text"  />
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridtext">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="text"  />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridtext">
      <Form.Label>Company Name</Form.Label>
      <Form.Control type="text"  />
    </Form.Group>
  </Form.Row>


  <Form.Group controlId="formGridAddress1">
    <Form.Label>Company Address</Form.Label>
    <Form.Control  />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control />
  </Form.Group>
  <Form.Row>
  <Form.Group controlId="formGridAddress2">
    <Form.Label>Country</Form.Label>
    <Form.Control  />
  </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group id="formGridfile">
  <Form.Label>Company Logo</Form.Label>
    <Form.Check type="file"  />
  </Form.Group>
  </Form.Row>
       
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="I am not a robot " />
  </Form.Group>
  


  <button 
    onClick={()=>onRouteChange('home')}
  className="primary " type="submit">
    Submit
  </button>
</Form>

            </div>
        </div>
    )
    }
}

export default Register;