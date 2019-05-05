import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaUserLock,
} from "react-icons/fa"
// import { LinkContainer } from "react-router-bootstrap"

const Header = ({ siteTitle }) => (
  <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          {siteTitle}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Programs" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/programs/">
                BMET Cert
              </Link>
              <Link className="dropdown-item" to="/programs/">
                BMET Degree
              </Link>
              <NavDropdown.Divider />
              <Link className="dropdown-item" to="/programs/">
                IT / Networking
              </Link>
            </NavDropdown>
            <Link to="/programs" className="nav-link" activeClassName="active">
              Programs
            </Link>
            <Link to="/schedule/" className="nav-link" activeClassName="active">
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
          </Nav>
          <Nav className="social-nav">
            <a href="https://facebook.com" target="_blank" className="nav-link">
              <FaFacebookSquare
                style={{ verticalAlign: "text-bottom", fontSize: "20px" }}
              />
            </a>
            <a href="https://twitter.com" target="_blank" className="nav-link">
              <FaTwitterSquare
                style={{ verticalAlign: "text-bottom", fontSize: "20px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="nav-link"
            >
              <FaLinkedin
                style={{ verticalAlign: "text-bottom", fontSize: "20px" }}
              />
            </a>
            <Link to="/" className="nav-link">
              <FaUserLock
                style={{
                  verticalAlign: "text-bottom",
                  fontSize: "20px",
                  marginRight: "4px",
                }}
              />
              Admin
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
