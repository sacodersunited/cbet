import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FinancialAid = () => (
  <Layout>
    <SEO title="Financial-Aid" />
    <h1>Hi from the Financial-Aid Page</h1>
    <p>Welcome to Financial-Aid</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FinancialAid
