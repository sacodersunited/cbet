import React, { Component } from "react"
import { Container, Form, Jumbotron, Button, Col, Row } from "react-bootstrap"

export default class AdmissionsForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      validated: false,
      admissionForm: {
        studentName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
        dateOfBirth: "",
      },
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChangeForm = this.onChangeForm.bind(this)
  }

  onChangeForm(e) {
    e.preventDefault()

    console.log("onchangeform", e.target)

    const admissionInfo = this.state.admissionForm

    switch (e.target.placeholder) {
      case "Student Name":
        admissionInfo.studentName = e.target.value
        break
      case "Social Security":
        admissionInfo.lastName = e.target.value
        break
      case "Address":
        admissionInfo.address = e.target.value
        break
      case "Phone":
        admissionInfo.phone = e.target.value
        break
      case "Email":
        admissionInfo.email = e.target.value
        break
      case "City":
        admissionInfo.city = e.target.value
        break
      case "State":
        admissionInfo.state = e.target.value
        break
      case "Zip":
        admissionInfo.zip = e.target.value
        break
      default:
        break
    }

    this.setState({
      admissionForm: admissionInfo,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("fire submit", e)

    const form = e.currentTarget
    console.log("add New validate", form.checkValidity())
    if (form.checkValidity() === true) {
      console.log("check validity eq true")
      e.preventDefault()
      e.stopPropagation()

      //   this.callGoogleScript()

      this.setState({
        validated: true,
      })
    }
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Admissions</h1>
        </Jumbotron>
        <Form
          validated={this.state.validated}
          onSubmit={e => this.handleSubmit(e)}
        >
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Student Name:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Student Name"
                value={this.state.admissionForm.studentName}
                onChange={e => this.onChangeForm(e)}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Social Security Number:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Social Security"
                onChange={e => this.onChangeForm(e)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Address"
                onChange={e => this.onChangeForm(e)}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                required
                type="tel"
                placeholder="Phone"
                onChange={e => this.onChangeForm(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter Phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>City:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="City"
                onChange={e => this.onChangeForm(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>State:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="State"
                onChange={e => this.onChangeForm(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter State.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Zip:</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Zip"
                onChange={e => this.onChangeForm(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email Address"
                onChange={e => this.onChangeForm(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Date of Birth:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Date of Birth"
                onChange={e => this.onChangeForm(e)}
              />
            </Form.Group>
          </Form.Row>
          {/* <ButtonGroup>
              <Button>BMET Cert</Button>
              <Button>Associates of Applied Science Degree</Button>
            </ButtonGroup> */}

          {/* <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup.Prepend>
              {/* <Form.Control aria-label="Text input with checkbox" />
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label="Radio button for following text input" />
              </InputGroup.Prepend>
              <Form.Label>BMET</Form.Label>
              <Form.Control aria-label="Text input with radio button" readOnly>
                BMET
              </Form.Control>
            </InputGroup> */}

          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Choose Program
            </Form.Label>

            <Col sm={10}>
              <Form.Check
                type="radio"
                id={`check-api-checkbox1`}
                label="BMET"
                name="formHorizontalRadios"
              />
              <Form.Check
                type="radio"
                label="Associates"
                id={`check-api-checkbox2`}
                name="formHorizontalRadios"
              />
            </Col>
          </Form.Group>
          <Button type="submit" className="float-right">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}
