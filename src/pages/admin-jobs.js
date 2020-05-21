import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"
import useCbetAuth from "../hooks/use-cbet-auth"
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap"
import Moment from "react-moment"
import { navigate } from "@reach/router"
import { FaPen, FaTimes } from "react-icons/fa"
import { showActive, showDate } from "../utils/admin" 
import styled from "styled-components"
import { Link } from "react-router-dom"

const MetaSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export default function AdminJobs(props) {
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

  const jobs = cbetContent.filter(post => post.Category === 1)

  return (
    <Layout title="Jobs">
      <SEO title="Admin Blog" />
      <Container>
        <Row>
          {jobs.map(job => (
            <Col md={4}>
              <Card key={job.Id} className="mb-3">
                <Card.Header className="d-flex justify-content-between">
                  {job.CategoryName}
                  <div className="meta-edit">
                    <FaPen
                      style={{ cursor: "pointer" }}
                      onClick={e => handleEdit(e, job)}
                    />
                    <FaTimes style={{ cursor: "pointer" }} className="ml-2" />
                  </div>
                </Card.Header>
                <Card.Body style={{ minHeight: "200px" }}>
                  <Card.Title className="d-flex justify-content-between">
                    {job.Title}
                    <Badge variant="primary" style={{ height: "24px" }}>
                      <Moment format="MM/DD">{job.StartDate}</Moment>
                    </Badge>
                  </Card.Title>
                  <Card.Text style={{ minHeight: "170px" }}>
                    <MetaSection>
                      {showActive(job.Status)}
                      {showDate(
                        "Modified Date",
                        job.ModifyDate,
                        job.CreatedDate
                      )}
                    </MetaSection>
                    {/* copied from stack overflow, do not trust */}
                    {/* https://stackoverflow.com/questions/55418929/how-can-i-remove-html-markup-from-strings-in-state-data/55419024 */}
                    {job.Description.slice(0, 140).replace(
                      /<\/?[^>]+(>|$)/g,
                      ""
                    ) + "..."}
                  </Card.Text>
                  <a href={job.Link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-primary">Apply Link</Button>
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
