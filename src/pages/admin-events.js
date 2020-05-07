import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"
import useCbetAuth from "../hooks/use-cbet-auth"
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap"
import Moment from "react-moment"
import { FaPen, FaTimes } from "react-icons/fa"

export default function AdminEvents() {
  const authContent = useCbetAuth()
  const [cbetContent, setCbetContent] = useState([])

  useEffect(() => {
    fetch(
      `https://cbetcontent.azurewebsites.net/api/GetCbetContent?code=${authContent}`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setCbetContent(resultData)
      })
  }, [authContent])

  const events = cbetContent.filter(post => post.Category === 2)

  return (
    <Layout title="Events">
      <SEO title="Admin Events" />
      <pre className="p-3 mb-2 bg-dark text-white">
        edit the this page from /src/pages/admin-events
      </pre>

      {/* <pre>{JSON.stringify(cbetContent, null, 2)}</pre> */}
      <Container>
        <Row>
          {events.map(event => (
            <Col md={4}>
              <Card key={event.Id} className="mb-3">
                <Card.Header className="d-flex justify-content-between">
                  {event.CategoryName}
                  <div className="meta-edit">
                    <FaPen />
                    <FaTimes className="ml-2" />
                  </div>
                </Card.Header>
                <Card.Body style={{ minHeight: "200px" }}>
                  <Card.Title className="d-flex justify-content-between">
                    {event.Title}
                    <Badge variant="primary" style={{ height: "24px" }}>
                      <Moment format="MM/DD">{event.StartDate}</Moment>
                    </Badge>
                  </Card.Title>
                  <Card.Text>
                    {/* copied from stack overflow, do not trust */}
                    {/* https://stackoverflow.com/questions/55418929/how-can-i-remove-html-markup-from-strings-in-state-data/55419024 */}
                    {event.Description.slice(0, 140).replace(
                      /<\/?[^>]+(>|$)/g,
                      ""
                    ) + "..."}
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}
