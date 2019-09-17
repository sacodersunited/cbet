import React, { Component } from "react"
import { Container, Form, Button, Col, Alert, Row } from "react-bootstrap"
import { FaMapMarkerAlt } from "react-icons/fa"
import InputMask from "react-input-mask"
import ContactBG from "../images/bmet-logo3.jpg"
import GraphicHeader from "../components/graphicHeader"

export default class AdmissionsForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      validated: false,
      admissionForm: {
        studentName: "",
        ssn: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zip: "",
        phone: "",
        email: "",
        dateOfBirth: "",
        program: "",
        programSelected: "",
        drivers: "",
      },
      isDone: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChangeForm = this.onChangeForm.bind(this)
    this.onLocationSearch = this.onLocationSearch.bind(this)
    this.getLocationToAddress = this.getLocationToAddress.bind(this)
    this.onClickProgram = this.onClickProgram.bind(this)
  }

  onClickProgram(e) {
    console.log("click pgrm", e.target.value)

    const formValues = this.state.admissionForm

    formValues.program = e.target.value

    this.setState({ admissionForm: formValues })
  }

  onChangeForm(e) {
    e.preventDefault()

    const admissionInfo = this.state.admissionForm

    switch (e.target.placeholder) {
      case "Student Name":
        admissionInfo.studentName = e.target.value
        break
      // case "Social Security":
      //   admissionInfo.ssn = e.target.value
      //   break
      case "Address":
        admissionInfo.address = e.target.value
        break
      case "Phone":
        admissionInfo.phone = e.target.value
        break
      case "Email Address":
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
      // case "Drivers License":
      //   admissionInfo.drivers = e.target.value
      //   break
      case "Date of Birth":
        admissionInfo.dateOfBirth = e.target.value
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

      this.callGoogleAdmissions()

      this.setState({
        validated: true,
      })
    }
  }

  onLocationSearch(e) {
    console.log("loc e", e)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.getLocationToAddress(position.coords)
      })
    }
  }

  getLocationToAddress(location) {
    const locationToFind = `${location.latitude},${location.longitude}`
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationToFind}&sensor=true&key=${this.props.mapkey}`

    const adForm = this.state.admissionForm

    fetch(url)
      .then(resp => resp.json())
      .then(result => {
        const { results } = result

        if (results) {
          for (var ac = 0; ac < results[0].address_components.length; ac++) {
            var component = results[0].address_components[ac]

            switch (component.types[0]) {
              case "locality":
                adForm.city = component.long_name
                break
              case "administrative_area_level_1":
                adForm.state = component.long_name
                break
              case "country":
                adForm.country = component.long_name
                break
              case "postal_code":
                adForm.zip = component.long_name
                break
              default:
                break
            }
          }
        }
        this.setState({
          admissionForm: adForm,
        })
      })
      .catch(e => {
        console.log(e)
      })
  }

  callGoogleAdmissions() {
    let eName = `${encodeURIComponent("name")}=${encodeURIComponent(
      this.state.admissionForm.studentName
    )}`

    let eSsn = ""

    let eAddress = `${encodeURIComponent("address")}=${encodeURIComponent(
      this.state.admissionForm.address
    )}`

    let ePhone = `${encodeURIComponent("phone")}=${encodeURIComponent(
      this.state.admissionForm.phone
    )}`

    let eState = `${encodeURIComponent("state")}=${encodeURIComponent(
      this.state.admissionForm.state
    )}`

    let eCity = `${encodeURIComponent("city")}=${encodeURIComponent(
      this.state.admissionForm.city
    )}`

    let eZip = `${encodeURIComponent("zip")}=${encodeURIComponent(
      this.state.admissionForm.zip
    )}`

    let eEmail = `${encodeURIComponent("email")}=${encodeURIComponent(
      this.state.admissionForm.email
    )}`

    let eDOB = `${encodeURIComponent("dob")}=${encodeURIComponent(
      this.state.admissionForm.dateOfBirth
    )}`

    let eDrivers = ""

    let eProgramSelected = `${encodeURIComponent(
      "program"
    )}=${encodeURIComponent(this.state.admissionForm.program)}`

    const querystring = `${eName}&${eSsn}&${eAddress}&${ePhone}&${eCity}&${eState}&${eZip}&${eEmail}&${eDOB}&${eProgramSelected}&${eDrivers}&formGoogleSheetName=responses`

    fetch(
      "https://script.google.com/macros/s/AKfycbwv08pxtawNZnuvOl8akeANYFoBG-kI-x2mM01AutvBKLXt8hTp/exec?" +
        querystring,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then(response => {
      if (!response.ok) {
        throw Error("Network request failed")
      }
      console.log("resp", response, querystring)

      this.setState({
        isDone: true,
        validated: false,
        admissionForm: {
          studentName: "",
          ssn: "",
          address: "",
          city: "",
          state: "",
          country: "",
          zip: "",
          phone: "",
          email: "",
          dateOfBirth: "",
          program: "",
          drivers: "",
        },
      })

      setTimeout(() => {
        this.setState({
          isDone: false,
        })

        window.location.reload()
      }, 1500)
      return response
    })
  }

  render() {
    return (
      <>
        <GraphicHeader
          imgSrc={ContactBG}
          title="College Of Biomedical Equipment Technology"
        />

        <Container>
          <Row>
            <Col md={6}>
              <Form
                validated={this.state.validated}
                onSubmit={e => this.handleSubmit(e)}
              >
                <h2>Admission Form</h2>
                <p className="text-muted ">
                  Please complete the admissions form and we'll get back to you
                  soon.
                </p>
                <Form.Group>
                  <Form.Label as="legend">Choose Program</Form.Label>
                  <br />
                  <Form.Control
                    as="select"
                    required
                    onChange={e => this.onClickProgram(e)}
                  >
                    <option value="">None</option>
                    <option value="BMET Certificate">BMET Certificate</option>
                    <option value="BMET Degree">BMET Degree</option>
                    <option value="IT Networking">IT & Networking</option>
                    <option value="Specialty Program">Specialty Program</option>
                  </Form.Control>

                  <Form.Control.Feedback type="invalid">
                    Please select a program.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Student Name (First name, Last name)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Student Name"
                    value={this.state.admissionForm.studentName}
                    onChange={e => this.onChangeForm(e)}
                  />
                </Form.Group>
                {/* <Form.Group>
                  <Form.Label>Social Security Number</Form.Label>
                  <InputMask
                    {...this.props}
                    mask="999-99-9999"
                    maskChar=" "
                    onChange={e => this.onChangeForm(e)}
                  >
                    {inputProps => (
                      <Form.Control
                        {...inputProps}
                        required
                        type="password"
                        placeholder="Social Security"
                      />
                    )}
                  </InputMask>
                </Form.Group> */}
                <Form.Group>
                  <Form.Label>Address</Form.Label>

                  <Form.Control
                    required
                    type="text"
                    placeholder="Address"
                    value={this.state.admissionForm.address}
                    onChange={e => this.onChangeForm(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <InputMask
                    {...this.props}
                    mask="(999) 999-9999"
                    maskChar=" "
                    onChange={e => this.onChangeForm(e)}
                  >
                    {inputProps => (
                      <Form.Control
                        {...inputProps}
                        type="tel"
                        placeholder="Phone"
                      />
                    )}
                  </InputMask>
                  <Form.Control.Feedback type="invalid">
                    Please enter Phone number.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Button
                    size="sm"
                    style={{ marginLeft: "10px" }}
                    onClick={e => this.onLocationSearch(e)}
                  >
                    <FaMapMarkerAlt style={{ marginRight: "5px" }} />
                    Locate
                  </Button>
                  <Form.Control
                    required
                    type="text"
                    placeholder="City"
                    value={this.state.admissionForm.city}
                    onChange={e => this.onChangeForm(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="State"
                    value={this.state.admissionForm.state}
                    onChange={e => this.onChangeForm(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter State.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Zip</Form.Label>

                  <InputMask
                    {...this.props}
                    mask="99999"
                    maskChar=" "
                    onChange={e => this.onChangeForm(e)}
                  >
                    {inputProps => (
                      <Form.Control
                        {...inputProps}
                        type="text"
                        placeholder="Zip"
                      />
                    )}
                  </InputMask>
                  <Form.Control.Feedback type="invalid">
                    Please enter zip.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>

                  <Form.Control
                    required
                    type="email"
                    placeholder="Email Address"
                    value={this.state.admissionForm.email}
                    onChange={e => this.onChangeForm(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter email address.
                  </Form.Control.Feedback>
                </Form.Group>
                {/* <Form.Group>
                  <Form.Label>Drivers License</Form.Label>

                  <Form.Control
                    required
                    type="text"
                    placeholder="Drivers License"
                    value={this.state.admissionForm.drivers}
                    onChange={e => this.onChangeForm(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter Drivers License number.
                  </Form.Control.Feedback>
                </Form.Group> */}
                <Form.Group>
                  <Form.Label>Date of Birth</Form.Label>

                  <InputMask
                    {...this.props}
                    mask="99/99/9999"
                    maskChar=" "
                    onChange={e => this.onChangeForm(e)}
                  >
                    {inputProps => (
                      <Form.Control
                        {...inputProps}
                        type="text"
                        placeholder="Date of Birth"
                      />
                    )}
                  </InputMask>
                </Form.Group>

                <Form.Group>
                  <Button type="submit">Submit Form</Button>
                </Form.Group>
                <Form.Row className="float-right">
                  <Alert show={this.state.isDone} variant="success">
                    <Alert.Heading>Admission submitted.</Alert.Heading>
                  </Alert>
                </Form.Row>
              </Form>
            </Col>
            <Col md={6}>
              <div style={{ marginLeft: "0px" }}>
                <h1 className="text-dark" style={{ opacity: "1.0" }}>
                  Enrollment
                </h1>
                <ul
                  className="text-dark"
                  style={{ listStyleType: "none", padding: "0px" }}
                >
                  <li>
                    <b>Address:</b> 11550 IH-10 West, Suite 190, San Antonio,
                    Texas 78230
                  </li>
                  <li>
                    <b>Phone:</b> (210) 233-1102
                  </li>
                  <li>
                    <b>Toll-Free:</b> (866) 866-9027
                  </li>
                  <li>
                    <b>E-mail:</b>{" "}
                    <a
                      className="text-dark"
                      href="mailto:admissiondept@cbet.edu"
                    >
                      admissiondept@cbet.edu
                    </a>
                  </li>
                  <li>
                    <a href="mailto:admissiondept@cbet.edu">
                      <Button>Contact Us</Button>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
