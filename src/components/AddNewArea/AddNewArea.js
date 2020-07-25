import React, { Component } from 'react'

import './AddNewArea.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class AddNewArea extends Component{
    render(){ 
        const {onRouteChange}=this.props
    return (
        <div className='main'>
            
        <div className='addContent'>
        <h1>Create Space</h1>
        <p>
        Please enter the number of new areas you would like to create (max 100). The platform will generate tags for your request 
        </p>
        </div>
        <div>
            <label className='ar'>Number of areas*</label>
            <input type='text'></input>
            <br></br>
            <button onClick={()=>onRouteChange('home')} className='btn add ar'>Create</button>
        </div>
        </div>
        )
    }
}

export default AddNewArea;
       