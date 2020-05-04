import React from "react"
import SEO from "../components/seo"
import ListGroup from "react-bootstrap/ListGroup"
// import { login, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/admin/layout"
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

      <h2 className="pt-5 p b-5">Dashboard</h2>
      <p>
        edit the dashboard from{" "}
        <pre className="p-3 mb-2 bg-dark text-white">/src/pages/admin</pre>
      </p>
    </Layout>
  )
}

export default Admin
