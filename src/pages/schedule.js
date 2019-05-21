import React from "react"
import { getProfile } from "../utils/auth"
import { isEmpty } from "../utils/utility"
import Layout from "../components/layout"
import {
  Form,
  Container,
  Button,
  Collapse,
  Card,
  ButtonGroup,
  ButtonToolbar,
  Row,
  Col,
} from "react-bootstrap"
import SEO from "../components/seo"
import {
  FaEdit,
  FaPlus,
  FaTrashAlt,
  FaGraduationCap,
  FaCloudversify,
  FaRegCalendarAlt,
  FaMinus,
} from "react-icons/fa"
import DatePicker from "react-datepicker"
import cbetClasses from "../classes/classes.json"
import "react-datepicker/dist/react-datepicker.css"
import newDoc from "../images/jc-gellidon-1386352-unsplashnew.jpg"
import styled from "styled-components"

const CardTitle = styled.section`
  min-height: 90px;
`

class Schedule extends React.Component {
  constructor(props) {
    super(props)

    const editModeClassesTest = cbetClasses.map(classcbet => false)
    const showClasses = cbetClasses.map(show => true)

    this.state = {
      classes: cbetClasses,
      editModeClasses: editModeClassesTest,
      showClasses: showClasses,
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
      case "start date":
        add.StartDate = e.target.value
        break
      case "end date":
        add.EndDate = e.target.value
        break
      case "registration close date":
        add.RegistrationCloseDate = e.target.value
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

  onClickMode(e, id, isSelected) {
    e.preventDefault()

    console.log("e", e.target, isSelected)
    const { editModeClasses } = this.state
    editModeClasses[id] = !editModeClasses[id]

    const { showClasses } = this.state

    // let newShowClasses = []
    // if (isSelected) {
    //   newShowClasses = showClasses.map((shown, index) => {
    //     return true
    //   })
    // } else {
    //   newShowClasses = showClasses.map((shown, index) => {
    //     if (id === index) {
    //       return false
    //     } else {
    //       return true
    //     }
    //   })
    // }

    this.setState({
      editModeClasses: editModeClasses,
      // showClasses: newShowClasses,
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
                variant={
                  this.state.isAddMode === false ? "primary" : "secondary"
                }
                style={{ marginLeft: "5px" }}
                type="sm"
                onClick={e => this.onClickAddClass(e)}
              >
                {this.state.isAddMode === false ? (
                  <>
                    <FaPlus /> Add Class
                  </>
                ) : (
                  <>
                    <FaMinus /> Hide Add Class
                  </>
                )}
              </Button>
            ) : null}
          </h1>

          {this.state.isAddMode === true && isEmpty(user) === false ? (
            <Collapse in={this.state.isAddMode}>
              <Form style={{ marginTop: "5px" }}>
                <h2>Add Class</h2>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    input="text"
                    required
                    style={{ width: "36%" }}
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
                    style={{ width: "36%" }}
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
                    style={{ width: "36%" }}
                    value={this.state.newClass.Format}
                    onChange={this.onChangeAdd}
                    placeholder="format"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label style={{ marginRight: "10px" }}>
                    Start Date
                  </Form.Label>
                  <br />

                  <DatePicker
                    selected={this.state.newClass.StartDate}
                    onChange={this.onChangeAdd}
                    placeholderText="start date"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label style={{ marginRight: "10px" }}>
                    End Date
                  </Form.Label>
                  <br />
                  <DatePicker
                    selected={this.state.newClass.EndDate}
                    onChange={this.onChangeAdd}
                    placeholderText="end date"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label style={{ marginRight: "10px" }}>
                    Registration Close Date
                  </Form.Label>
                  <br />

                  <DatePicker
                    selected={this.state.newClass.RegistrationCloseDate}
                    onChange={this.onChangeAdd}
                    placeholder="registration close date"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginBottom: "10px" }}
                >
                  Submit
                </Button>
              </Form>
            </Collapse>
          ) : (
            <Row>
              {/* TODO: FSP@sacoders frontend starts here */}
              {this.state.classes.map((cbetClass, index) => (
                <Col md={3}>
                  <Card
                    border="primary"
                    style={{
                      borderStyle:
                        this.state.editModeClasses[index] === false
                          ? "solid"
                          : "dashed",
                      borderWidth:
                        this.state.editModeClasses[index] === false
                          ? "thin"
                          : "medium",
                      width: "17rem",
                      padding: "4px",
                    }}
                    key={cbetClass.Id}
                    className="mb-5"
                  >
                    {isEmpty(user) === false ? (
                      <ButtonToolbar
                        aria-label="Toolbar with button groups"
                        style={{ height: "40px", marginBottom: "10px" }}
                      >
                        {/* {this.state.editModeClasses[index] === true ? ( */}
                        <ButtonGroup
                          aria-label="Basic example"
                          // className="mr-2"
                          size="sm"
                          style={{
                            // margin: "5px",
                            height: "40px",
                            margin: "0 auto",
                          }}
                          height={40}
                        >
                          <Button
                            variant={
                              this.state.editModeClasses[index]
                                ? "primary"
                                : "primary"
                            }
                            height={40}
                            size="sm"
                            disabled={
                              this.state.showClasses[index] === true
                                ? false
                                : true
                            }
                            style={{ height: "40px" }}
                            onClick={e =>
                              this.onClickMode(
                                e,
                                index,
                                this.state.editModeClasses[index]
                              )
                            }
                          >
                            <FaEdit />{" "}
                            {this.state.editModeClasses[index] === false
                              ? "Edit"
                              : "Live Preview"}
                          </Button>

                          <Button
                            variant="danger"
                            style={{ height: "40px" }}
                            size="sm"
                          >
                            <FaTrashAlt style={{ marginRight: "5px" }} />
                            Delete
                          </Button>
                        </ButtonGroup>
                        {/* ) : null} */}
                      </ButtonToolbar>
                    ) : null}
                    <Card.Img variant="top" src={newDoc} />
                    <Card.Body>
                      <CardTitle>
                        <Card.Title
                          className="text-uppercase"
                          style={{ color: "#2699FB", textAlign: "center" }}
                        >
                          {this.state.editModeClasses[index] === true ? (
                            <Form.Control
                              as="textarea"
                              required
                              value={cbetClass.Title}
                              style={{ textAlign: "center" }}
                            />
                          ) : (
                            cbetClass.Title
                          )}
                        </Card.Title>
                        <Card.Text
                          style={{ color: "#2699FB", textAlign: "center" }}
                        >
                          <FaRegCalendarAlt
                            size={24}
                            style={{ marginRight: "5px" }}
                          />
                          {this.state.editModeClasses[index] === true ? (
                            <DatePicker
                              selected={this.state.startDate}
                              onChange={this.handleChange}
                            />
                          ) : (
                            cbetClass.StartDate
                          )}
                        </Card.Text>
                      </CardTitle>
                    </Card.Body>
                    <Card.Footer style={{ background: "#004085" }}>
                      <Card.Text
                        style={{ color: "white", textAlign: "center" }}
                      >
                        Registration Deadline is{" "}
                        {this.state.editModeClasses[index] ? (
                          <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                          />
                        ) : (
                          <>{cbetClass.registrationCloseDate}</>
                        )}
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
                                  as="textarea"
                                  required
                                  value={cbetClass.Format}
                                  style={{ width: "100%" }}
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
                                  as="textarea"
                                  required
                                  value={cbetClass.Training}
                                  style={{ width: "100%", display: "inline" }}
                                />
                              ) : (
                                cbetClass.Training
                              )}
                            </Card.Text>
                          </Form.Group>
                        </li>
                      </ul>
                      <Button variant="primary" size="sm">
                        Learn More
                      </Button>
                      {this.state.editModeClasses[index] === true ? (
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={e => this.onSaveClass(e, cbetClass.Id)}
                          className="float-right"
                        >
                          Save
                        </Button>
                      ) : null}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </Layout>
    )
  }
}

export default Schedule
