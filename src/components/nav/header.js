import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
} from "react-bootstrap"
import Img from "gatsby-image"
// import { isAuthenticated, logout, getProfile } from "../utils/auth"
import Timer from "./timer"

const Header = props => {
  // const user = getProfile()
  const user = null
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Link
            to="/"
            aria-label="College of Biomedical Equipment Technology homepage"
          >
            <Navbar.Brand>
              <Img
                fixed={props.images.cbetlogo.childImageSharp.fixed}
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/about" className="nav-link" activeClassName="active">
                About
              </Link>
              <NavDropdown title="Programs" id="basic-nav-dropdown">
                <Link className="dropdown-item" to="/bmet-certificate">
                  BMET Cert
                </Link>
                <Link className="dropdown-item" to="/bmet-degree">
                  BMET Degree
                </Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to="/it-certificate">
                  IT / Networking
                </Link>
              </NavDropdown>
              <Link
                to="/schedule"
                className="nav-link"
                activeClassName="active"
                // style={{
                //   color: isAuthenticated() && user !== null ? "aqua" : "",
                // }}
              >
                Schedule
              </Link>
              <Link
                to="/admissions"
                className="nav-link"
                activeClassName="active"
              >
                Admissions
              </Link>
              <NavDropdown title="Students" id="student-dropdown">
                <Link
                  to="/financial-assistance"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  Financial Assistance
                </Link>
                <Link
                  to="/international-students"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  Intl Students
                </Link>
                <Link
                  to="/careers"
                  className="dropdown-item"
                  activeClassName="active"
                >
                  Careers
                </Link>
                <a
                  href="https://cittx.instructure.com/"
                  target="_blank"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Canvas
                </a>
              </NavDropdown>
              <Link to="/faq" className="nav-link" activeClassName="active">
                FAQs
              </Link>
            </Nav>
            <Nav className="timer-nav">
              <Form inline>
                <Navbar.Text className="mr-1 text-white">
                  <Timer enrollmentEndDate="2020-06-22"/>
                </Navbar.Text>
                <Button variant="outline-light">Start Here</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
