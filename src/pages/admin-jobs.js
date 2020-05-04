import React from "react"
import SEO from "../components/seo"
// import { login, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/admin/layout"

const AdminJobs = () => {
  // if (!isAuthenticated()) {
  //   console.log("not authenticated")
  //   login()
  //   return <p>Redirecting to login...</p>
  // }

  // const user = getProfile()
  const user = null
  console.log("user", user)
  return (
    <Layout title="Jobs">
      <SEO title="Admin Jobs" />
      <p>edit the this page from </p>
      <pre className="p-3 mb-2 bg-dark text-white">/src/pages/admin-jobs</pre>
    </Layout>
  )
}

export default AdminJobs
