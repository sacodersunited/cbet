import React from "react"
import { Container, Table } from "react-bootstrap"
import cbetClasses from "../classes/classes.json"

class ClassScheduler extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      classes: cbetClasses,
    }
    this.GetClasses = this.GetClasses.bind(this)
  }

  componentDidMount() {
    // this.GetClasses()
  }

  async GetClasses() {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "text/plain")

    const myInit = {
      method: "Get",
      headers: myHeaders,
    }

    try {
      const response = await fetch(
        // `https://cbetclasses.azurewebsites.net/api/GetCbetClasses?code=${
        //   this.props.code
        // }`,
        // "http://localhost:7071/api/GetCbetClasses",
        myInit
      )
      const data = await response.json()
      console.log("classes", data)
      this.setState({
        classes: data,
      })
    } catch (error) {
      console.log("error getClasses", error)
    }
  }

  render() {
    console.log("classes", this.state, this.props)
    return (
      <Container>
        <h1>Class scheduler</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Class Title</th>
              <th>Class Format</th>
              <th>Training</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Registration Close Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.classes.map(cbetClass => (
              <tr>
                <td>{cbetClass.Title}</td>
                <td>{cbetClass.Format}</td>
                <td>{cbetClass.Training}</td>
                <td>{cbetClass.StartDate}</td>
                <td>{cbetClass.EndDate}</td>
                <td>{cbetClass.RegistrationCloseDate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    )
  }
}

export default ClassScheduler
