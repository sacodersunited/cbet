import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Admissions = () => (
  <Layout>
    <SEO title="Admissions" />
    <h1>Hi from the Admissions Page</h1>
    <p>Welcome to Admissions</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Admissions
