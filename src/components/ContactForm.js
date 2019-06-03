import React from "react"
import {
  Form,
  Container,
  Button,
  Col,
  DropdownButton,
  Dropdown,
  InputGroup,
  Jumbotron,
} from "react-bootstrap"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      city: "",
      country: "",
      state: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      hearAbout: "",
      programOfInterest: "",
    }

    this.getLocationToAddress = this.getLocationToAddress.bind(this)
    this.getLocation = this.getLocation.bind(this)
    this.onDropdownHearAboutUs = this.onDropdownHearAboutUs.bind(this)
    this.onDropdownProgram = this.onDropdownProgram.bind(this)
  }

  onDropdownProgram(e) {
    e.preventDefault()
    console.log("e dropdown Program", e.target.text)

    if (e.target.text) {
      let oldProgram = this.state.programOfInterest

      oldProgram = e.target.text
      this.setState({
        programOfInterest: oldProgram,
      })
    }
  }

  onDropdownHearAboutUs(e) {
    e.preventDefault()
    console.log("e dropdown hear", e.target.text)
    if (e.target.text) {
      let oldAboutUs = this.state.hearAbout

      oldAboutUs = e.target.text
      this.setState({
        hearAbout: oldAboutUs,
      })
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.getLocationToAddress(position.coords)
      })
    }
  }

  //   https://stackoverflow.com/questions/52583277/get-user-city-and-country-in-react-native
  getLocationToAddress(location) {
    const locationToFind = `${location.latitude},${location.longitude}`
    // console.log("got to getloctoaddress", this.props.mapkey, locationToFind)
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationToFind}&sensor=true&key=${
      this.props.mapkey
    }`

    fetch(url)
      .then(resp => resp.json())
      .then(result => {
        const { results } = result
        // console.log("results", results)

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
      <Container>
        <Jumbotron>
          <h1>CBET - Contact Us</h1>
          <ul>
            <li>11550 IH-10 West, Suite 190, San Antonio, Texas 78230</li>
            <li>Phone: (210) 233-1102</li>
            <li>Toll-Free: (866) 866-9027</li>
            <li>E-mail: admissiondept@cittx.edu</li>
          </ul>
        </Jumbotron>
        <Form
          noValidate
          //   validated={validated}
          onSubmit={e => this.handleSubmit(e)}
        >
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                value={this.state.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
                value={this.state.lastName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustomPhone">
              <Form.Label>Phone</Form.Label>
              <InputGroup>
                <Form.Control
                  type="tel"
                  placeholder="210 221-1111"
                  required
                  value={this.state.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter phone number.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="email" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom06">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Country" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid country.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="3">
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
                <Dropdown.Item eventKey="5">Other Search Engine</Dropdown.Item>
                <Dropdown.Item eventKey="6">Other</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Hear answer</Form.Label>
              <Form.Control
                type="text"
                placeholder="hear about us"
                value={this.state.hearAbout}
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="2">
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
                <Dropdown.Item eventKey="3">A+</Dropdown.Item>
                <Dropdown.Item eventKey="4">N+</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Program answer</Form.Label>
              <Form.Control
                type="text"
                placeholder="program"
                required
                value={this.state.programOfInterest}
              />
            </Form.Group>
          </Form.Row>
          <hr />
          <Button type="submit" className="float-right">
            Submit form
          </Button>
        </Form>
        <br />
        {/* <Button
          className="float-right"
          onClick={() => {
            this.getLocation()
          }}
        >
          Test location
        </Button> */}
      </Container>
    )
  }
}

export default ContactForm
