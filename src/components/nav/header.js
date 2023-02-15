import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import Img from "gatsby-image"
import Timer from "./timer"
import styled from "@emotion/styled"
import Moment from "react-moment"
import { css } from "@emotion/react"
import { Widget } from "@typeform/embed-react"

// enrollment deadlines for 2023
// NOTE: Also update the `src/data/classes.yaml` file
// const enrollmentDeadline = "2023-03-20"
// const enrollmentDeadline = "2023-05-01"
// const enrollmentDeadline = "2023-06-12"
// const enrollmentDeadline = "2023-07-31"
// const enrollmentDeadline = "2023-09-11"
// const enrollmentDeadline = "2023-10-23"
// const enrollmentDeadline = "2023-12-17"
const enrollmentDeadline = "2023-03-20"

const StyledNavDropdown = styled(NavDropdown)`
  border: 1px solid white;
  border-radius: 0.25rem;
  .dropdown-menu {
    padding: 0;
    padding-bottom: 20px;
  }
`

const Header = (props) => {
  return (
    <React.Fragment>
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
                <a
                  href="https://www.theimagingacademy.com/"
                  target="_blank"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Imaging Academy{" "}
                </a>
              </NavDropdown>
              <Link
                to="/schedule"
                className="nav-link"
                activeClassName="active"
              >
                Schedule
              </Link>
              <NavDropdown title="Students" id="student-dropdown">
                <a
                  href="https://store.aami.org/joinapi__membershiplist?id=a202E000005WjyJQAS&order=1"
                  target="_blank"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  AAMI Student Membership
                </a>
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
                <a
                  href="https://cbet.skillnet.net/"
                  target="_blank"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  CBET SkillNet
                </a>
              </NavDropdown>
              <NavDropdown title="Transcripts" id="transcript-dropdown">
                <a
                  href="https://www.parchment.com/u/registration/44694200/institution"
                  target="_blank"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Official Transcripts
                </a>
                <a
                  href="mailto:registrar@cbet.edu"
                  target="_blank"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Unoffical Transcripts
                </a>
              </NavDropdown>
              <Link to="/faq" className="nav-link" activeClassName="active">
                FAQs
              </Link>
              <Link
                to="/application"
                className="nav-link"
                activeClassName="active"
              >
                Apply Now
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
                  css={css`
                    /* mobile */
                    padding: 10px 5px;
                    max-width: 400px;
                    /* desktop */
                    @media (min-width: 35em) {
                      padding: 0 20px;
                      min-width: 460px;
                    }
                  `}
                >
                  <p className="lead">
                    Complete this short webform to speak with an Admissions
                    Counselor
                  </p>
                  {/* This is 2/3s option */}
                  <Widget
                    id="YKOHKJGE"
                    style={{ width: "100%" }}
                    hideFooter={true}
                    height="900"
                  />
                </div>
              </StyledNavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
