import React from "react"
import { Carousel, Form, Button } from "react-bootstrap"

class CarouselForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      carouselForm: {
        program: "",
        name: "",
        email: "",
        phone: "",
      },
      validated: false,
      isDone: false,
    }

    this.onDropdownProgram = this.onDropdownProgram.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChangeForm = this.onChangeForm.bind(this)
    this.callGoogleScript = this.callGoogleScript.bind(this)
  }

  onChangeForm(e) {
    e.preventDefault()

    const contactInfo = this.state.carouselForm

    switch (e.target.placeholder) {
      case "Name":
        contactInfo.name = e.target.value
        break
      case "Email":
        contactInfo.email = e.target.value
        break
      case "Phone Number":
        contactInfo.phone = e.target.value
        break
      default:
        break
    }

    this.setState({
      carouselForm: contactInfo,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("fire carousel submit", e)

    const form = e.currentTarget
    console.log("add New validate", form.checkValidity())
    if (form.checkValidity() === true) {
      console.log("check validity eq true")
      e.preventDefault()
      e.stopPropagation()

      this.callGoogleScript()

      this.setState({
        validated: true,
      })
    }
  }

  onDropdownProgram(e) {
    e.preventDefault()

    if (e.target.value) {
      const oldProgram = this.state.carouselForm

      oldProgram.program = e.target.value
      this.setState({
        carouselForm: oldProgram,
      })
    }
  }

  callGoogleScript() {
    let eProgram = `${encodeURIComponent("program")}=${encodeURIComponent(
      this.state.carouselForm.program
    )}`

    let eName = `${encodeURIComponent("name")}=${encodeURIComponent(
      this.state.carouselForm.name
    )}`

    let eEmail = `${encodeURIComponent("email")}=${encodeURIComponent(
      this.state.carouselForm.email
    )}`

    let ePhone = `${encodeURIComponent("phone")}=${encodeURIComponent(
      this.state.carouselForm.phone
    )}`

    const querystring = `${eProgram}&${eName}&${eEmail}&${ePhone}&formGoogleSheetName=responses`

    fetch(
      "https://script.google.com/macros/s/AKfycbwOPFQRmzNwu3RUbq4dsbppR4uYiE5JODhCXJGa/exec?" +
        querystring,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then(response => {
      console.log("car resp", response)
      if (!response.ok) {
        throw Error("Network request failed")
      }
      console.log("Carousel response", response, querystring)

      this.setState({
        isDone: true,
        validated: false,
        carouselForm: {
          program: "",
          name: "",
          email: "",
          phone: "",
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
      <Carousel.Caption style={{ color: "white", textAlign: "left" }}>
        <Form
          validated={this.state.validated}
          onSubmit={e => this.handleSubmit(e)}
        >
          <h4>Request Information</h4>
          <Form.Group controlId="formBasicProgram">
            <Form.Label>Program of Interest</Form.Label>
            <Form.Control as="select" onChange={e => this.onDropdownProgram(e)}>
              <option>BMET Certificate</option>
              <option>BMET Degree</option>
              <option>IT/Networking</option>
              <option>Not Sure</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Control
              required
              type="text"
              placeholder="Name"
              onChange={e => this.onChangeForm(e)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={e => this.onChangeForm(e)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Control
              type="tel"
              placeholder="Phone Number"
              onChange={e => this.onChangeForm(e)}
            />
          </Form.Group>

          <Button variant="outline-light" type="submit">
            Submit
          </Button>
        </Form>
      </Carousel.Caption>
    )
  }
}

export default CarouselForm
