import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import Img from "gatsby-image"
import Timer from "./timer"
import styled from "styled-components"
import Moment from "react-moment"
import { UseScript } from "../../hooks/use-script"

// let enrollmentDeadline = "2020-06-22"
// future terms for 2020
// let enrollmentDeadline = "2020-08-03"
// let enrollmentDeadline = "2020-09-14"
// const enrollmentDeadline = "2021-02-08"
// const enrollmentDeadline = "2021-03-22"
const enrollmentDeadline = "2021-05-03"
// const enrollmentDeadline = "2021-06-14"
// const enrollmentDeadline = "2021-08-02"
// const enrollmentDeadline = "2021-09-13"
// const enrollmentDeadline = "2021-10-25"
// const enrollmentDeadline = "2021-12-19"

const StyledNavDropdown = styled(NavDropdown)`
  border: 1px solid white;
  border-radius: 0.25rem;
  .dropdown-menu {
    padding: 0;
    padding-bottom: 20px;
  }
`

const Header = (props) => {
  if (typeof window !== "undefined") {
    if (typeof document !== `undefined`) {
      !props.isAdmission &&
        UseScript(
          "https://cbet.quickschools.com/sms/es/enquiry?divId=enquiry-form"
        )
    }
  }
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
              >
                Schedule
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
                  href="https://cbet.instructure.com/"
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
              <Navbar.Text className="mr-2 text-danger">
                {new Date(enrollmentDeadline) >= new Date() ? (
                  <>
                    <span>Enrollment Deadline: </span>{" "}
                  </>
                ) : null}

                <Timer enrollmentEndDate={enrollmentDeadline} key="navbar" />
              </Navbar.Text>

              <StyledNavDropdown
                className="dropleft"
                title="Start Now"
                id="drop-form"
                renderMenuOnMount
              >
                <div className="container px-5 py-3 bg-primary text-white">
                  <h5>
                    Enrollment Deadline is{" "}
                    <Moment format="MMM DD">{enrollmentDeadline}</Moment>
                  </h5>
                  <p>
                    <Timer
                      enrollmentEndDate={enrollmentDeadline}
                      key="dropdown"
                    />
                  </p>
                </div>

                <div
                  id="enquiry-form"
                  style={{ padding: "10px 40px", minWidth: "500px" }}
                >
                  <p className="lead">
                    Find out how CBET can help you succeed with your future
                  </p>
                </div>
              </StyledNavDropdown>
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
