import React from "react"
// import { getProfile } from "../utils/auth"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ClassStaticQuery from "../components/ClassStaticQuery"

const Schedule = () => {
  const user = {}

  return (
    <Layout>
      <SEO title="Schedule" />
      <ClassStaticQuery user={user} />
    </Layout>
  )
}

export default Schedule
