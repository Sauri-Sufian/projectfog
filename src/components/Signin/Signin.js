import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap'
import './Signin.css'
class Signin extends Component{


    render(){ 
        const {onRouteChange}=this.props
    return (
      <div>
        <div>
        <div className='float' >
                <button
                 onClick={()=>onRouteChange('Signin')}
                 className='btn' >Signin/</button>
                <button
                onClick={()=>onRouteChange('Register')}
                className='btn'>Register</button>
            </div>
        </div>
        <div className='signin' >
          
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button
    onClick={()=>onRouteChange('home')}
  variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
        </div>
    )
    }
}

export default Signin;