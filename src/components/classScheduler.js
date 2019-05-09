import React from "react"
import { Container, Table } from "react-bootstrap"

const ClassScheduler = () => (
  <Container>
    <h1>Class scheduler</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Class Program</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </Container>
)

export default ClassScheduler
