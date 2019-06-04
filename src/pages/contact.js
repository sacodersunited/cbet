import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactFormStaticQuery from "../components/ContactFormStaticQuery"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactFormStaticQuery />
    </Layout>
  )
}

export default Contact
