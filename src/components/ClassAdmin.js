import React from "react"
import { isEmpty, ToShortDate, ToStartDate } from "../utils/utility"
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
  Alert,
  Spinner,
  DropdownButton,
  Dropdown,
  Badge,
  ListGroup,
} from "react-bootstrap"
import {
  FaEdit,
  FaPlus,
  FaTrashAlt,
  FaGraduationCap,
  FaCloudversify,
  FaRegCalendarAlt,
  FaMinus,
  FaDatabase,
  FaRegThumbsUp,
} from "react-icons/fa"
import DatePicker from "react-datepicker"
// Uncomment in Local dev
import cbetClasses from "../classes/classes.json"
import "react-datepicker/dist/react-datepicker.css"
import newDoc from "../images/jc-gellidon-1386352-unsplashnew.jpg"
import itDefaultImage from "../images/bmet-tech.jpg"
import styled from "styled-components"

const CardTitle = styled.section`
  min-height: 90px;
`

class ClassAdmin extends React.Component {
  constructor(props) {
    super(props)

    // uncomment for local dev
    const editModeClassesTest = Array.from(
      Array(cbetClasses.length),
      () => false
    )

    console.log("classes", cbetClasses)
    this.state = {
      // Local dev requires cbClasses from json file above
      // Staging/Production leave as blank array
      classes: cbetClasses, // main classes pulled in from azure db
      // editModeClasses: [], // used in PROD only, show/hide each card in UI
      editModeClasses: editModeClassesTest, // Used in Local Dev only
      newClass: {
        // used for Adding a new class card
        Title: "",
        Training: "",
        Format: "",
        StartDate: "",
        EndDate: "",
        RegistrationCloseDate: "",
        Type: "Insert",
        ProgramSelected: "",
        IsActive: false,
      },
      editClass: {
        // used for the current Edited class
        Id: 0,
        Title: "",
        Training: "",
        Format: "",
        StartDate: "",
        EndDate: "",
        RegistrationCloseDate: "",
        Type: "Update",
        ProgramSelected: "",
        IsActive: false,
      },
      isEditMode: false, // show Edit mode UI
      isAddMode: false, // show Add Mode UI(hides all cards and only add form shows)
      validated: false, // validation for the Add Mode
      showAddMessage: false, // Show the Success alert Add message
      showEditSaveMessage: false, // Show the Success alert Edit message
      showDeleteMessage: false, // Show the Success alert Edit message
      showErrorMessage: false, // Show the Error alert message
      programSelected: "",
    }

    this.GetClasses = this.GetClasses.bind(this)
    this.onClickMode = this.onClickMode.bind(this)
    this.onClickAddClass = this.onClickAddClass.bind(this)
    this.onSaveClass = this.onSaveClass.bind(this)
    this.handleChangeRegDate = this.handleChangeRegDate.bind(this)
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this)
    this.handleAddNewClass = this.handleAddNewClass.bind(this)
    this.onChangeAdd = this.onChangeAdd.bind(this)
    this.onChangeAddStartDate = this.onChangeAddStartDate.bind(this)
    this.onChangeAddEndDate = this.onChangeAddEndDate.bind(this)
    this.onChangeAddRegDate = this.onChangeAddRegDate.bind(this)
    this.onClickDelete = this.onClickDelete.bind(this)
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this)
    this.onHandleEdit = this.onHandleEdit.bind(this)
    this.handleError = this.handleError.bind(this)
    this.onDropdownProgram = this.onDropdownProgram.bind(this)
    this.onClickActive = this.onClickActive.bind(this) // Click on active | disabled in Edit mode
    this.onDropdownProgramAdd = this.onDropdownProgramAdd.bind(this)
  }

  componentDidMount() {
    // Comment this out in Local dev
    // this.GetClasses().then(() => {
    //   this.setState({
    //     editModeClasses: this.state.classes.map(elem => false),
    //   })
    // })
  }

  onClickActive(e) {
    console.log("e", e.target.checked)
    let newEditClass = this.state.editClass

    newEditClass.isActive = e.target.checked

    this.setState({
      editClass: newEditClass,
    })
  }

  onDropdownProgramAdd(e) {
    console.log("add e dropdown", e.target.text)
    // if (e.target.text) {
    //   console.log("found text", e.target.text)
    //   let program = this.state.newClass
    //   program.IsActive = e.target.text
    //   this.setState({
    //     programSelected: program,
    //   })
    // } else {
    //   console.log("not found text")
    // }
  }

  // Edit Select Program
  onDropdownProgram(e, currentClassIndexInStateClass) {
    // If text is present then set the program selected
    if (e.target.text) {
      const editProgram = this.state.editClass
      const stateClasses = this.state.classes

      stateClasses[currentClassIndexInStateClass].ProgramSelected =
        e.target.text

      editProgram.ProgramSelected = e.target.text
      this.setState({
        editClass: editProgram,
        classes: stateClasses,
      })
    }
  }

  handleError() {
    this.setState({
      showErrorMessage: false,
    })
  }

  onClickDelete(e, deleteClass) {
    console.log("click delete", deleteClass)

    let cloneDeleteClass = JSON.parse(JSON.stringify(deleteClass))
    cloneDeleteClass["Type"] = "Delete"
    console.log("clone", cloneDeleteClass)
    this.setState({
      showDeleteMessage: true,
    })

    this.PostClasses(cloneDeleteClass)
      .then(() => this.GetClasses())
      .then(() => {
        this.setState({
          editModeClasses: this.state.classes.map(elem => false),
        })
      })
  }

  onHandleEdit(e, inputType) {
    const classEdit = this.state.editClass

    switch (inputType) {
      case "title":
        classEdit.Title = e.target.value
        break
      case "format":
        classEdit.Format = e.target.value
        break
      case "training":
        classEdit.Training = e.target.value
        break
      default:
        break
    }

    this.setState({
      editClass: classEdit,
    })
  }

  handleAddNewClass(e) {
    const form = e.currentTarget
    console.log("add New validate", form.checkValidity())
    if (form.checkValidity() === true) {
      e.preventDefault()
      e.stopPropagation()
    }

    this.setState({
      showAddMessage: true,
      validated: true,
    })

    setTimeout(() => {
      this.setState({
        isAddMode: false,
      })
    }, 3000)

    // Call insert class POST
    console.log("insert class obj", this.state.newClass)
    this.PostClasses(this.state.newClass).then(() =>
      this.GetClasses().then(() => {
        this.setState({
          editModeClasses: this.state.classes.map(elem => false),
          validated: false,
          showAddMessage: false,
          newClass: {
            Title: "",
            Training: "",
            Format: "",
            RegistrationCloseDate: "",
            EndDate: "",
            StartDate: "",
            Type: "Insert",
          },
        })
      })
    )
  }

  onChangeAdd(e) {
    e.preventDefault()

    let add = this.state.newClass

    console.log("onChangeAdd", e.target.placeholder)
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

      default:
        break
    }

    this.setState({
      newClass: add,
    })
  }

  onSaveClass(e) {
    e.preventDefault()

    this.setState({
      showEditSaveMessage: true,
    })
    // Make call to POST with editClass from state
    this.PostClasses(this.state.editClass)
      .then(() => this.GetClasses())
      .then(() => {
        this.setState({
          showEditSaveMessage: false,
        })
      })
  }

  onChangeAddStartDate(startDate) {
    const startDtClass = this.state.newClass

    startDtClass.StartDate = startDate

    this.setState({
      newClass: startDtClass,
    })
  }

  onChangeAddEndDate(endDate) {
    const endDtClass = this.state.newClass

    endDtClass.EndDate = endDate

    this.setState({
      newClass: endDtClass,
    })
  }

  onChangeAddRegDate(regDate) {
    const regDtClass = this.state.newClass

    regDtClass.RegistrationCloseDate = regDate

    this.setState({
      newClass: regDtClass,
    })
  }

  handleChangeStartDate(classDate) {
    let startDateStateClass = this.state.editClass

    startDateStateClass.StartDate = classDate

    this.setState({
      editClass: startDateStateClass,
    })
  }

  handleChangeEndDate(endDate) {
    let endDateStateClass = this.state.editClass

    endDateStateClass.EndDate = endDate

    this.setState({
      editClass: endDateStateClass,
    })
  }

  handleChangeRegDate(regDate) {
    let registrationDateClass = this.state.editClass

    registrationDateClass.RegistrationCloseDate = regDate

    this.setState({
      editClass: registrationDateClass,
    })
  }

  onClickMode(e, index) {
    e.preventDefault()

    const { editModeClasses, editClass } = this.state
    // Toggle EditMode for picked class
    editModeClasses[index] = !editModeClasses[index]

    // Get Class information and put it in the EditClass
    editClass.Id = this.state.classes[index].Id
    editClass.Title = this.state.classes[index].Title
    editClass.Format = this.state.classes[index].Format
    editClass.Training = this.state.classes[index].Training
    editClass.StartDate = new Date(this.state.classes[index].StartDate)
    editClass.EndDate = new Date(this.state.classes[index].EndDate)
    editClass.RegistrationCloseDate = new Date(
      this.state.classes[index].RegistrationCloseDate
    )
    editClass.Type = "Update"

    this.setState({
      editModeClasses: editModeClasses,
      editClass: editClass,
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
    myHeaders.append("Content-Type", "application/json")

    const myInit = {
      method: "Get",
      headers: myHeaders,
    }

    try {
      const response = await fetch(
        `https://cbetclasses.azurewebsites.net/api/GetCbetClasses?code=${
          this.props.code
        }`,
        myInit
      )
      const data = await response.json()
      console.log("classes have been refreshed", data)

      this.setState({
        classes: data,
      })
    } catch (error) {
      console.log("error getClasses", error)
    }
  }

  async PostClasses(classObj) {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "text/plain")

    const myInit = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(classObj),
    }

    try {
      const response = await fetch(
        `https://cbetclasses.azurewebsites.net/api/GetCbetClasses?code=${
          this.props.code
        }`,
        myInit
      )
      console.log("POST back resp", response)

      // Determine Post type
      if (classObj.Type === "Update") {
        console.log("Update POST")

        setTimeout(() => {
          console.log("timeout done update post")

          if (response.status !== 200) {
            this.setState({
              showErrorMessage: true,
            })
          }

          this.setState({
            showEditSaveMessage: false,
            editModeClasses: this.state.classes.map(elem => false),
          })
        }, 3000)
      } else if (classObj.Type === "Delete") {
        console.log("Delete POST")

        setTimeout(() => {
          console.log("timeout done delete post")

          if (response.status !== 200) {
            this.setState({
              showErrorMessage: true,
            })
          }
        }, 6000)
      } else if (classObj.Type === "Insert") {
        console.log("Insert POST")

        setTimeout(() => {
          console.log("timeout done Insert post")

          // Check if POST failed and show error message
          if (response.status !== 200) {
            this.setState({
              showErrorMessage: true,
            })
          }
        }, 6000)
      }
    } catch (error) {
      console.log("error PostClasses", error)
      this.setState({
        showErrorMessage: true,
      })
    }
  }

  render() {
    console.log(this.state)
    if (this.state.classes.length === 0) {
      return (
        <div style={{ padding: "10px" }}>
          <Spinner animation="border" variant="primary" />
          <h4 style={{ display: "inline", marginLeft: "5px" }}>Loading...</h4>
        </div>
      )
    }

    return (
      <Container>
        <h1 style={{ marginTop: "50px", marginBottom: "50px" }}>
          UPCOMING CLASSES
          {isEmpty(this.props.user) === false ? (
            <Button
              variant={this.state.isAddMode === false ? "primary" : "secondary"}
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

        {/* Delete and Error Message Alerts */}
        <Alert show={this.state.showDeleteMessage} variant="success">
          <Alert.Heading>
            <FaRegThumbsUp style={{ marginRight: "5px" }} />
            Class deleted!
          </Alert.Heading>
        </Alert>
        <Alert show={this.state.showErrorMessage} variant="danger">
          <Alert.Heading>
            <FaDatabase style={{ marginRight: "5px" }} />
            Error occurred on CBET Database Save.
          </Alert.Heading>
          <p>
            Please try again, if error continues contact CBET Admin for
            assistance
          </p>
          <div className="d-flex justify-content-end">
            <Button onClick={this.handleError} variant="danger">
              Close me!
            </Button>
          </div>
        </Alert>

        {/* If isAddMode eq true AND there is a User present then show ADD mode */}
        {this.state.isAddMode === true && isEmpty(this.props.user) === false ? (
          <Collapse in={this.state.isAddMode}>
            <Form
              style={{ marginTop: "5px" }}
              onSubmit={e => this.handleAddNewClass(e)}
              validated={this.state.validated}
            >
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
                  onChange={this.onChangeAddStartDate}
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
                  onChange={this.onChangeAddEndDate}
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
                  onChange={this.onChangeAddRegDate}
                  placeholderText="registration close date"
                />
              </Form.Group>

              <Form.Group>
                <DropdownButton
                  drop="right"
                  variant="primary"
                  title="Select Program"
                  id={`dropdown-button-drop-add`}
                  key={`dropdown-button-drop-add-key1`}
                  style={{ marginBottom: "10px", minWidth: "146px" }}
                  width="142px"
                  className="d-inline-block"
                  onClick={e => this.onDropdownProgramAdd(e)}
                >
                  <Dropdown.Item eventKey="1">CBET</Dropdown.Item>
                  <Dropdown.Item eventKey="2">I.T.</Dropdown.Item>
                </DropdownButton>
                <h4 style={{ display: "inline" }}>
                  <Badge
                    variant="light"
                    className="float-right"
                    style={{ marginTop: "5px" }}
                  >
                    {this.state.newClass.IsActive}
                  </Badge>
                </h4>
              </Form.Group>

              <Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginBottom: "10px" }}
                  inline
                >
                  Submit
                </Button>
                <Alert show={this.state.showAddMessage} variant="success">
                  <Alert.Heading>
                    <FaRegThumbsUp size={24} style={{ marginRight: "5px" }} />
                    Success!
                  </Alert.Heading>
                </Alert>
              </Form.Group>
            </Form>
          </Collapse>
        ) : null}

        <Row>
          {/* All Classes from Azure, Map over all */}
          {this.state.classes.map((cbetClass, index) => {
            if (cbetClass.IsActive || isEmpty(this.props.user) === false) {
              return (
                <Col md={3} key={cbetClass.Id + index}>
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
                    {/* Edit and Delete Buttons */}
                    {isEmpty(this.props.user) === false ? (
                      <ButtonToolbar
                        aria-label="Toolbar with button groups"
                        style={{
                          height: "40px",
                          marginBottom: "10px",
                          marginTop: "5px",
                        }}
                      >
                        <ButtonGroup
                          aria-label="Basic example"
                          size="sm"
                          style={{
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
                            style={{ height: "40px" }}
                            onClick={e => this.onClickMode(e, index)}
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
                            onClick={e => this.onClickDelete(e, cbetClass)}
                          >
                            <FaTrashAlt style={{ marginRight: "5px" }} />
                            Delete
                          </Button>
                        </ButtonGroup>
                      </ButtonToolbar>
                    ) : null}

                    {cbetClass.ProgramSelected === "BMET" ? (
                      <Card.Img variant="top" src={newDoc} />
                    ) : (
                      <Card.Img
                        variant="top"
                        src={itDefaultImage}
                        style={{ minHeight: "207px" }}
                      />
                    )}

                    <Card.Body>
                      {/* Select Program type which enables different Image to load per program */}
                      {this.state.editModeClasses[index] === true ? (
                        <>
                          <DropdownButton
                            drop="right"
                            variant="primary"
                            title="Select Program"
                            id={`dropdown-button-drop-${index}`}
                            key={index}
                            style={{
                              marginBottom: "10px",
                              minWidth: "146px",
                            }}
                            width="142px"
                            className="d-inline-block"
                            onClick={e => this.onDropdownProgram(e, index)}
                          >
                            <Dropdown.Item eventKey="1">BMET</Dropdown.Item>
                            <Dropdown.Item eventKey="2">I.T.</Dropdown.Item>
                          </DropdownButton>
                          <h4 style={{ display: "inline" }}>
                            <Badge
                              variant="dark"
                              className="float-right"
                              style={{ marginTop: "5px" }}
                            >
                              {cbetClass.ProgramSelected}
                            </Badge>
                          </h4>
                        </>
                      ) : null}
                      <CardTitle>
                        <Card.Title
                          className="text-uppercase"
                          style={{ color: "#2699FB", textAlign: "center" }}
                        >
                          {this.state.editModeClasses[index] === true ? (
                            <Form.Control
                              as="textarea"
                              required
                              value={this.state.editClass.Title}
                              style={{ textAlign: "center" }}
                              onChange={e => this.onHandleEdit(e, "title")}
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
                            style={{
                              marginRight: "5px",
                              marginBottom: "5px",
                            }}
                          />
                          {this.state.editModeClasses[index] === true ? (
                            <DatePicker
                              selected={this.state.editClass.StartDate}
                              onChange={this.handleChangeStartDate}
                              placeholderText="class start date"
                              required
                            />
                          ) : (
                            ToStartDate(new Date(cbetClass.StartDate))
                          )}
                        </Card.Text>
                        {this.state.editModeClasses[index] === true ? (
                          <Card.Text
                            style={{ color: "#2699FB", textAlign: "center" }}
                          >
                            <FaRegCalendarAlt
                              size={24}
                              style={{
                                marginRight: "5px",
                                marginBottom: "5px",
                              }}
                            />
                            <DatePicker
                              selected={this.state.editClass.EndDate}
                              onChange={this.handleChangeEndDate}
                              placeholderText="class end date"
                              required
                            />
                          </Card.Text>
                        ) : null}
                      </CardTitle>
                    </Card.Body>
                    <Card.Footer style={{ background: "#004085" }}>
                      <Card.Text
                        style={{ color: "white", textAlign: "center" }}
                      >
                        Registration Deadline{" "}
                        {this.state.editModeClasses[index] ? (
                          <DatePicker
                            selected={
                              this.state.editClass.RegistrationCloseDate
                            }
                            onChange={this.handleChangeRegDate}
                            required
                            placeholderText="registration end date"
                          />
                        ) : (
                          ToShortDate(new Date(cbetClass.RegistrationCloseDate))
                        )}
                      </Card.Text>
                    </Card.Footer>
                    <Card.Body>
                      <ul style={{ listStyle: "none", padding: "15px" }}>
                        <li style={{ padding: "8px" }}>
                          <Form.Group>
                            <Card.Text>
                              <FaCloudversify
                                size={32}
                                style={{ marginRight: "5px" }}
                              />
                              <strong>Format</strong>:{" "}
                              {this.state.editModeClasses[index] === true ? (
                                <Form.Control
                                  as="textarea"
                                  required
                                  rows={4}
                                  value={this.state.editClass.Format}
                                  onChange={e => this.onHandleEdit(e, "format")}
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
                              <FaGraduationCap
                                size={32}
                                style={{ marginRight: "5px" }}
                              />
                              <strong>Training</strong>:{" "}
                              {this.state.editModeClasses[index] === true ? (
                                <Form.Control
                                  as="textarea"
                                  rows={4}
                                  required
                                  value={this.state.editClass.Training}
                                  onChange={e =>
                                    this.onHandleEdit(e, "training")
                                  }
                                  style={{ width: "100%", display: "inline" }}
                                />
                              ) : (
                                cbetClass.Training
                              )}
                            </Card.Text>
                          </Form.Group>
                          {this.state.editModeClasses[index] === true ? (
                            <ListGroup>
                              <ListGroup.Item
                                // onClick={e => this.onClickListActive(e)}
                                variant={
                                  this.state.editClass.isActive
                                    ? "success"
                                    : "danger"
                                }
                              >
                                <Form.Check
                                  type="checkbox"
                                  label={
                                    this.state.editClass.isActive
                                      ? "Active"
                                      : "Disabled"
                                  }
                                  size="lg"
                                  onClick={e => this.onClickActive(e)}
                                />
                              </ListGroup.Item>
                            </ListGroup>
                          ) : null}
                        </li>
                      </ul>
                      <Button
                        variant="primary"
                        size="sm"
                        disabled={
                          this.state.editModeClasses[index] === true
                            ? true
                            : false
                        }
                      >
                        Learn More
                      </Button>

                      {/* If Class is visible then show Save */}
                      {this.state.editModeClasses[index] === true ? (
                        <>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={e => this.onSaveClass(e)}
                            className="float-right"
                          >
                            Save
                          </Button>
                          <Alert
                            show={this.state.showEditSaveMessage}
                            variant="success"
                            style={{ marginTop: "10px" }}
                          >
                            <Alert.Heading>
                              <FaRegThumbsUp
                                size={24}
                                style={{ marginRight: "5px" }}
                              />
                              Success!
                            </Alert.Heading>
                          </Alert>
                        </>
                      ) : null}
                    </Card.Body>
                  </Card>
                </Col>
              )
            }
          })}
        </Row>
      </Container>
    )
  }
}

export default ClassAdmin
