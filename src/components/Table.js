import React from 'react'
import { Table } from 'react-bootstrap'
import Example from './Modals'

function CustomTable({user, CustomData}) {
  console.log (CustomData)
  return (
    <div>
<Table striped>
  <thead>
    <tr>
      <th>#</th>
      <th>{user}</th>
      <th>Address</th>
      <th>Username</th>
      <th> Action</th>
    </tr>
  </thead>
  <tbody>
    {CustomData.map (ele =>  <tr>
      <td> {ele.id}</td>
      <td>{ele.name}</td>
      <td>{ele.address.city}</td>
      <td>@mdo</td>
      <td><Example/></td>
    </tr>
      )}
   
    
    
  </tbody>
</Table>

    </div>
  )
}

export default CustomTable