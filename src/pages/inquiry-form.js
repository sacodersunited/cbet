import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { UseScript } from "../hooks/use-script"

const InquiryForm = () => {
  UseScript("//embed.typeform.com/next/embed.js")

  return (
    <Layout>
      <SEO title="Inquiry Form" />
      <div
        data-tf-widget="YKOHKJGE"
        style={{ width: "100%", height: "600px" }}
      ></div>
    </Layout>
  )
}

export default InquiryForm
