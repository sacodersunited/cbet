import React from "react"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"

const AdminBlog = props => {
  const user = null
  console.log("user", user)

  return (
    <Layout title="Admin Blog">
      <SEO title="Admin" />
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <pre>edit the this page from </pre>
      <pre className="p-3 mb-2 bg-dark text-white">/src/pages/admin-blog</pre>
    </Layout>
  )
}

export default AdminBlog
