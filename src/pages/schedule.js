import React from "react"
import { Link } from "gatsby"
import { getProfile } from "../utils/auth"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Schedule = () => {
  const user = getProfile()
  console.log("user", user)

  return (
    <Layout>
      <SEO title="Schedule" />
      <h1>Hi from the Schedule Page</h1>
      <p>Welcome to Schedule</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Schedule
