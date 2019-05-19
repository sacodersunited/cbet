import React from "react"
import SEO from "../components/seo"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/layout"

const Admin = () => {
  if (!isAuthenticated()) {
    console.log("not authenticated")
    login()
    return <p>Redirecting to login...</p>
  }

  console.log("is Authenticated...")

  const user = getProfile()
  console.log("user", user)
  return (
    <Layout>
      <SEO title="Admin" />
    </Layout>
  )
}

export default Admin
