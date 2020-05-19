import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"
import useCbetAuth from "../hooks/use-cbet-auth"
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap"
import Moment from "react-moment"
import { FaPen, FaTimes } from "react-icons/fa"

import { navigate } from "@reach/router"
import { showActive, showDate, showAddress } from "../utils/admin"
import styled from "styled-components"

const MetaSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export default function AdminEvents() {
  const authContent = useCbetAuth()
  const [cbetContent, setCbetContent] = useState([])

  useEffect(() => {
    fetch(
      `https://cbetdata.azurewebsites.net/api/GetCbetContent?code=${authContent}`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setCbetContent(resultData)
      })
  }, [])

  function handleEdit(e, cbetContent) {
    e.preventDefault()
    console.log("clicked edit", cbetContent)

    navigate("/admin-create", {
      state: { cbetContent },
    })
  }

  const events = cbetContent.filter(post => post.Category === 2)

  return (
    <Layout title="Events">
      <SEO title="Admin Events" />
      <Container>
        <Row>
          {events.map(event => (
            <Col md={4}>
              <Card key={event.Id} className="mb-3">
                <Card.Header className="d-flex justify-content-between">
                  {event.CategoryName}
                  <div className="meta-edit">
                    <FaPen
                      style={{ cursor: "pointer" }}
                      onClick={e => handleEdit(e, event)}
                    />
                    <FaTimes style={{ cursor: "pointer" }} className="ml-2" />
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
                    <MetaSection>
                      {showActive(event.Status)}
                      {showDate(
                        "Modified Date",
                        event.ModifyDate,
                        event.CreatedDate
                      )}
                      {showDate("Start Date", event.StartDate)}
                      {showDate("End Date", event.EndDate)}
                      {showAddress(event.Location)}
                    </MetaSection>
                    {/* copied from stack overflow, do not trust */}
                    {/* https://stackoverflow.com/questions/55418929/how-can-i-remove-html-markup-from-strings-in-state-data/55419024 */}
                    {event.Description.slice(0, 140).replace(
                      /<\/?[^>]+(>|$)/g,
                      ""
                    ) + "..."}
                  </Card.Text>
                  <a
                    href={event.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline-primary">Event Link</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}
