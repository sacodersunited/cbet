import React from "react"
import { AzureAD, AuthenticationState } from "react-aad-msal"
import { Button, Container, Row, Col, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { signInAuthProvider } from "../components/authProvider"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"

const AdminCreate = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  return (
    <AzureAD provider={signInAuthProvider} forceLogin={true}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            return (
              <Layout title="Create/Edit">
                <SEO title="Admin Create Edit" />
                <Container>
                  <Row>
                    <Col md={4}>
                      <Form.Group controlId="selectCategory">
                        <Form.Control
                          as="select"
                          name="category"
                          ref={register()}
                        >
                          <option value="">Select</option>
                          <option value="Job">Job</option>
                          <option value="Event">Event</option>
                          <option value="Blog">Blog</option>
                        </Form.Control>
                        <Form.Label>Job, Event or Blog Post</Form.Label>
                      </Form.Group>

                      <Form.Group controlId="TitleHere">
                        <Form.Control as="text" ref={register()}></Form.Control>
                        <Form.Label>Title of Blog Post</Form.Label>
                      </Form.Group>

                      <Form.Group controlId="AuthorHere">
                        <Form.Control as="text" ref={register()}></Form.Control>
                        <Form.Label>Author</Form.Label>
                      </Form.Group>

                      <Form.Row controlId="selectCategory">
                        <Form.Group as={Col}>
                          <Form.Control
                            style={{ width: "75px" }}
                            as="select"
                            name="month"
                            ref={register()}
                          >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Control>
                          <Form.Label>Month</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col}>
                          <Form.Control
                            style={{ width: "75px" }}
                            as="select"
                            name="day"
                            ref={register()}
                          >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Control>
                          <Form.Label>Day</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col}>
                          <Form.Control
                            style={{ width: "100px" }}
                            as="select"
                            name="year"
                            ref={register()}
                          >
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Control>
                          <Form.Label>Year</Form.Label>
                        </Form.Group>
                      </Form.Row>

                      <Form.Group>Banner image</Form.Group>

                      <Form.Row>
                        <Form.Group as={Col}>
                          <Button>Save</Button>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Button>Cancel</Button>
                        </Form.Group>
                      </Form.Row>
                    </Col>
                    <Col md={8}>editor here</Col>
                  </Row>
                </Container>
              </Layout>
            )
          case AuthenticationState.Unauthenticated:
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
            return <p>Authenticating...</p>
          default:
            return null
        }
      }}
    </AzureAD>
  )
}

export default AdminCreate
