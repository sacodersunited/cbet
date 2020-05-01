import React from "react"
import { Container, Row, Col, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col
          md={2}
          style={{
            height: "100vh",
            color: "whitesmoke",
            backgroundColor: "#43425d",
            display: "block !important",
            overflow: "hidden",
            position: "sticky",
            top: "4 rem",
            zIndex: "1000",
          }}
        >
          <h4 className="mt-5 mb-3">CBET Admin</h4>
          <Nav defaultActiveKey="/admin" className="flex-column" fill justify>
            <Link
              to="/admin"
              className="nav-link text-light"
              activeClassName="active"
            >
              Dashboard
            </Link>
            <Link
              to="/admin"
              className="nav-link text-light"
              activeClassName="active"
            >
              Jobs
            </Link>
            <Link
              to="/admin"
              className="nav-link text-light"
              activeClassName="active"
            >
              Events
            </Link>
            <Link
              to="/admin"
              className="nav-link text-light"
              activeClassName="active"
            >
              Blog
            </Link>
          </Nav>
        </Col>
        <Col md={8}>{children}</Col>
      </Row>
    </Container>
  )
}
