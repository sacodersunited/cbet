import React from "react"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"

const AdminEvents = () => {
  const user = null
  console.log("user", user)
  return (
    <Layout title="Events">
      <SEO title="Admin Events" />
      <p>edit the this page from </p>
      <pre className="p-3 mb-2 bg-dark text-white">/src/pages/admin-events</pre>
    </Layout>
  )
}

export default AdminEvents
