import React from "react"
// import { getProfile } from "../utils/auth"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CbetClassesStaticQuery from "../components/CbetClassesStaticQuery"

const Schedule = () => {
  // const user = getProfile()
  const user = null
  return (
    <Layout>
      <SEO title="Schedule" />
      <CbetClassesStaticQuery user={user} />>
    </Layout>
  )
}

export default Schedule
