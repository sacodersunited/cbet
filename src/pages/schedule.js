import React from "react"
// import { getProfile } from "../utils/auth"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import ClassStaticQuery from "../components/ClassStaticQuery"
import CbetClassesStaticQuery from "../components/CbetClassesStaticQuery"

const Schedule = () => {
  const user = {}

  return (
    <Layout>
      <SEO title="Schedule" />
      {/* <ClassStaticQuery user={user} /> */}
      <CbetClassesStaticQuery user={user} />>
    </Layout>
  )
}

export default Schedule
