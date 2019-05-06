import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ClassScheduler from "../components/classScheduler"

const Admin = () => (
  <Layout>
    <SEO title="Admin" />
    {/* <h1>Hi from the Admin Us</h1>
    <p>Welcome to Admin Us</p>
    <Link to="/">Go back to the homepage</Link> */}
    <ClassScheduler />
  </Layout>
)

export default Admin
