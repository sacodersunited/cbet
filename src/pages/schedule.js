import React from "react"
import { Link } from "gatsby"
import { getProfile } from "../utils/auth"
import { isEmpty } from "../utils/utility"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import Collapse from "react-bootstrap/Collapse"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import SEO from "../components/seo"
import {
  FaEdit,
  FaPlus,
  FaTrashAlt,
  FaGraduationCap,
  FaCloudversify,
  FaRegCalendarAlt,
} from "react-icons/fa"
import DatePicker from "react-datepicker"
import cbetClasses from "../classes/classes.json"
import "react-datepicker/dist/react-datepicker.css"
import newDoc from "../images/jc-gellidon-1386352-unsplashnew.jpg"

class Schedule extends React.Component {
  constructor(props) {
    super(props)

    const editModeClassesTest = cbetClasses.map(classcbet => false)

    this.state = {
      classes: cbetClasses,
      editModeClasses: editModeClassesTest,
      newClass: {
        Title: "",
        Training: "",
        Format: "",
        StartDate: "",
        EndDate: "",
        RegistrationCloseDate: "",
      },
      isEditMode: false,
      isAddMode: false,
      startDate: "",
      endDate: "",
      registrationCloseDate: "",
    }
    this.GetClasses = this.GetClasses.bind(this)
    this.onClickMode = this.onClickMode.bind(this)
    this.onClickAddClass = this.onClickAddClass.bind(this)
  }

  componentDidMount() {
    // this.GetClasses()
  }

  onChangeAdd(e) {
    e.preventDefault()

    let add = this.state.newClass

    switch (e.target.placeholder) {
      case "title":
        add.Title = e.target.value
        break
      case "training":
        add.Training = e.target.value
        break
      case "format":
        add.Format = e.target.value
        break
      case "start":
        add.StartDate = e.target.value
        break
      case "end":
        add.EndDate = e.target.value
        break
      default:
        break
    }

    this.setState({
      newClass: add,
    })
  }

  handleChange(e) {
    e.preventDefault()

    let startDateState = this.state.startDate
    startDateState = e.target.value

    this.setState({
      startDate: startDateState,
    })
  }

  onClickMode(e, id) {
    e.preventDefault()

    const { editModeClasses } = this.state
    editModeClasses[id] = !editModeClasses[id]

    this.setState({
      editModeClasses: editModeClasses,
    })
  }

  onClickAddClass(e) {
    e.preventDefault()

    let addMode = this.state.isAddMode

    this.setState({
      isAddMode: !addMode,
    })
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
    const user = getProfile()
    console.log("user", user)

    return (
      <Layout>
        <SEO title="Schedule" />
        <Container>
          <h1 style={{ marginTop: "50px", marginBottom: "50px" }}>
            UPCOMING CLASSES
            {isEmpty(user) === false ? (
              <Button
                variant="outline-primary"
                style={{ marginLeft: "5px" }}
                onClick={e => this.onClickAddClass(e)}
              >
                <FaPlus /> Add Class
              </Button>
            ) : null}
          </h1>
          {/* {isEmpty(user) === false ? <div>User is logged in</div> : null} */}

          {this.state.isAddMode === true && isEmpty(user) === false ? (
            <Collapse in={this.state.isAddMode}>
              <Form style={{ marginTop: "5px" }}>
                <h3>Add class</h3>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    input="text"
                    required
                    value={this.state.newClass.Title}
                    onChange={this.onChangeAdd}
                    placeholder="title"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Training</Form.Label>
                  <Form.Control
                    input="text"
                    required
                    value={this.state.newClass.Training}
                    onChange={this.onChangeAdd}
                    placeholder="training"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Format</Form.Label>
                  <Form.Control
                    input="text"
                    required
                    value={this.state.newClass.Format}
                    onChange={this.onChangeAdd}
                    placeholder="format"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label style={{ marginRight: "10px" }}>
                    Start Date
                  </Form.Label>
                  <DatePicker
                    selected={this.state.newClass.StartDate}
                    onChange={this.onChangeAdd}
                    placeholder="start"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label style={{ marginRight: "10px" }}>
                    End Date
                  </Form.Label>
                  <DatePicker
                    selected={this.state.newClass.EndDate}
                    onChange={this.onChangeAdd}
                    placeholder="end"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label style={{ marginRight: "10px" }}>
                    Registration Close Date
                  </Form.Label>
                  <DatePicker
                    selected={this.state.newClass.RegistrationCloseDate}
                    onChange={this.onChangeAdd}
                    placeholder="registration"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Collapse>
          ) : null}

          <CardDeck>
            {this.state.classes.map((cbetClass, index) => (
              <Card
                border="primary"
                style={{
                  borderStyle:
                    this.state.editModeClasses[index] === false
                      ? "solid"
                      : "dashed",
                  padding: "10px",
                  borderWidth:
                    this.state.editModeClasses[index] === false
                      ? "thin"
                      : "medium",
                }}
              >
                {isEmpty(user) === false ? (
                  <ButtonGroup
                    aria-label="Basic example"
                    style={{ margin: "5px" }}
                  >
                    <Button
                      variant={
                        this.state.editModeClasses[index]
                          ? "primary"
                          : "outline-secondary"
                      }
                      onClick={e => this.onClickMode(e, index)}
                    >
                      <FaEdit />{" "}
                      {this.state.editModeClasses[index] === false
                        ? "Edit Class " + cbetClass.Id
                        : "Live Preview"}
                    </Button>
                    <Button variant="outline-danger">
                      <FaTrashAlt style={{ marginRight: "5px" }} />
                      Delete
                    </Button>
                  </ButtonGroup>
                ) : null}
                <Card.Img variant="top" src={newDoc} height="300" />
                <Card.Body>
                  <Card.Title style={{ color: "blue", textAlign: "center" }}>
                    {this.state.editModeClasses[index] === true ? (
                      <Form.Control
                        value={cbetClass.Title}
                        style={{ textAlign: "center" }}
                      />
                    ) : (
                      cbetClass.Title
                    )}
                  </Card.Title>
                  <Card.Text style={{ color: "blue", textAlign: "center" }}>
                    <FaRegCalendarAlt />
                    {this.state.editModeClasses[index] === true ? (
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                      />
                    ) : (
                      cbetClass.StartDate
                    )}
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: "#004085" }}>
                  <Card.Text style={{ color: "white", textAlign: "center" }}>
                    Registration Deadline is 15 May
                  </Card.Text>
                </Card.Footer>
                <Card.Body>
                  <ul style={{ listStyle: "none", padding: "15px" }}>
                    <li style={{ padding: "8px" }}>
                      <Form.Group>
                        <Card.Text>
                          <FaCloudversify size={32} />
                          <strong>Format</strong>:{" "}
                          {this.state.editModeClasses[index] === true ? (
                            <Form.Control
                              input="text"
                              value={cbetClass.Format}
                              // style={{ width: "50%" }}
                            />
                          ) : (
                            cbetClass.Format
                          )}
                        </Card.Text>
                      </Form.Group>
                    </li>
                    <li style={{ padding: "8px" }}>
                      <Form.Group>
                        <Card.Text>
                          <FaGraduationCap size={32} />
                          <strong>Training</strong>:{" "}
                          {this.state.editModeClasses[index] === true ? (
                            <Form.Control
                              input="text"
                              value={cbetClass.Training}
                              style={{ width: "75%", display: "inline" }}
                            />
                          ) : (
                            cbetClass.Training
                          )}
                        </Card.Text>
                      </Form.Group>
                    </li>
                  </ul>
                  <Button variant="outline-primary" size="lg">
                    Learn More
                  </Button>
                  {this.state.editModeClasses[index] === true ? (
                    <Button
                      variant="outline-primary"
                      size="lg"
                      onClick={e => this.onSaveClass(e, cbetClass.Id)}
                      className="float-right"
                    >
                      Save
                    </Button>
                  ) : null}
                </Card.Body>
              </Card>

              // <Row style={{ paddingTop: "5px" }}>
              //   <Col>
              //     {isEmpty(user) === false ? (
              //       <>
              //         <Button
              //           variant={
              //             this.state.editModeClasses[index]
              //               ? "primary"
              //               : "secondary"
              //           }
              //           onClick={e => this.onClickMode(e, index)}
              //         >
              //           <FaEdit />{" "}
              //           {this.state.editModeClasses[index] === false
              //             ? "Edit Class " + cbetClass.Id
              //             : "Live Preview"}
              //         </Button>
              //         <Button variant="danger" style={{ marginLeft: "5px" }}>
              //           <FaTrashAlt style={{ marginRight: "5px" }} />
              //           Delete
              //         </Button>
              //       </>
              //     ) : null}

              //     <h2 style={{ marginTop: "5px" }}>
              //       {this.state.editModeClasses[index] === true ? (
              //         <input value={cbetClass.Title} style={{ width: "50%" }} />
              //       ) : (
              //         cbetClass.Title
              //       )}
              //     </h2>
              //     <ul>
              //       <li>
              //         Online Format:{" "}
              //         <span>
              //           {this.state.editModeClasses[index] === true ? (
              //             <input
              //               value={cbetClass.Format}
              //               style={{ width: "50%" }}
              //             />
              //           ) : (
              //             cbetClass.Format
              //           )}
              //         </span>
              //       </li>
              //       <li>
              //         Externship Hands-on Training:{" "}
              //         <span>
              //           {" "}
              //           {this.state.editModeClasses[index] === true ? (
              //             <input
              //               value={cbetClass.Training}
              //               style={{ width: "50%" }}
              //             />
              //           ) : (
              //             cbetClass.Training
              //           )}
              //         </span>
              //       </li>
              //       <li>
              //         Start Dates: Classes Forming now, secure your spot today!
              //         <ul>
              //           <li>
              //             {this.state.editModeClasses[index] === true ? (
              //               <DatePicker
              //                 selected={this.state.startDate}
              //                 onChange={this.handleChange}
              //               />
              //             ) : (
              //               cbetClass.StartDate
              //             )}
              //           </li>
              //           <li>{cbetClass.RegistrationCloseDate}</li>
              //         </ul>
              //       </li>
              //     </ul>
              //     {this.state.editModeClasses[index] === true ? (
              //       <Button onClick={e => this.onSaveClass(e, cbetClass.Id)}>
              //         Save
              //       </Button>
              //     ) : null}
              //   </Col>
              // </Row>
            ))}
          </CardDeck>
        </Container>
      </Layout>
    )
  }
}

export default Schedule
