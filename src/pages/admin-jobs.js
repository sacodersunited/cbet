import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"
import useCbetAuth from "../hooks/use-cbet-auth"
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap"
import Moment from "react-moment"
import { FaPen, FaTimes } from "react-icons/fa"
import { showActive } from "../utils/admin"

export default function AdminJobs() {
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
                    <FaPen />
                    <FaTimes className="ml-2" />
                  </div>
                </Card.Header>
                <Card.Body style={{ minHeight: "200px" }}>
                  <Card.Title className="d-flex justify-content-between">
                    {job.Title}
                    <Badge variant="primary" style={{ height: "24px" }}>
                      <Moment format="MM/DD">{job.StartDate}</Moment>
                    </Badge>
                  </Card.Title>
                  <Card.Text>
                    <div className="meta">{showActive(job.Status)}</div>
                    {/* copied from stack overflow, do not trust */}
                    {/* https://stackoverflow.com/questions/55418929/how-can-i-remove-html-markup-from-strings-in-state-data/55419024 */}
                    {job.Description.slice(0, 140).replace(
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
