import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { isAuthenticated, logout, getProfile } from "../utils/auth"

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
            </Nav>
            <Nav className="social-nav">
              <a
                href="https://facebook.com"
                target="_blank"
                className="nav-link"
              >
                <FaFacebookSquare
                  style={{ verticalAlign: "text-bottom", fontSize: "20px" }}
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="nav-link"
              >
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
              <Link to="/admin" className="nav-link">
                <FaUserLock
                  style={{
                    verticalAlign: "text-bottom",
                    fontSize: "20px",
                    marginRight: "4px",
                  }}
                />
                Admin
              </Link>
              {isAuthenticated() === true && user !== null ? (
                <>
                  <Link
                    to="/admin"
                    className="nav-link"
                    style={{ color: "aqua" }}
                  >
                    {user.name}
                  </Link>
                  <a
                    href="#logout"
                    onClick={e => {
                      logout()
                      e.preventDefault()
                    }}
                    className="nav-link"
                  >
                    Log Out
                  </a>
                </>
              ) : null}
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
