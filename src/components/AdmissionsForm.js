import React, { Component } from "react"
import {
  Container,
  Form,
  Jumbotron,
  Button,
  Col,
  Row,
  ButtonGroup,
} from "react-bootstrap"
import { FaMapMarkerAlt } from "react-icons/fa"
import InputMask from "react-input-mask"

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
      },
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChangeForm = this.onChangeForm.bind(this)
    this.onLocationSearch = this.onLocationSearch.bind(this)
    this.getLocationToAddress = this.getLocationToAddress.bind(this)
    this.onClickProgram = this.onClickProgram.bind(this)
  }

  onClickProgram(e) {
    console.log("click pgrm", e.target.innerHTML)

    const formValues = this.state.admissionForm

    formValues.program = e.target.innerHTML

    this.setState({ admissionForm: formValues })
  }

  onChangeForm(e) {
    e.preventDefault()

    console.log("onchangeform", e.target.value)

    const admissionInfo = this.state.admissionForm

    switch (e.target.placeholder) {
      case "Student Name":
        admissionInfo.studentName = e.target.value
        break
      case "Social Security":
        admissionInfo.ssn = e.target.value
        break
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

    let eSsn = `${encodeURIComponent("ssn")}=${encodeURIComponent(
      this.state.admissionForm.ssn
    )}`

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

    let eProgramSelected = `${encodeURIComponent(
      "program"
    )}=${encodeURIComponent(this.state.admissionForm.program)}`

    const querystring = `${eName}&${eSsn}&${eAddress}&${ePhone}&${eCity}&${eState}&${eZip}&${eEmail}&${eDOB}&${eProgramSelected}&formGoogleSheetName=responses`

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
      console.log(response)

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
        },
      })

      setTimeout(() => {
        this.setState({
          isDone: false,
        })
      }, 3500)
      return response
    })
  }

  render() {
    return (
      <>
        <Jumbotron>
          <Container>
            <h1>Admissions</h1>
          </Container>
        </Jumbotron>

        <Container>
          <Form
            validated={this.state.validated}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>Student Name (First name, Last name)</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Student Name"
                  value={this.state.admissionForm.studentName}
                  onChange={e => this.onChangeForm(e)}
                />
              </Form.Group>
              <Form.Group as={Col} md="6">
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
                      type="text"
                      placeholder="Social Security"
                    />
                  )}
                </InputMask>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>Address</Form.Label>

                <Form.Control
                  required
                  type="text"
                  placeholder="Address"
                  value={this.state.admissionForm.address}
                  onChange={e => this.onChangeForm(e)}
                />
              </Form.Group>
              <Form.Group as={Col} md="6">
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
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4">
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
              <Form.Group as={Col} md="4">
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
              <Form.Group as={Col} md="4">
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
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6">
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
              <Form.Group as={Col} md="6">
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
            </Form.Row>

            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Choose Program
              </Form.Label>

              <ButtonGroup aria-label="Basic example" vertical>
                <Button variant="primary" onClick={e => this.onClickProgram(e)}>
                  BMET
                </Button>
                <Button variant="primary" onClick={e => this.onClickProgram(e)}>
                  Associates
                </Button>
              </ButtonGroup>
            </Form.Group>
            <Button type="submit" className="float-right">
              Submit
            </Button>
          </Form>
        </Container>
      </>
    )
  }
}
