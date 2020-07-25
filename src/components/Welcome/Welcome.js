import React, { Component } from 'react'
import logo from '../images/im8Logo.png'
import './Welcome.css'

class Welcome extends Component{

  render(){ 
      const {onRouteChange}=this.props
    return(
        <div className='welcome'>
            <div>
                <img alt='im8Logo' src={logo}></img>
            </div>
            <div className='floatw' >
                <button
                 onClick={()=>onRouteChange('Signin')}
                 className='btn' >Signin/</button>
                <button
                onClick={()=>onRouteChange('Register')}
                className='btn'>Register</button>
            </div>
            <div className='message'>
            <h2> <p>Welcome to im8 Dashboard</p></h2>
                <h5>Please login to access your account. If you don't have an account, please <a href='#'>contact our sales team</a></h5>
                
            </div>
        </div>
    )
  }
}

export default Welcome;