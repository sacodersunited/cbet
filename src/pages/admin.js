import React from "react"
import SEO from "../components/seo"
import ListGroup from "react-bootstrap/ListGroup"
// import { login, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/admin/layout"
import Container from "react-bootstrap/Container"
import { navigate } from "gatsby"

const Admin = () => {
  // if (!isAuthenticated()) {
  //   console.log("not authenticated")
  //   login()
  //   return <p>Redirecting to login...</p>
  // }

  // const user = getProfile()
  const user = null
  console.log("user", user)
  return (
    <Layout>
      <SEO title="Admin" />

      <h2 className="pt-5 pb-5">Dasboard</h2>
      <ListGroup style={{ height: "45vh" }}>
        <ListGroup.Item
          variant="primary"
          action
          onClick={() => navigate("/schedule/")}
        >
          Class Scheduler
        </ListGroup.Item>
        <ListGroup.Item action variant="secondary">
          Next Feature (Coming soon)
        </ListGroup.Item>
      </ListGroup>
    </Layout>
  )
}

export default Admin
