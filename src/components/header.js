import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
// import { isAuthenticated, logout, getProfile } from "../utils/auth"
import Logo from "../images/logo/CBET-04.png"
import { FaFacebookSquare, FaLinkedin, FaUserLock } from "react-icons/fa"

const Header = ({ siteTitle }) => {
  // const user = getProfile()
  const user = null
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="120"
              height="auto"
              className="d-inline-block align-top"
              alt="CBET logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/about/" className="nav-link" activeClassName="active">
                About
              </Link>
              <NavDropdown title="Programs" id="basic-nav-dropdown">
                <Link className="dropdown-item" to="/bmet-certificate/">
                  BMET Cert
                </Link>
                <Link className="dropdown-item" to="/bmet-degree/">
                  BMET Degree
                </Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to="/it-certificate/">
                  IT / Networking
                </Link>
              </NavDropdown>
              <Link
                to="/schedule/"
                className="nav-link"
                activeClassName="active"
                // style={{
                //   color: isAuthenticated() && user !== null ? "aqua" : "",
                // }}
              >
                Schedule
              </Link>
              <Link
                to="/admissions/"
                className="nav-link"
                activeClassName="active"
              >
                Admissions
              </Link>
              <Link
                to="/financial-aid/"
                className="nav-link"
                activeClassName="active"
              >
                Financial Aid
              </Link>
              <Link
                to="/international-students/"
                className="nav-link"
                activeClassName="active"
              >
                Intl Students
              </Link>
              <Link
                to="/career-services/"
                className="nav-link"
                activeClassName="active"
              >
                Career
              </Link>
              <Link to="/faq/" className="nav-link" activeClassName="active">
                FAQs
              </Link>
              <Link
                to="/contact/"
                className="nav-link"
                activeClassName="active"
              >
                Contact Us
              </Link>
              <a
                href="https://cittx.instructure.com/"
                target="_blank"
                className="nav-link"
                rel="noopener noreferrer"
              >
                Canvas
              </a>
            </Nav>
            <Nav className="social-nav">
              <a
                href="https://www.facebook.com/CBETCOLLEGE/"
                target="_blank"
                className="nav-link"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare
                  style={{ verticalAlign: "text-bottom", fontSize: "20px" }}
                />
              </a>

              <a
                href="https://www.linkedin.com/company/cbetcollege/"
                target="_blank"
                className="nav-link"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  style={{ verticalAlign: "text-bottom", fontSize: "20px" }}
                />
              </a>
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
