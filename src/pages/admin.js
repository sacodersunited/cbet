import React from "react"
import SEO from "../components/seo"
// import { login, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/admin/layout"

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
    <Layout title="Dashboard">
      <SEO title="Admin" />
      <p>edit the this page from </p>
      <pre className="p-3 mb-2 bg-dark text-white">/src/pages/admin</pre>
    </Layout>
  )
}

export default Admin
