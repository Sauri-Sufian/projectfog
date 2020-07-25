import React from 'react'
import {Table} from 'react-bootstrap'
const UserList=()=>{
    return(
        <div>
               <div>
               <div className='viewContent'>
        <h1 className='w-75 p-3'>Area List For Printing</h1>
        <div className='table1'>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Username</th>
      <th>Full Name</th>
      <th>Details</th>
      <th>Enabled</th>
      <th>Manage USer</th>
    </tr>
  </thead>
  <tbody> 
    <tr>
      <td>Demo4hotel</td>
      <td>Alvi Ahmed</td>
      <td> </td>
      <td>True</td>
      <td>True</td>
    </tr>
    <td>Demo14hotel</td>
      <td>Sovon Ahmed</td>
      <td> </td>
      <td>True</td>
      <td>True</td>
  </tbody>
  </Table>
  </div>
  </div>
        </div>

        </div>
    )
}

export default UserList;