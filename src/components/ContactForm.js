import React from "react"
import {
  Form,
  Container,
  Button,
  //   Collapse,
  //   Card,
  //   ButtonGroup,
  //   ButtonToolbar,
  //   Row,
  Col,
  //   Alert,
  //   Spinner,
  DropdownButton,
  Dropdown,
  //   Badge,
  //   ListGroup,
  InputGroup,
  Jumbotron,
} from "react-bootstrap"

// const config = require("gatsby-plugin-config").default
// import {
//   FaEdit,
//   FaPlus,
//   FaTrashAlt,
//   FaGraduationCap,
//   FaCloudversify,
//   FaRegCalendarAlt,
//   FaMinus,
//   FaDatabase,
//   FaRegThumbsUp,
// } from "react-icons/fa"
// import DatePicker from "react-datepicker"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      form: "",
      city: "",
      country: "",
      state: "",
    }

    this.getLocationToAddress = this.getLocationToAddress.bind(this)
    this.getLocation = this.getLocation.bind(this)
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log("got to geo loc")
        this.getLocationToAddress(position.coords)
      })
    }
  }

  //   https://stackoverflow.com/questions/52583277/get-user-city-and-country-in-react-native
  getLocationToAddress(location) {
    const locationToFind = `${location.latitude},${location.longitude}`
    console.log("got to getloctoaddress", this.props.mapkey, locationToFind)
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationToFind}&sensor=true&key=${
      this.props.mapkey
    }`

    fetch(url)
      .then(resp => resp.json())
      .then(result => {
        const { results } = result
        console.log("results", results)

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
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomPhone">
              <Form.Label>Phone</Form.Label>
              <InputGroup>
                <Form.Control type="tel" placeholder="210 221-1111" required />
                <Form.Control.Feedback type="invalid">
                  Please enter phone number.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="email" />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>How did you hear about us?</Form.Label>
              <DropdownButton
                id="dropdown-howdidyouhearaboutus-button"
                title="Select one"
                className="alignMiddle"
              >
                <Dropdown.Item as="button">AAMI School List</Dropdown.Item>
                <Dropdown.Item as="button">AAMI Web Banner</Dropdown.Item>
                <Dropdown.Item as="button">
                  Friend / Word of Mouth
                </Dropdown.Item>
                <Dropdown.Item as="button">Google Search</Dropdown.Item>
                <Dropdown.Item as="button">Other Search Engine</Dropdown.Item>
                <Dropdown.Item as="button">Other</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Program of interest</Form.Label>
              <DropdownButton
                id="dropdown-programofinterest-button"
                title="Select one"
              >
                <Dropdown.Item as="button">BMET Degree</Dropdown.Item>
                <Dropdown.Item as="button">BMET Cert</Dropdown.Item>
                <Dropdown.Item as="button">A+</Dropdown.Item>
                <Dropdown.Item as="button">N+</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationCustom06">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Country" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
        <br />
        <Button
          onClick={() => {
            this.getLocation()
          }}
        >
          Test location
        </Button>
      </Container>
    )
  }
}

export default ContactForm
