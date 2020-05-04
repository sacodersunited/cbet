import React from "react"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"

const AdminBlog = () => {
  const user = null
  console.log("user", user)
  return (
    <Layout title="Admin Blog">
      <SEO title="Admin" />
      <p>edit the this page from </p>
      <pre className="p-3 mb-2 bg-dark text-white">/src/pages/admin-blog</pre>
    </Layout>
  )
}

export default AdminBlog
