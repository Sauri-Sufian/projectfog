import React from 'react';
import {Table}from 'react-bootstrap'
import './DisplayTable.css'
const DisplayTable=()=>{
    return(
        <div className='dt'>
            <div className='viewContent d'>
               <div className='tabled'>
              <div>
              <Table striped bordered hover>
  <thead>
    <tr>
      <th>Space Name</th>
      <th>Disinfection Date</th>
      <th>Sanitisation Date</th>
    </tr>
  </thead>
  </Table>
              </div>
              <div className='td2'>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Space Name</th>
      <th>Disinfection Date</th>
      <th>Sanitisation Date</th>
    </tr>
  </thead>
  <tbody className='ex'>
    
    <tr>
    <td>
        101
      </td>
    <td>
       
      </td>
    <td>
       
      </td>
      
    </tr>
    <tr>
    <td>
        102
      </td>
    <td>
        
      </td>
    <td>
        
      </td>
     
    </tr>
    <tr>
    <td>
        108
      </td>
    <td>
       
      </td>
    <td>
       
      </td>
      
    </tr>
    <tr>
    <td>
        205
      </td>
    <td>
        
      </td>
    <td>
        
      </td>
     
    </tr>
    <tr>
    <td>
        212
      </td>
    <td>
        
      </td>
    <td>
        
      </td>
     
    </tr>
    <tr>
    <td>
        333
      </td>
    <td>
        
      </td>
    <td>
        
      </td>
     
    </tr>
    <tr>
    <td>
        319
      </td>
    <td>
       
      </td>
    <td>
       
      </td>
     
    </tr>
  </tbody>
  </Table>
  </div>

        </div>
        
      </div>
        </div>
    )
}
export default DisplayTable;

//Space Name	Disinfection Date	Sanitisation Date