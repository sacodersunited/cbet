import React from "react"
import { Button } from "react-bootstrap"
import { signInAuthProvider } from "./../authProvider"
import { AzureAD, AuthenticationState } from "react-aad-msal"
import {
  Container,
  Row,
  Col,
  // Form,
  // FormControl,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap"
// import { FaChevronDown } from "react-icons/fa"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import styled from "styled-components"

const StyledLink = styled(Link)`
  &.active {
    background-color: #3c3b54;
    border-left: 3px solid #a3a0fb;
  }
`

const StyledLoadingBG = styled.div`
  background-color: #191b28;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

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
      <h5 className="pt-3 pb-3 pl-3" style={{ backgroundColor: "#3c3b54" }}>
        CBET Admin
      </h5>
      <Nav defaultActiveKey="/admin" className="flex-column" fill justify>
        <StyledLink
          to="/admin"
          className="nav-link text-light"
          activeClassName="active"
        >
          Dashboard
        </StyledLink>
        <StyledLink
          to="/admin-jobs"
          className="nav-link text-light"
          activeClassName="active"
        >
          Jobs
        </StyledLink>
        <StyledLink
          to="/admin-events"
          className="nav-link text-light"
          activeClassName="active"
        >
          Events
        </StyledLink>
        <StyledLink
          to="/admin-blog"
          className="nav-link text-light"
          activeClassName="active"
        >
          Blog
        </StyledLink>
      </Nav>
    </Col>
  )
}

export default function Layout({ title, category, clickNew, children }) {
  function createNewCbetContent(e) {
    e.preventDefault()

    navigate("/admin-create")
    if (clickNew) {
      console.log("Clear fields called", clickNew)
      clickNew()
    }
  }

  // if (typeof document !== `undefined`) {
  return (
    <AzureAD provider={signInAuthProvider} forceLogin={true}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            return (
              <Container fluid>
                <Row className="flex-xl-nowrap">
                  <SideNav />
                  <Col
                    md={10}
                    className="pb-5"
                    style={{ backgroundColor: "#f0f0f7" }}
                  >
                    <Navbar expand="lg" variant="light" bg="light">
                      {/* <Form className="w-75" inline>
                    <FormControl
                      type="text"
                      placeholder="&#x1F50D; Search for jobs, events, and posts"
                      className="mr-sm-2 w-100"
                    />
                  </Form> */}
                      <Navbar.Toggle />
                      <Navbar.Collapse className="justify-content-end">
                        <NavDropdown
                          title={`Signed in as ${accountInfo.account.name}`}
                          id="basic-nav-dropdown"
                        >
                          <NavDropdown.Item onClick={logout}>
                            Logout
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Navbar.Collapse>
                    </Navbar>
                    <Container>
                      <Row className="pt-5 pb-5">
                        <Col md={3}>
                          {category === undefined ? (
                            <h2>{`${title}`}</h2>
                          ) : (
                            <h2>{`${title} - ${category}`}</h2>
                          )}
                        </Col>
                        <Col md={2}>
                          <Button
                            variant="outline-primary"
                            onClick={createNewCbetContent}
                          >
                            Create New
                          </Button>
                        </Col>
                        {/* <Col md={2}>
                      <p>
                        Filter One <FaChevronDown />
                      </p>
                    </Col>
                    <Col md={2}>
                      <p>
                        Filter Two <FaChevronDown />
                      </p>
                    </Col> */}
                      </Row>
                    </Container>
                    {children}
                  </Col>
                </Row>
              </Container>
            )
          case AuthenticationState.Unauthenticated:
            // TODO: Added a logout button but the AUth client kicks in....may not need this or authenticating state to the app
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
            return (
              <StyledLoadingBG>
                <p style={{ fontSize: "62px" }}>Authenticating...</p>
              </StyledLoadingBG>
            )
          default:
            return null
        }
      }}
    </AzureAD>
  )
  // } else {
  //   return ""
  // }
}
