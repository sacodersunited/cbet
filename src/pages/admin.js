import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"
import {
  Col,
  Container,
  Row,
  ListGroup,
  Jumbotron,
  Button,
} from "react-bootstrap"
import useCbetAuth from "../hooks/use-cbet-auth"

export default function Admin() {
  const authContent = useCbetAuth()
  const [cbetContent, setCbetContent] = useState([])

  useEffect(() => {
    fetch(
      `https://cbetdata.azurewebsites.net/api/GetCbetContent?code=${authContent}`
    )
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setCbetContent(resultData)
      })
  }, [])

  return (
    <Layout title="Dashboard">
      <SEO title="Admin Dashboard" />
      <Container fluid>
        <Row>
          <Col md={4}>
            <Jumbotron>
              <h1>CBET Administration</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Email Cbet Web Team</Button>
              </p>
            </Jumbotron>
            <ListGroup variant="flush">
              <ListGroup.Item action>Active Jobs: 5</ListGroup.Item>
              <ListGroup.Item action>Active Events: 2</ListGroup.Item>
              <ListGroup.Item action>Active Blogs: 1</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={8} style={{ display: "flex", justifyContent: "center" }}>
            <iframe
              width="auto"
              height="900"
              src="https://datastudio.google.com/embed/reporting/3f03ff9d-fae7-4d26-86dd-25e90cbf0073/page/1M"
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
