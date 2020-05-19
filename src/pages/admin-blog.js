import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"
import useCbetAuth from "../hooks/use-cbet-auth"
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap"
import Moment from "react-moment"
import { FaPen, FaTimes } from "react-icons/fa"
import { showActive, showDate, showAuthor } from "../utils/admin"
import styled from "styled-components"

const MetaSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export default function AdminBlog() {
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

  const posts = cbetContent.filter(post => post.Category === 3)

  return (
    <Layout title="Blog Posts">
      <SEO title="Admin Blog" />
      <Container>
        <Row>
          {posts.map(post => (
            <Col md={4}>
              <Card key={post.Id} className="mb-3">
                <Card.Header className="d-flex justify-content-between">
                  {post.CategoryName}
                  <div className="meta-edit">
                    <FaPen color="#A4AFB7" />
                    <FaTimes color="#A4AFB7" className="ml-2" />
                  </div>
                </Card.Header>
                <Card.Body style={{ minHeight: "200px" }}>
                  <Card.Title className="d-flex justify-content-between">
                    {post.Title}
                    <Badge variant="primary" style={{ height: "24px" }}>
                      <Moment format="MM/DD">{post.StartDate}</Moment>
                    </Badge>
                  </Card.Title>
                  <Card.Text style={{ minHeight: "190px" }}>
                    <MetaSection>
                      {showActive(post.Status)}
                      {showDate("Published Date", post.StartDate)}
                      {showDate(
                        "Modified Date",
                        post.ModifyDate,
                        post.CreatedDate
                      )}
                      {showAuthor(post.Author)}
                    </MetaSection>
                    {/* copied from stack overflow, do not trust */}
                    {/* https://stackoverflow.com/questions/55418929/how-can-i-remove-html-markup-from-strings-in-state-data/55419024 */}
                    {post.Description.slice(0, 140).replace(
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
