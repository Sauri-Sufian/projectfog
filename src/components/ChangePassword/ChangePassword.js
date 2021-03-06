import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap'
import './ChangePass.css'
class ChangePassword extends Component{ 
    render(){ 
        const {onRouteChange}=this.props
    return (
        <div>
            <div className='box'>
                <h2>Change Password Form</h2>
            <Form>
            <Form.Group controlId="formBasicPassword">
    <Form.Label>Current Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>New Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Retype new Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <button 
    onClick={()=>onRouteChange('home')}
  className="primary1 " type="submit">
    Change Password
  </button>
</Form>
            </div>
        </div>
    )
    }
}
    
export default ChangePassword;