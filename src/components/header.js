import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          {siteTitle}
        </Link>
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
          <Link to="/admissions/" className="nav-link" activeClassName="active">
            Admissions
          </Link>
          <Link to="/financial-aid/" className="nav-link" activeClassName="active">
            Financial Aid
          </Link>
        </Nav>
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
