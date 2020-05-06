import React from "react"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"

const Admin = () => {
  return (
    <Layout title="Dashboard">
      <SEO title="Admin Dashboard" />
      <p>edit the this page from </p>
      <pre className="p-3 mb-2 bg-dark text-white">/src/pages/admin</pre>
    </Layout>
  )
}

export default Admin
