import React from "react"
import { Button, Container, Row, Col, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"
import SunEditor from "suneditor-react"
import "suneditor/dist/css/suneditor.min.css"
import CbetDropzone from "../components/CbetDropzone"

const AdminCreate = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  return (
    <Layout title="Create/Edit">
      <SEO title="Admin Create Edit" />
      <Container>
        <Row>
          <Col md={4}>
            <Form.Group controlId="selectCategory">
              <Form.Control as="select" name="category" ref={register()}>
                <option value="">Select</option>
                <option value="Job">Job</option>
                <option value="Event">Event</option>
                <option value="Blog">Blog</option>
              </Form.Control>
              <Form.Label>Job, Event or Blog Post</Form.Label>
            </Form.Group>

            <Form.Group controlId="TitleHere">
              <Form.Control type="text" ref={register()}></Form.Control>
              <Form.Label>Title of Blog Post</Form.Label>
            </Form.Group>

            <Form.Group controlId="AuthorHere">
              <Form.Control type="text" ref={register()}></Form.Control>
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

            <Form.Group>
              <CbetDropzone></CbetDropzone>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col}>
                <Button>Save</Button>
              </Form.Group>
              <Form.Group as={Col}>
                <Button>Cancel</Button>
              </Form.Group>
            </Form.Row>
          </Col>
          <Col md={8}>
            <SunEditor />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AdminCreate
