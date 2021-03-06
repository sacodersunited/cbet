import React from "react"
import {
  Form,
  Container,
  Button,
  Col,
  DropdownButton,
  Dropdown,
  InputGroup,
  Alert,
  Row,
} from "react-bootstrap"
import { FaRegThumbsUp } from "react-icons/fa"
import InputMask from "react-input-mask"
import BackgroundGraphicHeader from "../components/BackgroundGraphicHeader"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contactForm: {
        city: "",
        country: "",
        state: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        hearAbout: "",
        programOfInterest: "",
        callback: false,
        comments: "",
      },
      validated: false,
      isDone: false,
    }

    this.getLocationToAddress = this.getLocationToAddress.bind(this)
    this.getLocation = this.getLocation.bind(this)
    this.onDropdownHearAboutUs = this.onDropdownHearAboutUs.bind(this)
    this.onDropdownProgram = this.onDropdownProgram.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChangeForm = this.onChangeForm.bind(this)
    this.callGoogleScript = this.callGoogleScript.bind(this)
  }

  onChangeForm(e) {
    e.preventDefault()

    const contactInfo = this.state.contactForm

    switch (e.target.placeholder) {
      case "First name":
        contactInfo.firstName = e.target.value
        break
      case "Last name":
        contactInfo.lastName = e.target.value
        break
      case "210 221-1111":
        contactInfo.phone = e.target.value
        break
      case "Email":
        contactInfo.email = e.target.value
        break
      case "Country":
        contactInfo.country = e.target.value
        break
      case "City":
        contactInfo.city = e.target.value
        break
      case "State":
        contactInfo.state = e.target.value
        break
      case "comments here":
        contactInfo.comments = e.target.value
        break
      default:
        break
    }

    this.setState({
      contactForm: contactInfo,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    const form = e.currentTarget
    if (form.checkValidity() === true) {
      e.preventDefault()
      e.stopPropagation()

      // this.callGoogleScript()

      this.setState({
        validated: true,
      })
    }
  }

  callGoogleScript() {
    let eFirstName = `${encodeURIComponent("first")}=${encodeURIComponent(
      this.state.contactForm.firstName
    )}`

    let eLastName = `${encodeURIComponent("last")}=${encodeURIComponent(
      this.state.contactForm.lastName
    )}`

    let ePhone = `${encodeURIComponent("phone")}=${encodeURIComponent(
      this.state.contactForm.phone
    )}`

    let eHearAboutUs = `${encodeURIComponent(
      "hearaboutus"
    )}=${encodeURIComponent(this.state.contactForm.hearAbout)}`

    let eProgram = `${encodeURIComponent("program")}=${encodeURIComponent(
      this.state.contactForm.programOfInterest
    )}`

    let eCountry = `${encodeURIComponent("country")}=${encodeURIComponent(
      this.state.contactForm.country
    )}`

    let eState = `${encodeURIComponent("state")}=${encodeURIComponent(
      this.state.contactForm.state
    )}`

    let eCity = `${encodeURIComponent("city")}=${encodeURIComponent(
      this.state.contactForm.city
    )}`

    let eEmail = `${encodeURIComponent("email")}=${encodeURIComponent(
      this.state.contactForm.email
    )}`

    let eComments = `${encodeURIComponent("comments")}=${encodeURIComponent(
      this.state.contactForm.comments
    )}`

    let eCallback = `${encodeURIComponent("call")}=${encodeURIComponent(
      this.state.contactForm.callback
    )}`

    const querystring = `${eFirstName}&${eEmail}&${eLastName}&${ePhone}&${eHearAboutUs}&${eProgram}&${eCountry}&${eState}&${eCity}&${eCallback}&${eComments}&formGoogleSheetName=responses`

    fetch(
      "https://script.google.com/macros/s/AKfycbxNSOmlR_Pswked2bRozsNPeFu_4JkN2y5_kcSUBc34rDHf0Yaq/exec?" +
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

      this.setState({
        isDone: true,
        validated: false,
        contactForm: {
          city: "",
          country: "",
          state: "",
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          hearAbout: "",
          programOfInterest: "",
          callback: false,
          comments: "",
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

  onDropdownProgram(e) {
    e.preventDefault()

    if (e.target.text) {
      const oldProgram = this.state.contactForm

      oldProgram.programOfInterest = e.target.text
      this.setState({
        contactForm: oldProgram,
      })
    }
  }

  onDropdownHearAboutUs(e) {
    e.preventDefault()
    if (e.target.text) {
      const oldAboutUs = this.state.contactForm

      oldAboutUs.hearAbout = e.target.text
      this.setState({
        contactForm: oldAboutUs,
      })
    }
  }

  getLocation() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.getLocationToAddress(position.coords)
    //   })
    // }
  }

  // https://stackoverflow.com/questions/52583277/get-user-city-and-country-in-react-native
  getLocationToAddress(location) {
    const locationToFind = `${location.latitude},${location.longitude}`
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationToFind}&sensor=true&key=${this.props.mapkey}`

    fetch(url)
      .then(resp => resp.json())
      .then(result => {
        const { results } = result

        if (results) {
          for (var ac = 0; ac < results[0].address_components.length; ac++) {
            var component = results[0].address_components[ac]

            switch (component.types[0]) {
              case "locality":
                this.setState({
                  city: component.long_name,
                })
                break
              case "administrative_area_level_1":
                this.setState({
                  state: component.long_name,
                })
                break
              case "country":
                this.setState({
                  country: component.long_name,
                })
                break
              default:
                break
            }
          }
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  render() {
    return (
      <>
        <BackgroundGraphicHeader bgFullImageName="contact-header.jpg" />

        <Container>
          <Row>
            <Col md={7}>
              <p className="text-muted ">
                Please complete the form and we'll get back to you soon.
              </p>
              <Form
                validated={this.state.validated}
                onSubmit={e => this.handleSubmit(e)}
              >
                <Form.Group controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    value={this.state.contactForm.firstName}
                    onChange={e => this.onChangeForm(e)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    value={this.state.contactForm.lastName}
                    onChange={e => this.onChangeForm(e)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustomPhone">
                  <Form.Label>Phone</Form.Label>
                  <InputGroup>
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
                      Please enter phone number.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={this.state.contactForm.email}
                    onChange={e => this.onChangeForm(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid Email.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom06">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Country"
                    required
                    value={this.state.contactForm.country}
                    onChange={e => this.onChangeForm(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid country.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    required
                    value={this.state.contactForm.city}
                    onChange={e => this.onChangeForm(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom04">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    required
                    value={this.state.contactForm.state}
                    onChange={e => this.onChangeForm(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>How did you hear about us?</Form.Label>
                  <DropdownButton
                    id="dropdown-howdidyouhearaboutus-button"
                    title="Select one"
                    drop="right"
                    variant="outline-primary"
                    onClick={e => this.onDropdownHearAboutUs(e)}
                    key="hearAboutUs1"
                  >
                    <Dropdown.Item eventKey="1">AAMI School List</Dropdown.Item>
                    <Dropdown.Item eventKey="2">AAMI Web Banner</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Friend / Word of Mouth
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4">Google Search</Dropdown.Item>
                    <Dropdown.Item eventKey="5">
                      Other Search Engine
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="6">Other</Dropdown.Item>
                  </DropdownButton>
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="hear about us"
                    value={this.state.contactForm.hearAbout}
                    onChange={e => this.onChangeForm(e)}
                    required
                    disabled
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Program of interest</Form.Label>
                  <DropdownButton
                    id="dropdown-programofinterest-button"
                    title="Select one"
                    drop="right"
                    variant="outline-primary"
                    onClick={e => this.onDropdownProgram(e)}
                    key="programOfInterest1"
                  >
                    <Dropdown.Item eventKey="1">BMET Degree</Dropdown.Item>
                    <Dropdown.Item eventKey="2">BMET Cert</Dropdown.Item>
                    <Dropdown.Item eventKey="3">CompTia A+</Dropdown.Item>
                    <Dropdown.Item eventKey="4">CompTia N+</Dropdown.Item>
                  </DropdownButton>
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="program"
                    required
                    disabled
                    value={this.state.contactForm.programOfInterest}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    label="Would you like to receive a call back?"
                    feedback="You must agree before submitting."
                    checked={this.state.contactForm.callback}
                    onChange={e => {
                      const conForm = this.state.contactForm
                      conForm.callback = !conForm.callback
                      this.setState({ contactForm: conForm })
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Comments</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={this.state.contactForm.comments}
                    onChange={e => this.onChangeForm(e)}
                    placeholder="comments here"
                  />
                </Form.Group>
                <Button type="submit">Submit Form</Button>
                <Form.Group>
                  <Alert show={this.state.isDone} variant="success">
                    <Alert.Heading>
                      <FaRegThumbsUp style={{ marginRight: "5px" }} />
                      Success! We will get back to you soon.
                    </Alert.Heading>
                  </Alert>
                </Form.Group>
              </Form>
            </Col>
            <Col md={5}>
              <div style={{ marginLeft: "50px" }}>
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

export default ContactForm
