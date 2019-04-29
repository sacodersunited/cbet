import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaUserLock,
} from "react-icons/fa"

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
            <Link to="/about/" className="nav-link" activeClassName="active">
              About
            </Link>
            <Link to="/programs/" className="nav-link" activeClassName="active">
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
            <NavDropdown title="Programs" id="basic-nav-dropdown">
              <NavDropdown.Item href="/programs/">BMET Cert</NavDropdown.Item>
              <NavDropdown.Item href="/programs/">BMET Degree</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/programs/">
                IT / Networking
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="social-nav">
            <a href="https://facebook.com" target="_blank" className="nav-link">
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com" target="_blank" className="nav-link">
              <FaTwitterSquare />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="nav-link"
            >
              <FaLinkedin />
            </a>
            <Link to="/" className="nav-link">
              <FaUserLock />
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
