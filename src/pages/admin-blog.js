import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Layout from "../components/admin/layout"
import useCbetAuth from "../hooks/use-cbet-auth"

export default function AdminBlog() {
  const authContent = useCbetAuth()
  const [cbetContent, setCbetContent] = useState([])

  useEffect(() => {
    fetch(
      `https://cbetdata.azurewebsites.net/api/GetCbetContent?code=${authContent}`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setCbetContent(resultData)
      })
  }, [authContent])

  if (cbetContent.length > 0) {
    console.log(`cbetContent ${cbetContent}`)
    console.log(
      "test",
      cbetContent.map(cat => {
        console.log("cat", cat)
        return cat
      })
    )
  }

  return (
    <Layout title="Admin Blog">
      <SEO title="Admin" />
      <p>edit the this page from </p>
      <pre className="p-3 mb-2 bg-dark text-white">/src/pages/admin-blog</pre>
    </Layout>
  )
}
