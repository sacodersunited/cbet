import React from "react"
import SEO from "../components/seo"
import ListGroup from "react-bootstrap/ListGroup"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"

const Admin = () => {
  if (!isAuthenticated()) {
    console.log("not authenticated")
    login()
    return <p>Redirecting to login...</p>
  }

  console.log("is Authenticated...")

  const user = getProfile()
  console.log("user", user)
  return (
    <Layout>
      <SEO title="Admin" />
      <Container>
        <h2 className="pt-5 pb-5">Cbet Administration</h2>
        <ListGroup style={{ height: "45vh" }}>
          <ListGroup.Item variant="primary" action href="#link1">
            Class Scheduler
          </ListGroup.Item>
          <ListGroup.Item variant="secondary" action disabled href="#link2">
            Next Feature (Coming soon)
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </Layout>
  )
}

export default Admin
