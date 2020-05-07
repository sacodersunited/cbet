import React from "react"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"

export default function Admin() {
  return (
    <Layout title="Dashboard">
      <SEO title="Admin Dashboard" />
      <pre className="p-3 mb-2 bg-dark text-white">
        edit the this page from /src/pages/admin
      </pre>
    </Layout>
  )
}
