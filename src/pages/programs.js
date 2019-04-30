import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Programs = () => (
  <Layout>
    <SEO title="Programs" />
    <h1>Hi from the Programs Page</h1>
    <p>Welcome to Programs</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Programs
