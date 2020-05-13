import React from "react"
import { Button } from "react-bootstrap"
import { AzureAD, AuthenticationState } from "react-aad-msal"
import { signInAuthProvider } from "./../authProvider"
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Navbar,
  Nav,
} from "react-bootstrap"
import { FaChevronDown } from "react-icons/fa"
import { Link } from "gatsby"

function SideNav() {
  return (
    <Col
      md={2}
      className="p-0"
      style={{
        height: "100",
        minHeight: "100vh",
        color: "whitesmoke",
        backgroundColor: "#43425d",
        display: "block !important",
        overflow: "hidden",
        position: "sticky",
        top: "4 rem",
        zIndex: "1000",
      }}
    >
      <h4 className="pt-2 pb-3 pl-2" style={{ backgroundColor: "#3c3b54" }}>
        CBET Admin
      </h4>
      <Nav defaultActiveKey="/admin" className="flex-column" fill justify>
        <Link
          to="/admin"
          className="nav-link text-light"
          activeClassName="active"
        >
          Dashboard
        </Link>
        <Link
          to="/admin-jobs"
          className="nav-link text-light"
          activeClassName="active"
        >
          Jobs
        </Link>
        <Link
          to="/admin-events"
          className="nav-link text-light"
          activeClassName="active"
        >
          Events
        </Link>
        <Link
          to="/admin-blog"
          className="nav-link text-light"
          activeClassName="active"
        >
          Blog
        </Link>
      </Nav>
    </Col>
  )
}

export default function Layout({ title, category, children }) {
  return (
    <AzureAD provider={signInAuthProvider} forceLogin={true}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            return (
              <Container fluid>
                <Row className="flex-xl-nowrap">
                  <SideNav />
                  <Col md={10} className="pb-5">
                    <Navbar expand="lg" variant="light" bg="light">
                      <Form className="w-75" inline>
                        <FormControl
                          type="text"
                          placeholder="&#x1F50D; Search for jobs, events, and posts"
                          className="mr-sm-2 w-100"
                        />
                      </Form>
                      <Navbar.Toggle />
                      <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                          Signed in as:
                          <span className="text-dark">{` ${accountInfo.account.name}`}</span>
                        </Navbar.Text>
                      </Navbar.Collapse>
                    </Navbar>

                    <Row className="pt-5 pb-5">
                      <Col md={3}>
                        {category === undefined ? (
                          <h2>{`${title}`}</h2>
                        ) : (
                          <h2>{`${title} - ${category}`}</h2>
                        )}
                      </Col>
                      <Col md={2}>
                        <Link to="admin-create">
                          <Button variant="outline-primary">Create New</Button>
                        </Link>
                      </Col>
                      <Col md={2}>
                        <p>
                          Filter One <FaChevronDown />
                        </p>
                      </Col>
                      <Col md={2}>
                        <p>
                          Filter Two <FaChevronDown />
                        </p>
                      </Col>
                    </Row>
                    {children}
                  </Col>
                </Row>
              </Container>
            )
          case AuthenticationState.Unauthenticated:
            // TODO: ADD Cbet Styles for unauthenticated
            return (
              <div>
                {error && (
                  <p>
                    <span>
                      An error occurred during authentication, please try again!
                    </span>
                  </p>
                )}
                <p>
                  <span>Please Login to continue.</span>
                  <Button onClick={login}>Login</Button>
                </p>
              </div>
            )
          case AuthenticationState.InProgress:
            // TODO: ADD Cbet Styles for unauthenticating
            return <p>Authenticating...</p>
          default:
            return null
        }
      }}
    </AzureAD>
  )
}
