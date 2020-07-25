import React from 'react'
import {Table, Button} from 'react-bootstrap';
const AreaListPrint=()=>{
  return(
    <div>
      <div className='viewContent'>
        <h1 className='w-75 p-3'>Area List For Printing</h1>
        <div className='table1'>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Include To Printfile</th>
      <th>Area Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <input type='checkbox'></input>
      </td>
      <td>Select All</td>
    </tr>
    <tr>
    <td>
        <input type='checkbox'></input>
      </td>
      <td>101</td>
    </tr>
    <tr>
    <td>
        <input type='checkbox'></input>
      </td>
      <td>102</td>
    </tr>
    <tr>
    <td>
        <input type='checkbox'></input>
      </td>
      <td>108</td>
    </tr>
    <tr>
    <td>
        <input type='checkbox'></input>
      </td>
      <td>205</td>
    </tr>
    <tr>
    <td>
        <input type='checkbox'></input>
      </td>
      <td>212</td>
    </tr>
    <tr>
    <td>
        <input type='checkbox'></input>
      </td>
      <td>333</td>
    </tr>
    <tr>
    <td>
        <input type='checkbox'></input>
      </td>
      <td>319</td>
    </tr>
  </tbody>
  </Table>

        </div>
        <Button variant="success">Download Print File (CSV)</Button>
      </div>
    </div>
  )
}

export default AreaListPrint;