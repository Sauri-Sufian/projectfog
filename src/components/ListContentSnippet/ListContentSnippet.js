import React from 'react'
import {Table} from 'react-bootstrap'
const ListContentSnippet=()=>{
    return (
        <div>
               <div className='viewContent'>
        <h1 className='w-75 p-3'>Area List For Printing</h1>
        <div className='table1'>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      5f141862f22153553dc16e42
      </td>
      <td>header</td>
      <td>default header</td>
    </tr>
    <tr>
    <td>
    5f141862f22153553dc16e43
      </td>
      <td>footer</td>
      <td>default footer</td>
    </tr>
    <tr>
    <td>
    5f141862f22153553dc16e44
      </td>
      <td>Valid</td>
      <td>default Valid</td>
    </tr>
    <tr>
    <td>
    5f141863f22153553dc16e45
      </td>
      <td>invalid</td>
      <td>default invalid</td>
    </tr>
    
    
  </tbody>
  </Table>
  </div>
  </div>
        </div>
    )
}

export default ListContentSnippet;